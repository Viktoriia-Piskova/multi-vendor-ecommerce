import React from "react";
import Select from "../components/ui/Select";
import LabeledText from "../components/ui/LabeledText";
import ProductPreviewCard from "../components/ProductPreviewCard";
import SellerPreviewCard from "../components/SellerPreviewCard";

const OrderDetails = () => {
  const orderStatuses = [
    {
      value: "pending",
      text: "Pending",
    },
    {
      value: "processing",
      text: "Processing",
    },
    {
      value: "warehouse",
      text: "Warehouse",
    },
    {
      value: "placed",
      text: "Placed",
    },
    {
      value: "cancelled",
      text: "Cancelled",
    },
  ];

  const dummyProduct = {
    name: "Dummy Product",
    brand: "Dummy brand",
  };

  return (
    <div className="est-container">
      <div className="est-container-violet">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl text-est-light-grey">Order Details</h2>
          <Select
            options={orderStatuses}
            additionalClasses={"bg-est-gray-meduim"}
          />
        </div>
        <div className="p-4">
          <div className="flex gap-2 text-lg text-est-light-grey">
            <p>#3434</p>
            <span>03 Jan 2025</span>
          </div>
          <div className="flex flex-wrap">
            <div className="pr-3 text-est-light-grey text-lg">
              <div className="flex flex-col gap-1">
                <LabeledText label={"Deliver to"}>Client Name</LabeledText>
                <LabeledText label={"Address"}>
                  Rudolf-Mann-Platz 45a, Storlland, SH 52988
                </LabeledText>
                <LabeledText label={"Payment status"}>Paid</LabeledText>
                <LabeledText label={"Price"}>$3434</LabeledText>
              </div>
              <ProductPreviewCard product={dummyProduct} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
