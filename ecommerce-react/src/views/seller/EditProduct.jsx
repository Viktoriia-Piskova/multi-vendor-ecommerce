import React, { useEffect, useState } from "react";
import RedButton from "../components/ui/RedButton";
import { Link } from "react-router-dom";
import { IoMdImages } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import InputWithLabel from "../components/ui/InputWithLabel";

const EditProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    discount: "",
    price: "",
    brand: "",
    stock: "",
    category: "",
  });

  const categories = [
    { id: 1, name: "Sport" },
    {
      id: 2,
      name: "Mobile",
    },
    {
      id: 3,
      name: "T-shirt",
    },
  ];

  const [сategory, setCategory] = useState("");
  const [showCategories, setShowCategories] = useState(false);
  const [allCategories, setAllCategories] = useState(categories);
  const [searchValue, setSearchValue] = useState("");
  const [images, setImages] = useState([]);
  const [imagesUrls, setImagesUrls] = useState([]);

  const handleInput = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleCategorySearch = (e) => {
    const searchTerm = e.target.value;
    setSearchValue(searchTerm);
    if (searchTerm) {
      let searchResults = allCategories.filter(
        (c) => c.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
      );
      setAllCategories(searchResults);
    } else {
      setAllCategories(categories);
    }
  };

  const handleImage = (e) => {
    const files = e.target.files;
    const length = files.length;

    if (length > 0) {
      let newImagesUrls = [];
      for (let i = 0; i < length; i++) {
        newImagesUrls.push({
          url: URL.createObjectURL(files[i]),
          alt: files[i].name.split(".").slice(0, -1).join(".") || "Image",
        });
      }
      setImagesUrls((prev) => [...prev, ...newImagesUrls]);
      setImages((prev) => [...prev, ...files]);
    }
  };

  const changeImage = (img, i) => {
    if (img) {
      let tempImage = [...images];
      let tempUrl = [...imagesUrls];

      tempImage[i] = img;
      tempUrl[i] = {
        url: URL.createObjectURL(img),
        alt: img.name.split(".").slice(0, -1).join(".") || "Image",
      };

      setImagesUrls([...tempUrl]);
      setImages([...tempImage]);
    }
  };

  const removeImage = (i) => {
    const filteredImages = images.filter((_, index) => i !== index);
    const filteredImagesUrls = imagesUrls.filter((_, index) => i !== index);

    setImages(filteredImages);
    setImagesUrls(filteredImagesUrls);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
  };

  useEffect(() => {
    setProductData({
      name: "Product amasing",
      description:
        "Multivendor Ecommerce Applications Project with React.js, Redux, Hooks, Node.js, Express.js and MongoDB",
      discount: 20,
      price: 350,
      brand: "Multivendor",
      stock: "Cherkasy",
    });
    setCategory({ id: 1, name: "Sport" });
    setImagesUrls([{url: "http://localhost:3000/images/categories/2.jpg"}])
  }, []);

  return (
    <div className="est-container">
      <div className="est-container-violet">
        <div className="flex justify-between items-center pb-4">
          <h1 className="text-est-light-grey text-xl font-semibold">
            Edit product
          </h1>
          <Link
            to="/seller/dashboard/all-products"
            className="bg-blue-500 text-white rounded-sm px-7 py-2 my-2 hover:shadow-blue-500/50 hover:shadow-lg"
          >
            Back to all Products
          </Link>
        </div>
        <div>
          <form>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-est-light-grey">
              <InputWithLabel
                type="text"
                name="name"
                id="name"
                placeholder="Product name"
                onChange={(e) => handleInput(e)}
                value={productData.name || ""}
                label="Product name"
                additionalLabelClass="mb-0"
              />
              <InputWithLabel
                type="text"
                name="brand"
                id="brand"
                placeholder="Brand brand"
                onChange={(e) => handleInput(e)}
                value={productData.brand || ""}
                label="Product brand"
                additionalLabelClass="mb-0"
              />
            </div>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-est-light-grey">
              <div className="flex flex-col w-full gap-1 relative">
                <label htmlFor="category">Category</label>
                <input
                  readOnly
                  type="text"
                  name="category"
                  id="category"
                  placeholder="-select category-"
                  onChange={(e) => handleInput(e)}
                  onClick={() => setShowCategories(true)}
                  value={сategory.name || ""}
                  className="px-4 py-2 focus:border-indigo-500 transition-all outline-none rounded-md border border-slate-700 text-est-light-grey bg-est-violet-bright"
                />
                <div
                  className={`absolute top-[101%] bg-slate-800 w-full transition-all ${
                    showCategories ? "scale-100" : "scale-0"
                  }`}
                >
                  <div className="w-full px-4 py-2 fixed">
                    <input
                      value={searchValue || ""}
                      type="text"
                      placeholder="Search"
                      className="px-3 py-1  outline-none bg-transparent bg-slate-500 w-full rounded-md text-est-light-grey overflow-hidden focus:border-indigo-500"
                      onChange={(e) => handleCategorySearch(e)}
                    />
                  </div>
                  <div className="pt-14"></div>
                  <div className="flex justify-start items-start flex-col h-[200px] overflow-scroll">
                    {allCategories.map((cat, index) => (
                      <span
                        className={`px-4 py-2 hover:bg-indigo-500 w-full cursor-pointer ${
                          сategory === cat.name && "bg-indigo-500"
                        }`}
                        key={index}
                        onClick={() => {
                          setShowCategories(false);
                          setCategory(cat.name);
                          setSearchValue("");
                        }}
                      >
                        {cat.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <InputWithLabel
                type="text"
                name="stock"
                id="stock"
                placeholder="Stock name"
                onChange={(e) => handleInput(e)}
                value={productData.stock || ""}
                label="Product stock"
                additionalLabelClass="mb-0"
              />
            </div>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-est-light-grey">
              <InputWithLabel
                type="number"
                name="price"
                id="price"
                placeholder="$"
                onChange={(e) => handleInput(e)}
                value={productData.price || ""}
                label="Price"
                additionalLabelClass="mb-0"
              />
              <InputWithLabel
                type="number"
                name="discount"
                id="discount"
                placeholder="%"
                onChange={(e) => handleInput(e)}
                value={productData.discount || ""}
                label="Discount"
                additionalLabelClass="mb-0"
              />
            </div>
            <InputWithLabel
              type="textarea"
              name="description"
              id="description"
              cols="10"
              rows="4"
              placeholder="Product description"
              onChange={(e) => handleInput(e)}
              value={productData.description || ""}
              label="Description"
              additionalLabelClass="mb-0"
            />
            <div className="w-full mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 text-est-light-grey">
              {imagesUrls.map((img, i) => (
                <div className="h-[180px] relative" key={i}>
                  <label htmlFor={i}>
                    <img
                      className="w-auto h-auto max-h-full cursor-pointer"
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
            <div className="flex pt-5">
              <RedButton handleClick={(e) => handleSubmit(e)}>
                Save changes
              </RedButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
