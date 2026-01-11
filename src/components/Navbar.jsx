import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    return (
        <>
            <div className="bg-gray-500/50 w-full h-16 flex justify-between items-center px-[10%]">
                <Link to={"/"}>LAKYAR</Link>
                <ThemeToggle />
            </div>
        </>
    );
};

export default Navbar;
