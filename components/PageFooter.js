import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { AiOutlineMenu, AiFillLinkedin } from "react-icons/ai";
import ProductName from "commonComponents/ProductName";
import Logo from "commonComponents/Logo";

const PageFooter = () => {
  const SocialMediaLinksList = [
    { link: "https://www.facebook.com/", icon: <FaFacebookF /> },
    { link: "https://www.linkedin.com/", icon: <AiFillLinkedin /> },
    { link: "https://twitter.com/", icon: <FaTwitter /> },
    { link: "https://www.instagram.com/", icon: <FaInstagram /> },
  ];
  return (
    <div>
      {/* you wana know more section */}
      <section className="w-full h-[100%] bg-Third">
        {/* <img src="/bg.png" alt="" className="w-full h-[90%]  absolute " /> */}
        <div className="md:flex ">
          <div className="xxs:w-[100%]  md:w-[50%] flex-row  ">
            <div className="flex  ">
              <div className="w-[25%]"></div>
              <div className="w-[25%] ">
                <div className=" -mt-8 bg-primary h-16 w-16 rounded-[9px] rotate-45"></div>
              </div>
              <div className="w-[50%] ">
                {" "}
                <img
                  className=" relative -top-16"
                  src="girlinclass.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex  ">
              <div className="w-[50%] flex ">
                <div className="lg:w-[38%] md:w-[10%] h-1"></div>
                <div className="w-[62%]">
                  <img
                    className="w-[10rem] relative -top-8"
                    src="laptopimg.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[50%]">
                <img
                  className=" w-[18rem] relative right-16"
                  src="classboard.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="md:hidden w-full h-[100px]">{/* space div  */}</div>
          {/* right div has social media icons */}
          <div className="xxs:w-[100%] md:w-[50%]  flex-row my-auto overflow-hidden ">
            <div className="flex  w-[50%] lg:pl-12 relative lg:left-[6rem] xl:left-[9rem]  md:left-[4rem] xxs:mx-auto md:mx-0">
              <div className="w-[40%]  flex  ">
                <Logo />
              </div>
              <h2 className="capitalize text-white text-bold text-center p-0 w-[50%] mx-auto my-auto text-4xl relative ">
                <ProductName />
              </h2>
            </div>
            <h3 className="capitalize text-white text-center text-2xl p-2">
              a product of alembicSoft
            </h3>
            <div className="flex  justify-center">
              {SocialMediaLinksList.map(({ link, icon }, i) => {
                return (
                  <a href={link} target="_blank" key={i}>
                    {React.cloneElement(icon, {
                      color: "#8AC247",
                      size: 40,
                      className:
                        "m-5 bg-white rounded-full p-2 hover:scale-105",
                    })}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="md:hidden w-full h-[100px]">{/* space div  */}</div>
        </div>
      </section>
    </div>
  );
};
export default PageFooter;
