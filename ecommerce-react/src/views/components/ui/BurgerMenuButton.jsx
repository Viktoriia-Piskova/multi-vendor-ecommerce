import React from "react";
import { FaList } from "react-icons/fa";

const BurgerMenuButton = ({ setShow, show, additionalClasses }) => {
  return (
    <div
      className={`w-[35px] h-[35px] flex md:hidden rounded-sm bg-blue-500 shadow-lg hover:shadow-blue-500/50 justify-center cursor-pointer items-center text-white ${additionalClasses}`}
      onClick={() => setShow(!show)}
    >
      <span>
        <FaList />
      </span>
    </div>
  );
};

export default BurgerMenuButton;
