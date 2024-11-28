import React, { forwardRef } from "react";
import { FixedSizeList } from "react-window";

function handleOnWheel({ deltaY }) {
  console.log("handleOnWheel", deltaY);
}

const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props}></div>
));

const PaymentRequests = () => {
  const dummyPayments = [1, 2, 3, 4, 5, 6, 7, 8];
  const Row = ({ index, style }) => {
    return (
      <div style={style} className="flex text-sm text-white font-medium">
        <div className="w-[25%] p-2 whitespace-nowrap">{index + 1}</div>
        <div className="w-[25%] p-2 whitespace-nowrap">$1231</div>
        <div className="w-[25%] p-2 whitespace-nowrap">
          <span className="py-[1px] px-[5px] bg-slate-300 text-blue-500 rounded-md text-sm">
            Pending
          </span>
        </div>
        <div className="w-[25%] p-2 whitespace-nowrap">25 Oct 2024</div>
        <div className="w-[25%] p-2 whitespace-nowrap">
          <button className="bg-indigo-500 rounded-sm shadow-lg hover:bg-indigo-500/50 px-3 py-[2px] text-white text-sm">
            Confirm
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="est-container">
      <div className="est-container-violet">
        <h2 className="text-est-light-grey text-xl font-medium pb-5">
          Withdrawal Request
        </h2>
        <div className="w-full">
          <div className="w-full overflow-x-auto">
            <div className="flex bg-est-blue-light uppercase text-xs min-w-[340px] font-bold rounded-md">
              <div className="w-[25%] p-2">No</div>
              <div className="w-[25%] p-2">Amount</div>
              <div className="w-[25%] p-2">Status</div>
              <div className="w-[25%] p-2">Date</div>
              <div className="w-[25%] p-2">Action</div>
            </div>
            {
              <FixedSizeList
                style={{ minWidth: "340px" }}
                className="list"
                height={350}
                itemCount={100}
                itemSize={35}
                outerElementType={outerElementType}
              >
                {Row}
              </FixedSizeList>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentRequests;
