import { useEffect } from "react";
import iconArrow from "../assets/icon-arrow.svg";

function Form({ inputRef, ipAddress, setInput, handleFormSubmit }) {
  /***** set input value to user's ipaddress on mount */
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = ipAddress;
    }
  }, [inputRef, ipAddress]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  /**** Submit form on pressing enter key */
  const handleKeyDown = (event) => {
    if ((inputRef.current.value !== "") & (event.key === "Enter")) {
      handleFormSubmit();
    }
  };

  return (
    <div className="w-full max-w-[450px] mx-auto">
      <form className="w-full flex h-10 rounded-lg overflow-hidden cursor-pointer md:h-12">
        <input
          className="w-full h-full p-4 font-regular text-very-dark-gray cursor-pointer md:p-5"
          type="text"
          name="form"
          id="form"
          ref={inputRef}
          placeholder="Search for any IP Address or domain"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="w-max h-full p-4 flex items-center justify-center  bg-very-dark-gray md:hover:bg-dark-gray md:p-5"
          onClick={handleFormSubmit}
        >
          <img src={iconArrow} className="w-2 md:w-3" />
        </button>
      </form>
    </div>
  );
}

export default Form;
