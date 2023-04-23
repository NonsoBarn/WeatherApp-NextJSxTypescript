import { weatherState } from "@/types";
import React from "react";

type Props = {};

const Weathercard = ({
  temperature,
  description,
  humidity,
  windspeed,
  icon,
}: weatherState) => {
  return (
    <div className="bg-white shadow-lg w-90 rounded-lg">
      <div className="p-10 flex flex-row gap-36">
        <div>
          <h3 className="text-3xl font-semibold">{temperature}°F</h3>
          <p className=" text-teal-500 font-medium ">{description}</p>
          <p className="pt-5 font-medium text-sm">Humidity: {humidity}% </p>
          <p className=" font-medium  text-sm">Wind: {windspeed} mph</p>
        </div>
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={description}
          />
        </div>
      </div>
    </div>
  );
};

export default Weathercard;
