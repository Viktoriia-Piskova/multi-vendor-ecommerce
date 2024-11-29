import React from "react";
import { Link } from "react-router-dom";
import Chart from "react-apexcharts";
import { MdCurrencyExchange, MdProductionQuantityLimits } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import RecentMessages from "../components/ui/RecentMessages";
import StatsCard from "../components/ui/StatsCard";

const AdminDashboard = () => {
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
        name: "Sellers",
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
        <StatsCard
          backgroundColor={"#fae8e8"}
          iconColor={"#fa0305"}
          title="$850"
          text="Total sales"
        >
          <MdCurrencyExchange className="text-[#fae8e8] shadow-lg" />
        </StatsCard>
        <StatsCard
          backgroundColor={"#fde2ff"}
          iconColor={"#760077"}
          title="50"
          text="Products"
        >
          <MdProductionQuantityLimits className="text-[#fae8e8] shadow-lg" />
        </StatsCard>
        <StatsCard
          backgroundColor={"#e9feea"}
          iconColor={"#038000"}
          title="32"
          text="Sellers"
        >
          <FaUsers className="text-[#fae8e8] shadow-lg" />
        </StatsCard>
        <StatsCard
          backgroundColor={"#ecebff"}
          iconColor={"#0200f8"}
          title="580"
          text="Orders"
        >
          <FaCartShopping className="text-[#ecebff] shadow-lg" />
        </StatsCard>
      </div>

      <div className="w-full flex flex-wrap mt-7">
        <div className="w-full lg:w-7/12 lg:pr-3">
          <div className="est-container-violet">
            <Chart
              options={statsState.options}
              series={statsState.series}
              type="bar"
              height={350}
            />
          </div>
        </div>

        <div className="w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0">
          <div className="est-container-violet text-est-light-grey">
            <div className="flex justify-between items-baseline">
              <h2 className="font-semibold text-lg text-est-light-grey pb-3">
                Resent seller message
              </h2>
              <Link className="font-semibold text-sm text-est-light-grey hover:text-[#7f9cd7]">
                View all
              </Link>
            </div>
            <div className="flex flex-col gap-2 pt-6 text-est-light-grey">
              <ol className="relative border-1 border-slate-600 ml-4">
                <RecentMessages
                  time="10 days ago"
                  text="The first recent message"
                />
                <RecentMessages
                  time="1h ago"
                  text="The latest recent message"
                />
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="est-container-violet mt-6">
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

export default AdminDashboard;
