import React from "react";

function ProgressBar() {
  return (
    <>
      <div
        className={`relative w-64 h-2 bg-gray-200 rounded-full overflow-hidden before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[70%] before:bg-blue-600 before:rounded-full`}
      ></div>
    </>
  );
}

export default ProgressBar;
