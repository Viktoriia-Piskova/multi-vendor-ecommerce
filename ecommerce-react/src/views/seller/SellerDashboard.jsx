import React from "react";
import { Link } from "react-router-dom";
import Chart from "react-apexcharts";
import { MdCurrencyExchange, MdProductionQuantityLimits } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";

const SellerDashboard = () => {
  const dummyOrdersData = [1, 2, 3, 4, 5];
  const statsState = {
    series: [
      {
        name: "Orders",
        data: [23, 34, 45, 56, 76, 34, 23, 76, 78, 46, 55, 30],
      },
      {
        name: "Revenue",
        data: [63, 104, 95, 120, 76, 34, 23, 76, 78, 103, 98, 100],
      },
      {
        name: "Sales",
        data: [13, 14, 15, 12, 77, 24, 23, 16, 18, 56, 118, 48],
      },
    ],
    options: {
      color: ["#181ee8", "#181ee8"],
      plotOptions: {
        radius: 30,
      },
      chart: {
        background: "transparent",
        foreColor: "#d0d2d6",
      },
      dataLabels: {
        enabled: false,
      },
      strock: {
        show: true,
        curve: ["smooth", "straight", "stepline"],
        lineCap: "butt",
        colors: "#f0f0f0",
        width: 0.5,
        dashArray: 0,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        position: "top",
      },
      responsive: [
        {
          breakpoint: 565,
          yaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
          },
          options: {
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
            chart: {
              height: "550px",
            },
          },
        },
      ],
    },
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
            <h2 className="text-3xl font-bold">50</h2>
            <p className="text-md 1font-medium">Products</p>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-[#760077] flex justify-center items-center text-xl">
            <MdProductionQuantityLimits className="text-[#fae8e8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#e9feea] rounded-md gap-3">
          <div className="flex flex-col items-start justify-start text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">32</h2>
            <p className="text-md 1font-medium">Orders</p>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-[#038000] flex justify-center items-center text-xl">
            <FaCartShopping className="text-[#fae8e8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#ecebff] rounded-md gap-3">
          <div className="flex flex-col items-start justify-start text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">5</h2>
            <p className="text-md 1font-medium">Pending Orders</p>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-[#0200f8] flex justify-center items-center text-xl">
            <FaCartShopping className="text-[#fae8e8] shadow-lg" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-wrap mt-7">
        <div className="w-full lg:w-7/12 lg:pr-3">
          <div className="w-full bg-est-violet-bright p-4 rounded-md">
            <Chart
              options={statsState.options}
              series={statsState.series}
              type="bar"
              height={350}
            />
          </div>
        </div>

        <div className="w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0">
          <div className="w-full bg-est-violet-bright p-4 rounded-md text-est-light-grey">
            <div className="flex justify-between items-baseline">
              <h2 className="font-semibold text-lg text-est-light-grey pb-3">
                Resent customer messages
              </h2>
              <Link className="font-semibold text-sm text-est-light-grey hover:text-[#7f9cd7]">
                View all
              </Link>
            </div>
            <div className="flex flex-col gap-2 pt-6 text-est-light-grey">
              <ol className="relative border-1 border-slate-600 ml-4">
                <li className="mb-3 ml-6">
                  <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10">
                    <img
                      className="w-full rounded-full h-full shadow-lg"
                      src="http://localhost:3000/images/admin.jpg"
                      alt="Seller Avatar"
                    />
                  </div>
                  <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link className="text-md font-normal">Customer</Link>
                      <p className="text-sm font-normal sm:order-last sm:mb-0">
                        2 days ago
                      </p>
                    </div>
                    <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800">
                      <p>First message text</p>
                    </div>
                  </div>
                </li>
                <li className="mb-3 ml-6">
                  <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10">
                    <img
                      className="w-full rounded-full h-full shadow-lg"
                      src="http://localhost:3000/images/admin.jpg"
                      alt="Seller Avatar"
                    />
                  </div>
                  <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link className="text-md font-normal">Customer</Link>
                      <p className="text-sm font-normal sm:order-last sm:mb-0">
                        10 days ago
                      </p>
                    </div>
                    <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800">
                      <p>Second message text</p>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-4 bg-est-violet-bright rounded-md mt-6">
        <div className="flex justify-between items-baseline">
          <h2 className="font-semibold text-lg text-est-light-grey pb-3">
            Resent orders
          </h2>
          <Link className="font-semibold text-sm text-est-light-grey hover:text-slate-800 transition-all">
            View all
          </Link>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-left">
            <thead className="text-sm text-est-light-grey uppercase border-b border-slate-700">
              <tr>
                <th scope="col" className="py-3 pl-4">
                  Order ID
                </th>
                <th scope="col" className="py-3 pl-4">
                  Price
                </th>
                <th scope="col" className="py-3 pl-4">
                  Payment Status
                </th>
                <th scope="col" className="py-3 pl-4">
                  Order Status
                </th>
                <th scope="col" className="py-3 pl-4">
                  Active
                </th>
              </tr>
            </thead>
            <tbody>
              {dummyOrdersData.map((data, index) => (
                <tr key={index} className="text-est-light-grey">
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    #323232
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    $456
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    Pending
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    Pending
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap hover:">
                    <Link className="transition-all hover:text-slate-800">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
