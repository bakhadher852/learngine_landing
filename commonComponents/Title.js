import React from "react";

const Title = ({ mainTitle, secondTitle, underline, children }) => {
  return (
    <section className="flex-row relative ">
      {underline && (
        <div className="w-full flex h-16 absolute mt-4">
          <div className="w-[15rem] bg-[#8AC247] h-4 mx-auto my-auto mt-10 "></div>
        </div>
      )}

      <h1 className="text-center  items-center text-5xl text-bold capitalize p-3 relative">
        {mainTitle}
      </h1>
      <h2 className="text-center text-2xl  capitalize p-3 text-textColor">
        {secondTitle}
      </h2>
      {children}
    </section>
  );
};

export default Title;
