import React, { forwardRef } from "react";
import RedButton from "../components/ui/RedButton";
import { MdCurrencyExchange } from "react-icons/md";
import { FixedSizeList } from "react-window";
import StatsCard from "../components/ui/StatsCard";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
  };

  return (
    <div className="px-2 md:px-7 py-5">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        <StatsCard
          backgroundColor={"#e9feea"}
          iconColor={"#038000"}
          title="$7836"
          text="Total sales"
        >
          <MdCurrencyExchange className="text-[#fae8e8] shadow-lg" />
        </StatsCard>
        <StatsCard
          backgroundColor={"#fae8e8"}
          iconColor={"#fa0305"}
          title="$850"
          text="Available amount"
        >
          <MdCurrencyExchange className="text-[#fae8e8] shadow-lg" />
        </StatsCard>
        <StatsCard
          backgroundColor={"#fde2ff"}
          iconColor={"#760077"}
          title="$150"
          text="Withdrawal amount"
        >
          <MdCurrencyExchange className="text-[#fae8e8] shadow-lg" />
        </StatsCard>
        <StatsCard
          backgroundColor={"#ecebff"}
          iconColor={"#0200f8"}
          title="$15"
          text="Pending Amount"
        >
          <MdCurrencyExchange className="text-[#ecebff] shadow-lg" />
        </StatsCard>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 pt-4">
        <div className="est-container-violet text-est-light-grey">
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
                <RedButton handleClick={(e) => handleSubmit(e)}>
                  Submit
                </RedButton>
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
        <div className="est-container-violet text-est-light-grey">
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
