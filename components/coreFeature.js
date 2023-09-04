import React from "react";
import Title from "commonComponents/Title";
import ImgIcon from "commonComponents/ImgIcon";
const CoreFeature = () => {
  const CoreFeatureListRowOne = [
    {
      src: "educate.png",
      Title: (
        <div
          dangerouslySetInnerHTML={{
            __html: "Educate </br> & Assess",
          }}
        />
      ),
      body: "Tools to include education-materials & assessment activities all in one place.",
    },
    {
      src: "allcontent.png",
      Title: (
        <div dangerouslySetInnerHTML={{ __html: "All Content </br> Types" }} />
      ),
      body: "Any possible type of content have a tool  with options to include & use.",
    },
  ];
  const CoreFeatureListRowTwo = [
    {
      src: "automated.png",
      Title: (
        <div
          dangerouslySetInnerHTML={{ __html: " Automated <br /> Assistant" }}
        />
      ),
      body: "Machines could help you with submissions grading, notifying and many things.",
    },
    {
      src: "automated.png",
      Title: (
        <div
          dangerouslySetInnerHTML={{
            __html: " Integrate <br /> & Communicate",
          }}
        />
      ),
      body: " We Offer Auto-Integration Option with Our Own Semesteer SIS System.",
    },
  ];

  return (
    <>
      {/* Core features section */}
      <div id="features" className="  h-5 w-[100%] "></div>

      <Title
        mainTitle=" core features"
        secondTitle=" what make us the best?"
        underline="true"
      />

      <section>
        <div className="xxs:block md:flex  w-full  ">
          {CoreFeatureListRowOne.map(({ src, Title, body }, i) => (
            <div
              className="xxs:w-[60%] md:w-[50%] p-9  flex-row xxs:mx-auto"
              key={i}
            >
              <div className=" flex w-fit mx-auto my-auto  ">
                <img className="inline-block w-24 mb-10" src={src} alt="" />
                <h1 className="text-centeitems-center md:text-xl lg:text-3xl text-bold capitalize p-3 inline-block ">
                  {Title}
                </h1>
              </div>
              <h2 className=" md:text-base lg:text-2xl  w-fit  mx-auto my-auto  capitalize p-3 text-justify  text-textColor">
                {body}
              </h2>
            </div>
          ))}
        </div>

        <div className="xxs:block md:flex ">
          <ImgIcon
            className="absolute opacity-30 xxs:w-[40%] xxs:mt-5 md:w-[30%] lg:w-[25%]"
            src="Dots.png"
          />

          {CoreFeatureListRowTwo.map(({ src, Title, body }, i) => (
            <div className="xxs:w-[60%] md:w-[50%] p-9 xxs:mx-auto">
              <div className=" flex w-fit mx-auto">
                <ImgIcon
                  className="inline-block w-24  mt-5 pt-5 relative bottom-10"
                  src={src}
                />
                <h1 className="text-center inline-block items-center md:text-xl lg:text-3xl text-bold capitalize p-3">
                  {Title}
                </h1>
              </div>
              <h2 className="text-justify md:text-base lg:text-2xl w-fit  mx-auto my-auto capitalize p-3 text-textColor">
                {body}
              </h2>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default CoreFeature;
