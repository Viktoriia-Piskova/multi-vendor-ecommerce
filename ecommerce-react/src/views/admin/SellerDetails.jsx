import React from "react";
import RedButton from "../components/ui/RedButton";
import Select from "../components/ui/Select";
import LabeledText from "../components/ui/LabeledText";

const SellerDetails = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
  };

  const sellerStatuses = [
    {
      value: "",
      text: "--select--",
    },
    {
      value: "active",
      text: "Active",
    },
    {
      value: "inactive",
      text: "Inactive",
    },
  ];

  return (
    <div className="est-container">
      <h1 className="text-xl font-bold mb-3">Sellers details</h1>
      <div className="est-container-violet">
        <div className="w-full flex flex-wrap text-est-light-grey justify-between items-center">
          <div className="w-3/12 flex justify-center items-center py-3">
            <div>
              <img
                className="w-full max-h-[230px]"
                src="http://localhost:3000/images/admin.jpg"
                alt="Seller Name"
              />
            </div>
          </div>
          <div className="w-4/12">
            <div className="px-0 md:px-5 py-2">
              <div className="py-2 text-lg">
                <h2>Basic info</h2>
              </div>
              <div className="flex text-slate-950 justify-between text-sm flex-col gap-2 p-4 bg-est-blue-light rounded-md">
                <LabeledText label={"Name"}>Seller Name</LabeledText>
                <LabeledText label={"Email"}>seller@test.com</LabeledText>
                <LabeledText label={"Role"}>Seller</LabeledText>
                <LabeledText label={"Status"}>Active</LabeledText>
                <LabeledText label={"Payment Status"}>Active</LabeledText>
              </div>
            </div>
          </div>
          <div className="w-4/12">
            <div className="px-0 md:px-5 py-2">
              <div className="py-2 text-lg">
                <h2>Address</h2>
              </div>
              <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-est-blue-light text-slate-950 rounded-md">
                <LabeledText label={"Shop Name"}>Amazing Shop</LabeledText>
                <LabeledText label={"Division"}>Volyn</LabeledText>
                <LabeledText label={"District"}>Obolon</LabeledText>
                <LabeledText label={"State"}>Cherkaschyna</LabeledText>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form action="">
            <div className="flex gap-4 py-3">
              <Select options={sellerStatuses} />
              <RedButton handleClick={(e) => handleSubmit(e)}>Submit</RedButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellerDetails;
