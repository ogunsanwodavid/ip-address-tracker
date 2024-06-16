import "./App.css";
import patternBgMobile from "./assets/pattern-bg-mobile.png";
import patternBgDesktop from "./assets/pattern-bg-desktop.png";
import Form from "./components/Form";
import InfoDisplay from "./components/InfoDisplay";
import Map from "./components/Map";
import { useRef, useState } from "react";
import { useEffect } from "react";

function App() {
  const [isDesktopWidth, setIsDesktopWidth] = useState(
    window.innerWidth >= 780
  );
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const [ipAddress, setIPAddress] = useState("");
  const [location, setLocation] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [isp, setIsp] = useState("");

  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const apiKey = import.meta.env.VITE_MY_API_KEY;
  var fetchURL = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress`;

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopWidth(window.innerWidth >= 780);
    };

    /*** This event listener ensures state updates on window width change */
    window.addEventListener("resize", handleResize);

    handleResize();

    /*** Removed event listener as component unmounts */
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsDesktopWidth]);

  function detectInputType(input) {
    // Regular expression patterns
    const ipPattern =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const domainPattern = /^(?!:\/\/)([a-zA-Z0-9-_]+\.)+[a-zA-Z]{2,11}?$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (ipPattern.test(input)) {
      return "IP Address";
    } else if (domainPattern.test(input)) {
      return "Domain Name";
    } else if (emailPattern.test(input)) {
      return "Email Address";
    } else {
      return "Unknown";
    }
  }

  useEffect(() => {
    async function fetchIPAddress() {
      try {
        const res = await fetch(fetchURL);
        const data = await res.json();
        setIPAddress(data.ip);
        setLocation(`${data.location.city} , ${data.location.country}`);
        setTimeZone(`UTC ${data.location.timezone}`);
        setIsp(data.isp);
        setLat(data.location.lat);
        setLng(data.location.lng);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    if (!inputRef.current.value) {
      fetchIPAddress();
    }
  }, [fetchURL]);

  async function handleFormSubmit(e) {
    e.preventDefault();

    /* if (detectInputType(input) === "Unknown") return; */

    fetchURL = `
    https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}${
      detectInputType(input) === "IP Address" ? `&ipAddress=${input}` : ""
    }${detectInputType(input) === "Domain Name" ? `&domain=${input}` : ""}${
      detectInputType(input) === "Email Address" ? `&email=${input}` : ""
    }${detectInputType(input) === "Unknown" ? `&ipAddress` : ""}`;

    try {
      const res = await fetch(fetchURL);
      const data = await res.json();
      setIPAddress(data.ip);
      setLocation(`${data.location.city} , ${data.location.country}`);
      setTimeZone(`UTC ${data.location.timezone}`);
      setIsp(data.isp);
      setLat(data.location.lat);
      setLng(data.location.lng);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="relative h-screen font-rubik flex flex-col">
      <section
        className="relative w-full h-[250px] p-6 flex flex-col space-y-4 md:p-8 md:h-[280px]"
        style={{
          backgroundImage: `url(${
            isDesktopWidth ? patternBgDesktop : patternBgMobile
          })`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: 10,
        }}
      >
        <h1 className="w-max text-white mx-auto font-semibold text-xl md:text-2xl">
          IP Address Tracker
        </h1>
        <Form
          input={input}
          inputRef={inputRef}
          ipAddress={ipAddress}
          setInput={setInput}
          handleFormSubmit={handleFormSubmit}
        />
        <InfoDisplay
          ipAddress={ipAddress}
          location={location}
          timeZone={timeZone}
          isp={isp}
        />
      </section>

      <Map lat={lat} lng={lng} />
    </div>
  );
}

export default App;
