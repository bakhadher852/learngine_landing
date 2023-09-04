import React from "react";
import ReactPlayer from "react-player/youtube";
import Title from "commonComponents/Title";
import ProductName from "commonComponents/ProductName";
const About = () => {
  const AboutList = [
    {
      title: "University/College",
    },
    {
      title: " School of any type",
    },
    {
      title: "Training Center",
    },
    {
      title: " Trainer",
    },
    {
      title: " Tutor",
    },
  ];

  return (
    <div>
      <div className=" w-full xxs:h-[600px] md:h-[300px] ">
        {/* this div hold space only befor the about lear---*/}
      </div>

      {/* About learngine section */}

      <div className="w-full h-[25vh] ">
        {/* space div before the about section */}
      </div>

      <section
        id="about"
        className="w-[100%] xxs:h-[1000px] md:h-[750px] bg-[#e8e6e6] relative mb-32   "
      >
        <Title
          mainTitle={
            <>
              about <ProductName />
            </>
          }
          secondTitle={
            <>
              who's <ProductName />
              &nbsp; built for?
            </>
          }
          underline={false}
        />

        <div className=" border-slate-600 border-t-4 border-tr-4 border-b-4 border-r-4 xxs:w-[100%] md:w-[80%] xxs:h-[400px] md:h-[70%] rounded-tr-custom rounded-br-custom absolute left-0">
          {/* This div is border */}
        </div>
        <div className="md:flex absolute ">
          <div className="md:w-[60%] xxs:w-[100%]  ">
            <p className=" mt-5 pt-5 text-justify mx-9 lg:text-2xl md:text-base">
              Learngine is a service for whoever is providing any closed
              education materials. It's a platform that help you upload your
              content and follow up with your customers. So if you're one of the
              following business types, then Learngine is here for you.
            </p>
            <ul className="p-7 lg:text-xl md:text-base mx-9 inline-block">
              {AboutList.map(({ title }, i) => (
                <li
                  className="before:w-2 before:bg-primary before:h-2 before:inline-block before:mr-2 before:mb-1 text-primary hover:scale-105"
                  key={i}
                >
                  {title}
                </li>
              ))}
            </ul>
          </div>
          <div className="xxs:flex-wrap md:w-[30%] md:flex mx-auto my-auto ">
            {/* <img className="p-10" src="/class.png" alt="" /> */}
            <div className="xxs:block md:hidden w-full h-[150px] "></div>
            <div className=" xxs:p-5 md:p-0 h-[270px] w-full overflow-hidden md:mt-20 lg:mt-0 rounded-3xl ">
              <ReactPlayer
                url="https://youtu.be/0qisGSwZym4"
                controls={false}
                playing={true}
                muted={true}
                loop={true}
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
