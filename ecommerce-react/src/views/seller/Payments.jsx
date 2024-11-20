import React, { forwardRef } from "react";
import { MdCurrencyExchange } from "react-icons/md";
import { FixedSizeList } from "react-window";

const Payments = () => {
  const outerElementType = forwardRef((props, ref) => (
    <div ref={ref} onWheel={handleOnWheel} {...props}></div>
  ));

  function handleOnWheel({ deltaY }) {
    console.log("handleOnWheel", deltaY);
  }
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
      </div>
    );
  };

  return (
    <div className="px-2 md:px-7 py-5">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        <div className="flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-3">
          <div className="flex flex-col items-start justify-start text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">$1232</h2>
            <p className="text-md 1font-medium">Total sales</p>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-[#fa0305] flex justify-center items-center text-xl">
            <MdCurrencyExchange className="text-[#fae8e8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#fde2ff] rounded-md gap-3">
          <div className="flex flex-col items-start justify-start text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">$150</h2>
            <p className="text-md 1font-medium">Available amount</p>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-[#760077] flex justify-center items-center text-xl">
            <MdCurrencyExchange className="text-[#fae8e8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#e9feea] rounded-md gap-3">
          <div className="flex flex-col items-start justify-start text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">$32</h2>
            <p className="text-md 1font-medium">Withdrawal amount</p>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-[#038000] flex justify-center items-center text-xl">
            <MdCurrencyExchange className="text-[#fae8e8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#ecebff] rounded-md gap-3">
          <div className="flex flex-col items-start justify-start text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">$5</h2>
            <p className="text-md 1font-medium">Pending Amount</p>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-[#0200f8] flex justify-center items-center text-xl">
            <MdCurrencyExchange className="text-[#fae8e8] shadow-lg" />
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 pt-4">
        <div className="bg-est-violet-bright rounded-md text-est-light-grey p-5">
          <h2 className="text-lg">Send request</h2>
          <div className="pt-5">
            <form>
              <div className="flex flex-wrap gap-3">
                <input
                  type="number"
                  name="amount"
                  min="0"
                  className="px-3 py-2 focus:border-indigo-200 transition-all outline-none rounded-md border border-slate-700 text-est-light-grey bg-est-violet-bright md:w-[79%]"
                />
                <button className="bg-red-500 shadow-lg hover:shadow-red-500/50 px-4 py-2 cursor-pointer text-white rounded-sm">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div>
            <h3 className="text-lg py-4">Pending requests</h3>
            <div className="w-full overflow-x-auto">
              <div className="flex bg-est-blue-light uppercase text-xs min-w-[340px] font-bold rounded-md">
                <div className="w-[25%] p-2">No</div>
                <div className="w-[25%] p-2">Amount</div>
                <div className="w-[25%] p-2">Status</div>
                <div className="w-[25%] p-2">Date</div>
              </div>
              {
                <FixedSizeList
                  style={{ minWidth: "340px" }}
                  className="list"
                  height={350}
                  itemCount={30}
                  itemSize={35}
                  outerElementType={outerElementType}
                >
                  {Row}
                </FixedSizeList>
              }
            </div>
          </div>
        </div>
        <div className="bg-est-violet-bright rounded-md text-est-light-grey p-5">
          <div>
            <h3 className="text-lg pb-4">Success Withdrawals</h3>
            <div className="w-full overflow-x-auto">
              <div className="flex bg-est-blue-light uppercase text-xs min-w-[340px] font-bold rounded-md">
                <div className="w-[25%] p-2">No</div>
                <div className="w-[25%] p-2">Amount</div>
                <div className="w-[25%] p-2">Status</div>
                <div className="w-[25%] p-2">Date</div>
              </div>
              {
                <FixedSizeList
                  style={{ minWidth: "340px" }}
                  className="list"
                  height={350}
                  itemCount={30}
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
    </div>
  );
};

export default Payments;
