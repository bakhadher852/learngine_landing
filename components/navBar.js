import React from "react";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import Button from "commonComponents/Button";
import ProductName from "commonComponents/ProductName";
import Logo from "commonComponents/Logo";
import ImgIcon from "commonComponents/ImgIcon";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const NavBar = () => {
  const { locale, locales, push, pathname } = useRouter();
  const { t, i18n } = useTranslation();
  const [isClassRemoved, setClassRemoved] = useState(true);
  const languageChange = () => {
    const newLocale = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLocale);
  };
  const handleClick = () => {
    setClassRemoved(!isClassRemoved);
    let mobileList = document.getElementById("mobileList");
    isClassRemoved
      ? mobileList.classList.remove("xxs:right-[-500px]")
      : mobileList.classList.add("xxs:right-[-500px]");
  };
  const otherLocale = locales.find((loc) => loc !== locale);
  const NavList = [
    {
      Link: "#home",
      Title: t("home"),
    },
    {
      Link: "#about",
      Title: t("About"),
    },
    {
      Link: "#features",
      Title: t("features"),
    },
    {
      Link: "#usage",
      Title: t("Usage"),
    },
    {
      Link: "#testimonials",
      Title: t("testimonials"),
    },
    {
      Link: "#pricing",
      Title: t("pricing"),
    },
  ];
  return (
    <div>
      <div className=" w-full h-28 flex justify-between  z-10  absolute ">
        {/* left side div has the logo img  */}
        <section className="   xxs:w-[30%] md:w-[20%] pt-2 ">
          <Logo />
        </section>

        <section
          id="mobileList"
          className="relative  z-[70]  md:flex xxs:w-[200px] xxs:h-[285px] md:h-0 md:w-[80%] xxs:top-[80px] md:top-0    bg-primary  xxs:fixed  xxs:shadow-2xl duration-1000 md:duration-75 xxs:pl-5 md:pl-0  md:right-0   xxs:right-0 xxs:right-[-500px]"
        >
          <ul className="   md:flex md:my-auto mx-auto  justify-around w-full items-center xxs:pl-5 md:pl-0  md:right-0  absolute bg-primary rounded-bl-custom h-28 z-80 xxs:right-0 md:shadow-xl">
            {NavList.map(({ Link, Title }, i) => {
              const isLastitem = i === NavList.length - 1;
              return (
                <a href={Link} key={i}>
                  <li
                    className={` uppercase   rounded hover:text-black p-2 hover:shadow transition-all duration-1000 xxs:w-[85px] md:w-auto ${
                      isLastitem
                        ? "bg-white text-primary md:px-5 xss:px-2"
                        : "bg-none text-white"
                    } `}
                  >
                    {Title}
                  </li>
                </a>
              );
            })}
            <a href="">
              <li
                className="text-white uppercase   rounded hover:text-black p-2 hover:shadow transition-all duration-1000"
                onClick={languageChange}
              >
                {otherLocale === "ar" ? "ع" : "En"}
              </li>
            </a>
          </ul>
          {/* <ul className="  md:flex md:my-auto mx-auto  justify-around w-full items-center xxs:pl-5 md:pl-0  md:right-0  absolute bg-primary rounded-bl-custom h-28 z-80 xxs:right-0 md:shadow-xl">
            <a href="#home">
              <li className="text-white uppercase   rounded  hover:text-black p-2 hover:shadow  transition-all duration-1000">
                {t("home")}
              </li>
            </a>
            <a href="#about">
              <li className="text-white uppercase   rounded hover:text-black p-2 hover:shadow transition-all duration-1000">
                {t(" about")}
              </li>
            </a>
            <a href="#features">
              <li className="text-white uppercase   rounded hover:text-black p-2 hover:shadow transition-all duration-1000">
                {t("features")}
              </li>
            </a>
            <a href="/">
              <li className="text-white uppercase   rounded hover:text-black p-2 hover:shadow transition-all duration-1000">
                {t(" usage")}
              </li>
            </a>
            <a href="#testimonials">
              <li className="text-white uppercase   rounded hover:text-black p-2 hover:shadow transition-all duration-1000">
                {t("testimonials")}
              </li>
            </a>
            <a href="#pricing">
              <button className="uppercase md:mr-5  h text-[#93c47d] bg-white p-2 px-5 rounded-xl hover:text-black hover:shadow transition-all duration-1000">
                {t("pricing")}
              </button>
            </a>
            <a href="">
              <li
                className="text-white uppercase   rounded hover:text-black p-2 hover:shadow transition-all duration-1000"
                onClick={() =>
                  push(pathname, undefined, {
                    locale: otherLocale,
                  })
                }
              >
                {otherLocale === "ar" ? "ع" : "En"}
              </li>
            </a>
          </ul> */}
        </section>
        <div
          className=" md:hidden my-auto hover:cursor-pointer  relative right-2  bg-primary p-2 xxs:fixed top-[20px] "
          name="menu"
          onClick={handleClick}
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>
      {/* NavBar background div big one */}
      <div className=" xxs:h-[750px] md:h-[500px] lg:h-[550px] w-[96%] bg-secondry rounded-bl-custom absolute right-0"></div>

      {/* after the Navbar */}
      <div className="h-[25vh] w-full " /*this div to take palce only*/> </div>
      <section className="xxs:flex-row md:flex  w-[95%] bg-transparent absolute right-0 ">
        <div className="flex md:w-[50%] xxs:w-[100%] xxs:order-1">
          {/* <img
            className="h-[20rem] lg:h-[23rem] mx-auto my-auto  "
            src="/book.png"
            alt=""
          /> */}
          <ImgIcon
            className="h-[20rem] lg:h-[23rem] mx-auto my-auto  "
            src="/book.png"
          />
        </div>
        <div className="md:w-[50%]  text-center xxs:w-[97%]">
          <h1 className="text-4xl   font-bold p-6 py-7 capitalize">
            <ProductName />
          </h1>
          <h2 className="lg:text-4xl md:text-2xl lg:p-6 md:p-3 capitalize">
            {t("best education-content management system")}
          </h2>
          <div className="xxs:flex-row md:flex md:mt-4 lg:mt-0 md:mr-3 lg:m-6 md:m-6 lg:min-w-[480px] justify-around ">
            <Button
              onClick={null}
              className="xxs:mt-5 md:mt-0  xxs:p-2 xxs:px-4  md:px-2   text-primary   rounded-lg  lg:text-2xl md:text-base hover:shadow-2xl uppercase border-primary border-2 transition-all duration-1000"
            >
              <span>
                <BsFillPlayFill
                  // size={35}
                  className="inline-block  md:h-[35px] md:mb-1 w-auto xxs:h-[27px]  "
                />
              </span>
              {t("watch video")}
            </Button>
            <div className="xxs:block h-1 w-[100%] md:hidden"></div>

            <Button className="xxs:mt-5 md:mt-0  text-white bg-primary p-2  rounded-lg  lg:text-2xl md:text-base hover:shadow-2xl uppercase transition-all duration-1000">
              <p className=" px-2">{t("explore demo")}</p>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NavBar;
