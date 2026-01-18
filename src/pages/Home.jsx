import React from "react";

const Home = () => {
    return (
        <section id="home" className="mx-6 sm:mx-[5%] md:mx-[10%]">
            <p className="p-4 md:p-8 rounded-md my-10 bg-linear-to-b from-pink-500/15 to-blue-500/15 lg:text-lg">
                This website serves as my personal portfolio, showcasing my
                background, experience, and the projects I have developed
                throughout my journey as a developer. It also features a blog
                section where I occasionally share articles, mainly focused on
                technology and other topics of personal interest. The site is
                built using React with Vite and Tailwind CSS. To enhance the
                user experience, it incorporates modern animations and
                interactive visuals using GSAP, with potential integration of
                Three.js. Dynamic content, such as blog posts, is managed
                through Sanity CMS. The project is targeted for completion by
                the second week of February. Thank you for visiting.
            </p>
            {/* CTA Buttons */}
            <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap16Z justify-center items-center mb-10 md:mb-8">
                <a
                    href="https://digitlab.cc"
                    className="w-[47%] sm:max-w-48 md:max-w-52 lg:max-w-64 xl:max-w-72 text-center text-nowrap font-heading active:opacity-60 py-2 sm:py-3 lg:py-4 cursor-pointer border-2 border-white/0 bg-linear-to-b from-blue-500 to-blue-700 text-white font-semibold rounded-md shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                >
                    Company Website
                </a>
                <a
                    href="https://t.me/lakyarlinn"
                    className="w-[47%] sm:max-w-48 md:max-w-52 lg:max-w-64 xl:max-w-72 text-center text-nowrap font-heading active:opacity-60 py-2 sm:py-3 lg:py-4 cursor-pointer border-2 border-white/0 bg-linear-to-b from-blue-500 to-blue-700 text-white font-semibold rounded-md shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                >
                    Telegram DM
                </a>
            </div>
        </section>
    );
};

export default Home;
