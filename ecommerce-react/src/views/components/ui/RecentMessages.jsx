import React from "react";
import { Link } from "react-router-dom";

const RecentMessages = ({text, time, author}) => {
  return (
    <li className="mb-3 ml-6">
      <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10">
        {author ? <img
          className="w-full rounded-full h-full shadow-lg"
          src={`${author.image.url}`}
          alt={`${author.image.alt}`}
        /> : <img
          className="w-full rounded-full h-full shadow-lg"
          src="http://localhost:3000/images/admin.jpg"
          alt="Seller Avatar"
        />}
      </div>
      <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
        <div className="flex justify-between items-center mb-2">
          <Link className="text-md font-normal">{author ? `${author.name}` : 'Author'}</Link>
          <p className="text-sm font-normal sm:order-last sm:mb-0">
            {time}
          </p>
        </div>
        <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800">
          <p>{text}</p>
        </div>
      </div>
    </li>
  );
};

export default RecentMessages;
