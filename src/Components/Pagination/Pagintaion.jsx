import React, { useContext } from "react";
import { AppContext } from "../../Providers/AppProvider";

function Pagination() {
  const {skips , setSkips} = useContext(AppContext);

    const handleClick = (newSkip) => {
      if (newSkip < 0 || newSkip > 13) return; 
      setSkips(newSkip);
    };

    return (
      <div className="flex items-center justify-center space-x-2 pt-24 pb-10">
        <button
          className="px-4 py-2 btn-hover text-white rounded-lg disabled:bg-gray-300"
          onClick={() => handleClick(skips - 1)}
          disabled={skips === 0}
        >
          Previous
        </button>

        <div className="flex items-center space-x-1">
          <p>{skips + 1}</p>
          <p>|</p>
          <p>10</p> 
        </div>

        <button
          className="px-4 py-2 btn-hover text-white rounded-lg  disabled:bg-gray-300"
          onClick={() => handleClick(skips + 1)}
          disabled={skips === 13} 
        >
          Next
        </button>
      </div>
    );
}

export default Pagination;
