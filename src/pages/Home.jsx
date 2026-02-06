import React from "react";
import Hero from "../sections/Hero";

const Home = () => {
  return (
    <section id="home" className="mx-6 sm:mx-[5%] md:mx-[10%]">
      <Hero />
      <p className="my-10 rounded-md bg-linear-to-b from-pink-500/15 to-blue-500/15 p-4 md:p-8 lg:text-lg">
        This website serves as my personal portfolio, showcasing my background,
        experience, and the projects I have developed throughout my journey as a
        developer. It also features a blog section where I occasionally share
        articles, mainly focused on technology and other topics of personal
        interest. The site is built using React with Vite and Tailwind CSS. To
        enhance the user experience, it incorporates modern animations and
        interactive visuals using GSAP, with potential integration of Three.js.
        Dynamic content, such as blog posts, is managed through Sanity CMS. The
        project is targeted for completion by the second week of February. Thank
        you for visiting.
      </p>
      {/* CTA Buttons */}
      <div className="xl:gap16Z mb-10 flex items-center justify-center gap-4 sm:gap-6 md:mb-8 md:gap-8 lg:gap-12">
        <a
          href="https://digitlab.cc"
          className="font-heading w-[47%] transform cursor-pointer rounded-md border-2 border-white/0 bg-linear-to-b from-blue-500 to-blue-700 py-2 text-center font-semibold text-nowrap text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl active:opacity-60 sm:max-w-48 sm:py-3 md:max-w-52 lg:max-w-64 lg:py-4 xl:max-w-72"
        >
          Company Website
        </a>
        <a
          href="https://t.me/lakyarlinn"
          className="font-heading w-[47%] transform cursor-pointer rounded-md border-2 border-white/0 bg-linear-to-b from-blue-500 to-blue-700 py-2 text-center font-semibold text-nowrap text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl active:opacity-60 sm:max-w-48 sm:py-3 md:max-w-52 lg:max-w-64 lg:py-4 xl:max-w-72"
        >
          Telegram DM
        </a>
        <p className="m-5 mt-5 p-5 pt-4">hello</p>
      </div>
    </section>
  );
};

export default Home;
