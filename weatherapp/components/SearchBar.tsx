import React, { ChangeEvent } from "react";
import { UilSearch } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

type Props = {
  query: any;
  onQuery: (e: ChangeEvent<HTMLInputElement>) => void;
  onQueryClear: () => void;
};

const SearchBar = ({ query, onQuery, onQueryClear }: Props) => {
  return (
    <div>
      <form>
        <div className=" py-8 px-12 ">
          <div className="relative ">
            <button className=" absolute top-2.5 left-3 p-0 text-sm font-medium text-gray-900  hover:text-gray-800 dark:text-white  ">
              <UilSearch size={20} />
            </button>
            <input
              value={query || ""}
              onChange={onQuery}
              type={"text"}
              className=" py-2.5 px-14 w-full z-20 text-sm text-gray-900 bg-white rounded-lg   dark:bg-gray-800  dark:text-white focus:outline-gray-200 dark:focus:outline-gray-900 shadow-md  "
              placeholder="Search location..."
            />
            {query && (
              <button
                onClick={onQueryClear}
                className=" absolute top-2.5 right-3 p-0 text-sm font-medium text-gray-500  hover:text-gray-800 dark:text-white  "
              >
                <UilTimes size={20} />
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
