import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Title from "commonComponents/Title";
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
const TestimonialSectinList = [
  {
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Incidunt repellat boriosam rem necessitatibus quia eius.Dignissimos illo repellat ab, quibusdam consequatur, itaque remprovident ipsum rerum facilis excepturi cumque quaerat?",
    name: "johan doe",
    position: "CEO of company.com",
  },
  {
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Incidunt repellat boriosam rem necessitatibus quia eius.Dignissimos illo repellat ab, quibusdam consequatur, itaque remprovident ipsum rerum facilis excepturi cumque quaerat?",
    name: "johan doe",
    position: "CEO of company.com",
  },
  {
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Incidunt repellat boriosam rem necessitatibus quia eius.Dignissimos illo repellat ab, quibusdam consequatur, itaque remprovident ipsum rerum facilis excepturi cumque quaerat?",
    name: "johan doe",
    position: "CEO of company.com",
  },
  {
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Incidunt repellat boriosam rem necessitatibus quia eius.Dignissimos illo repellat ab, quibusdam consequatur, itaque remprovident ipsum rerum facilis excepturi cumque quaerat?",
    name: "johan doe",
    position: "CEO of company.com",
  },
];
const NumberSectionList = [
  { number: " 20", title: "schools" },
  { number: " 20,000", title: "active users" },
  { number: "50,000", title: "daily record" },
];
const Testimonials = () => {
  return (
    <div>
      {/* Testimonial sectin */}
      <section id="testimonials" className="w-full h-full  mb-24">
        <Title
          mainTitle=" testimonials"
          secondTitle=" how was out customers experence with learngine?"
          underline={true}
        />
        <div className="w-full h-[20vh]">{/* space before icons */}</div>
        {/* icons section */}
        <div className="flex w-full justify-center ">
          <img
            className="text-center lg:px-28 md:px-16 mt-6"
            src="/icons.png"
            alt=""
          />
        </div>
        <div className="w-full h-[20vh]">
          {/* space before carousel section */}
        </div>
        <Carousel
          className="m-5"
          keyBoardControl={true}
          infinite={true}
          responsive={responsive}
        >
          {TestimonialSectinList.map(({ body, name, position }, i) => {
            return (
              <div>
                <div className="  mx-5 p-4   border-2 border-zinc-300 rounded-lg  ">
                  <p className="text-justify md:text-base lg:text-xl">{body}</p>
                  <h2 className="text-bold text-lg mt-5">{name}</h2>
                  <p>{position}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
        ;
      </section>

      {/* Numbers section */}
      <section className=" w-full flex mb-24">
        {NumberSectionList.map(({ number, title }, i) => {
          const isLastItem = i === NumberSectionList.length - 1;
          return (
            <div className="mx-auto my-auto flex w-full justify-around items-center">
              <div className="w-[25%] ">
                <h1 className="text-center text-primary items-center md:text-4xl lg:text-5xl text-bold capitalize p-3 ">
                  {number}
                </h1>
                <h3 className="text-center md:text-2xl lg:text-3xl text-textColor m-1 flex ">
                  <FontAwesomeIcon icon={faUserGroup} /> {title}
                </h3>
              </div>
              {!isLastItem && (
                <div className="bg-slate-400 w-[1px] h-16 "></div>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};
export default Testimonials;
