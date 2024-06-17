import { useEffect } from "react";

function ErrorMessage({ message, setDisplayError, setError }) {
  /**** This removes the error message after 5 seconds of display */
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayError(false);
      setError("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [setDisplayError, setError]);

  return (
    <div className="fixed w-[250px] h-max p-3 bg-black text-white bottom-[40px] rounded-lg left-[50%] translate-x-[-50%] z-20 flex items-center justify-center text-center md:w-[320px]">
      {message}
    </div>
  );
}

export default ErrorMessage;
