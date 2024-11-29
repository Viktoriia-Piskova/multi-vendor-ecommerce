import React from "react";
import { FaImage} from "react-icons/fa";


const SingleImageUploader = ({image, handleImage}) => {
  return (
    <div>
      <label
        htmlFor="image"
        className="flex flex-col justify-center items-center h-[238px] cursor-pointer border border-dashed hover:border-red-500 w-full border-est-light-grey transition-all"
      >
        <span>
          <FaImage />
        </span>
        <span>Select image</span>
      </label>
      <input className="hidden" type="file" name="image" id="image" />
    </div>
  );
};

export default SingleImageUploader;
