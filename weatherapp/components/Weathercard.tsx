import React from "react";

type Props = {};

const Weathercard = (props: Props) => {
  return (
    <div className="bg-white shadow-lg w-90 rounded-lg">
      <div className="p-10 flex flex-row gap-36">
        <div>
          <h3 className="text-3xl font-semibold">20°F</h3>
          <p className=" text-teal-500 font-medium ">Light Rain</p>
          <p className="pt-5 font-medium text-sm">Humidity: 88% </p>
          <p className=" font-medium  text-sm">Wind: 7.5 mph</p>
        </div>
        <div>Image</div>
      </div>
    </div>
  );
};

export default Weathercard;
