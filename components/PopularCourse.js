import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const PopularCourseList = [
  { src: "http://placehold.it/301x390" },
  { src: "http://placehold.it/302x390" },
  { src: "http://placehold.it/303x390" },
];
const PopularCourse = () => {
  return (
    <div>
      <div className="w-full h-[20vh] ">
        {/* space div befoer popular cousrs */}
      </div>
      {/* popular course section */}

      <section className="relative mt-5  w-full h-screen ">
        <div className="bg-primaryh-[80%] w-[80%] rounded-tr-custom  absolute "></div>
        <div className="w-full h-[100px]"></div>
        <Carousel
          infinite={true}
          keyBoardControl={true}
          responsive={responsive}
        >
          <div>
            <div className="w-[260px] h-[340px] mx-5 bg-primary border-gray-500 rounded-3xl  ">
              {/* course shadow background */}
              <div className="w-[250px] flex h-[100px]  absolute  mt-11  mx-auto">
                <div className="w-[6rem] bg-[#79a93e] h-3 mx-auto my-auto  "></div>
              </div>
              <h1 className="text-center  items-center text-4xl text-bold capitalize p-3  text-white relative">
                popular course
              </h1>

              <h3 className="text-center text-xl  capitalize p-3  text-white">
                nam cursus ullamcorper eros vulputate sed.
              </h3>
            </div>
          </div>

          {PopularCourseList.map(({ src }, i) => {
            return (
              <div
                className="w-[250px] mx-3 border-gray-500 rounded-3xl"
                key={i}
              >
                <img className="rounded-3xl" src={src} />
              </div>
            );
          })}
        </Carousel>
      </section>
    </div>
  );
};
export default PopularCourse;
