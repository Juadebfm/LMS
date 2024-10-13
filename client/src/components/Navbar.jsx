import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { IoChevronDownSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import Logo from "/GraduationCap.png";
import { CiSearch } from "react-icons/ci";
import Button from "./Button";

const Navbar = () => {
  const location = useLocation();
  const { currency, language, updateCurrency, updateLanguage } =
    useAppContext();

  const { t } = useTranslation();

  const navItems = [
    { to: "/", text: t("home") },
    { to: "/courses", text: t("courses") },
    { to: "/about", text: t("about") },
    { to: "/contact", text: t("contact") },
    { to: "/instructor", text: t("becomeInstructor") },
  ];

  return (
    <nav>
      {/* Top Nav */}
      <section className="bg-primary px-14 h-[52px] flex items-center justify-between">
        <ul className="flex items-center space-x-8 h-full">
          {navItems.map((item) => (
            <li
              key={item.to}
              className={`
                text-[#8C94A3] 
                hover:text-white 
                transition-colors 
                duration-200
                text-small_text
                h-full
                ${
                  location.pathname === item.to
                    ? "border-t-2 border-orange-500 text-white"
                    : ""
                }
              `}
            >
              <Link
                to={item.to}
                className="h-full flex items-center justify-center"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <select
              value={currency}
              onChange={(e) => updateCurrency(e.target.value)}
              className="appearance-none bg-transparent text-white text-small_text px-2 py-1 pr-8 border border-gray-600 rounded"
            >
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
              <option value="EUR">EUR</option>
            </select>
            <IoChevronDownSharp className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white" />
          </div>
          <div className="relative">
            <select
              value={language}
              onChange={(e) => updateLanguage(e.target.value)}
              className="appearance-none bg-transparent text-white text-small_text px-2 py-1 pr-8 border border-gray-600 rounded"
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="es">ES</option>
            </select>
            <IoChevronDownSharp className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white" />
          </div>
        </div>
      </section>

      {/* Bottom Nav */}
      <section className="h-[96px] px-14 border-b border-[#E9EAF0] flex items-center justify-between">
        {/* Right */}
        <div className="h-full flex">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-[10px]">
              <img src={Logo} alt="Learn App" className="w-[40px] h-[40px]" />
              <span className="text-[32px] font-semibold capitalize">
                Learn
              </span>
            </div>
            <div className="flex items-center gap-8">
              <div className="relative w-[200px] h-[52px] border border-[#E9EAF0] flex text-[#4E5566]">
                <select className="appearance-none bg-transparent px-2 py-2 pr-8  rounded">
                  <option value="Browse Category">Browse</option>
                </select>
                <IoChevronDownSharp className="absolute right-2 top-1/2 transform -translate-y-1/2" />
              </div>

              <div className="h-[52px] border border-[#E9EAF0] flex items-center justify-center">
                <CiSearch size={25} className="ml-8" />

                <input
                  type="search"
                  placeholder="What do you want learn..."
                  className="px-2 py-2 pl-8 w-[424px] "
                />
              </div>
            </div>
          </div>
        </div>
        {/* Left */}
        <div className="flex items-center justify-center gap-6">
          <Button
            btnText="Create Account"
            btnClass="w-auto bg-primary_orange/30 text-primary_orange font-bold"
          />
          <Button btnText="Sign In" btnClass="w-auto" />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
