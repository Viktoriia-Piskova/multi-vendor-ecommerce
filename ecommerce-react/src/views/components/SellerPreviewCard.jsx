import React from "react";

const SellerPreviewCard = ({ seller, order, product }) => {
  return (
    <div className="my-4 flex flex-col bg-est-violet-additional rounded-md p-4">
      <div className="text-est-light-grey my-4">
        <div className="flex justify-start items-center text-lg gap-3 mb-2">
          <h2>
            <span>{seller?.name || "Seller name"}</span> order number: <span>{order?.Id || 0}</span>
          </h2>
        </div>
        <div className="flex gap-3 text-md">
          <img
            className="h-[45px] w-[45px]"
            src={`${
              product.image?.url ||
              "http://localhost:3000/images/categories/1.jpg"
            }`}
            alt={`${product.image?.alt || "Product picture"}`}
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

export default SellerPreviewCard;
