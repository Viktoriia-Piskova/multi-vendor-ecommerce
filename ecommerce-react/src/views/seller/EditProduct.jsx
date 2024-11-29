import React, { useEffect, useState } from "react";
import RedButton from "../components/ui/RedButton";
import { Link } from "react-router-dom";
import InputWithLabel from "../components/ui/InputWithLabel";
import ImagesUploader from "../components/ImagesUploader";
import SelectWithSearch from "../components/SelectWithSearch";

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

  const [category, setCategory] = useState("");
  const [allCategories, setAllCategories] = useState(categories);
  const [images, setImages] = useState([]);
  const [imagesUrls, setImagesUrls] = useState([]);

  const handleInput = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
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
    setImagesUrls([{ url: "http://localhost:3000/images/categories/2.jpg" }]);
  }, []);

  useEffect(() => {
    if (category.name) {
      const fakeEvent = { target: { name: "category", value: category.name } };
      handleInput(fakeEvent);
    }
  }, [category]);

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
              <SelectWithSearch
                handleInput={handleInput}
                category={category}
                allCategories={allCategories}
                setCategory={setCategory}
                setAllCategories={setAllCategories}
                categories={categories}
              />
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
            <ImagesUploader
              imagesUrls={imagesUrls}
              handleImage={handleImage}
              removeImage={removeImage}
              changeImage={changeImage}
            />
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
