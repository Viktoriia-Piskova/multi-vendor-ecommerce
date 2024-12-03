import React from "react";

const ProductPreviewCard = ({ product }) => {
  return (
    <div className="mt-4 flex flex-col gap-4 bg-est-blue-light rounded-md p-2">
      <div className="text-est-light-grey">
        <div className="flex gap-3 text-md">
          <img
            className="h-[45px] w-[45px]"
            src={`${product.image?.url || 'http://localhost:3000/images/categories/1.jpg'}`}
            alt={`${product.image?.alt || 'Product picture'}`}
          />
          <div>
            <h2 className="text-md font-semibold">
              {product.name || "Product name"}
            </h2>
            <p>
              <span>Brand: </span>
              <span>{product.brand || "Product Brand"}</span>
            </p>
            <p>
              <span>Quantity: </span>
              <span>{product.quantity || "0"}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreviewCard;
