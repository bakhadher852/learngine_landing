const NumberSectionList = [
  { number: " 20" },
  { number: " 20,000" },
  { number: "50,000" },
];
const SocialMediaLinksList = [
  { link: "https://www.facebook.com/", icon: "FaFacebookF" },
  { link: "https://www.linkedin.com/", icon: "AiFillLinkedin" },
  { link: "https://twitter.com/", icon: "FaTwitter" },
  { link: "https://www.instagram.com/", icon: "FaInstagram" },
];

{
  TestimonialSectinList.map(({ body, name, position }, i) => {
    return (
      <div>
        <div className="  mx-5 p-4   border-2 border-zinc-300 rounded-lg  ">
          <p className="text-justify md:text-base lg:text-xl">{body}</p>
          <h2 className="text-bold text-lg mt-5">{name}</h2>
          <p>{position}</p>
        </div>
      </div>
    );
  });

  {
    SocialMediaLinksList.map(({ link, icon }, i) => (
      <a href={link} target="_blank" key={i}>
        {React.createElement(icon, {
          color: "#8AC247",
          size: 40,
          className: "m-5 bg-white rounded-full p-2 hover:scale-105",
        })}
      </a>
    ));
  }
}

{
  /* screem indecator */
}
{
  /* <div className="w-full h-[20vh]">
        <h1 className="xxs:block  xs:hidden sm:hidden md:hidden lg:hidden xl:hidden">
          XX-small
        </h1>
        <h1 className="xxs:hidden xs:block  sm:hidden md:hidden lg:hidden xl:hidden">
          X-small
        </h1>
        <h1 className="xxs:hidden xs:hidden sm:block  md:hidden lg:hidden xl:hidden">
          small
        </h1>
        <h1 className="xxs:hidden xs:hidden sm:hidden md:block  lg:hidden xl:hidden">
          miduem
        </h1>
        <h1 className="xxs:hidden xs:hidden sm:hidden md:hidden lg:block  xl:hidden">
          Larg
        </h1>
        <h1 className="xxs:hidden xs:hidden sm:hidden md:hidden lg:hidden xl:block">
          {" "}
          X Larg
        </h1>
      </div> */
}
{
  /* -----------start------------- */
}
{
  /* -----------end------------- */
}
{
  /* Pricing & plan section */
}

// rafce
// short cut for return function