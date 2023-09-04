import Button from "commonComponents/Button";
import Title from "commonComponents/Title";
import React from "react";

const ulPricelist = [
  { title: "Lorem, ipsum dolor" },
  { title: "ipsum dolor sit amet" },
  { title: "ipsum dolor sit amet" },
  { title: "ipsum dolor sit amet" },
  { title: "ipsum dolor sit amet" },
];

const pricePlanItemsSectionList = [
  {
    title: "Basic",
    price: "Free",
    descreption:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit quos nostrum",
  },
  {
    title: "BEST VALUE",
    price: "$24",
    descreption:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit quos nostrum",
  },
  {
    title: "PRO",
    price: "$54",
    descreption:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit quos nostrum",
  },
  {
    title: "ENTERPRISE",
    price: "$99",
    descreption:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit quos nostrum",
  },
];
const PricePlan = () => {
  return (
    <div>
      <div className="w-full h-[20vh]">{/* space div before price paln */}</div>
      {/* Price section plan */}
      <section id="pricing" className=" w-full h-[100 %] bg-[#F5F5F5] ">
        {/* <div className="w-full flex  h-16 absolute mt-9 ">
          <div className="w-[16rem]  bg-primaryh-4 mx-auto my-auto mt-10 "></div>
        </div>
        <h1 className="text-textColor capitalize text-center  items-center text-5xl text-bold  p-3 pt-10 relative">
          pricing & <span className=" text-black">plan</span>
        </h1> */}
        {/* underline div */}
        {/* <div className="w-full text-center items-center absolute">
      <div className=" w-[8%] h-4 bg-primaryinline-block relative -top-2"></div>
    </div> */}
        <Title
          mainTitle={
            <span>
              <span className="text-textColor">Pricing &</span> Plan
            </span>
          }
          underline={true}
        />
        <div className="w-full  h-[20vh] ">{/* space div */}</div>

        <div className="w-full h-full flex  xxs:p-5 md:p-0  ">
          <div className="mx-auto my-auto xxs:block md:flex  md:w-[1100px] md:justify-around">
            {pricePlanItemsSectionList.map(
              ({ title, price, descreption }, i) => {
                const isSecondItem = i === 1;
                return (
                  <div
                    className={`bg-white xxs:w-[250px] lg:w-[250px] md:w-[210px]  h-[400px] rounded-3xl overflow-hidden drop-shadow-2xl relative  md:z-0 xxs:m-3 md:m-0 m-5 hover:scale-105 cursor-pointer ${
                      isSecondItem
                        ? "border-primary  border-2 scale-105 hover:scale-110"
                        : ""
                    }`}
                    key={i}
                  >
                    <div
                      className={`${
                        isSecondItem
                          ? "w-full h-[95px] bg-primary absolute   z-0"
                          : "hidden"
                      } `}
                    ></div>
                    <header
                      className={`z-10 relative ${
                        isSecondItem ? "text-white " : "text-primary"
                      }`}
                    >
                      <h1 className=" uppercase text-center mt-5 md:text-xl lg:text-2xl">
                        {title}
                      </h1>
                      <h1 className="text-textColor capitalize text-center p-3 text-bold md:text-xl lg:text-2xl">
                        {price}
                      </h1>
                    </header>
                    <div className="w-full flex">
                      <ul className="text-textColor mx-auto my-auto text-center mb-3">
                        {ulPricelist.map(({ title }, i) => {
                          return <li>{title}</li>;
                        })}{" "}
                      </ul>
                    </div>
                    <footer className=" bg-[#F4F9EE]   h-[100%]">
                      <p className=" px-2 text-center ">{descreption}</p>
                      <Button className="hover:scale-105 hover:shadow-2xl bg-primaryflex mx-auto text-white mt-3 uppercase p-1 px-5 rounded-full ">
                        choose plan
                      </Button>
                      <div className="w-full h-[3vh] "></div>
                    </footer>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      <div className="w-full xxs:h-[200px] md:h-[20vh] ">
        {/* space div before ------ */}
      </div>
    </div>
  );
};
export default PricePlan;
