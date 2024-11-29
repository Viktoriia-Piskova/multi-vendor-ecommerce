import React from "react";
import { IoMdImages } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";

const ImagesUploader = ({imagesUrls, changeImage, removeImage, handleImage}) => {
  return (
    <div className="w-full mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 text-est-light-grey">
      {imagesUrls.map((img, i) => (
        <div className="h-[180px] relative" key={i}>
          <label htmlFor={i}>
            <img
              className="w-full h-auto max-h-full object-cover cursor-pointer"
              src={img.url}
              alt={img.alt}
            />
          </label>
          <input
            onChange={(e) => changeImage(e.target.files[0], i)}
            type="file"
            accept="image/*"
            id={i}
            className="hidden"
          />
          <span
            onClick={() => removeImage(i)}
            className="z-2 cursor-pointer bg-slate-700 hover:shadow-lg hover:shadow-slate-400/50 text-est-light-grey absolute top-1 right-1 rounded-full"
          >
            <IoMdCloseCircle className="text-2xl" />
          </span>
        </div>
      ))}
      <label
        htmlFor="image"
        className="flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed hover:border-red-500 "
      >
        <span>
          <IoMdImages />
        </span>
        <span>Select image</span>
        <input
          multiple
          type="file"
          accept="image/*"
          name="image"
          id="image"
          className="hidden"
          onChange={(e) => handleImage(e)}
        />
      </label>
    </div>
  );
};

export default ImagesUploader;
