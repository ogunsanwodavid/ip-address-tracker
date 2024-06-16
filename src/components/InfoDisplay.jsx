function InfoDisplay({ ipAddress, location, timeZone, isp }) {
  return (
    <div className="w-full max-w-[800px] mx-auto bg-white rounded-lg p-3 md:p-6 md:absolute md:bottom-0 md:left-[50%] md:translate-x-[-50%] md:translate-y-[50%]">
      <ul className="display-list flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-3">
        <li className="flex flex-col items-center md:items-start md:border-l-[1px] md:border-dark-gray md:pl-[15px] md:w-full">
          <p className="uppercase text-dark-gray text-[11px] font-bold md:text-[13px]">
            IP ADDRESS
          </p>
          <div className="font-medium md:text-xl">{ipAddress}</div>
        </li>

        <li className="flex flex-col items-center md:items-start md:border-l-[1px] md:border-dark-gray md:pl-[15px] md:w-full">
          <p className="uppercase text-dark-gray text-[11px] font-bold md:text-[13px]">
            LOCATION
          </p>
          <div className="font-medium md:text-xl">{location}</div>
        </li>

        <li className="flex flex-col items-center md:items-start md:border-l-[1px] md:border-dark-gray md:pl-[15px] md:w-full">
          <p className="uppercase text-dark-gray text-[11px] font-bold md:text-[12px]">
            TIMEZONE
          </p>
          <div className="font-medium md:text-xl">{timeZone}</div>
        </li>

        <li className="flex flex-col items-center md:items-start md:border-l-[1px] md:border-dark-gray md:pl-[15px] md:w-full">
          <p className="uppercase text-dark-gray text-[11px] font-bold md:text-[13px]">
            ISP
          </p>
          <div className="font-medium md:text-xl">{isp}</div>
        </li>
      </ul>
    </div>
  );
}

export default InfoDisplay;
