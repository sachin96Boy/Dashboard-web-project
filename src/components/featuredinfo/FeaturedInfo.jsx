import React from "react";

import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

export default function FeaturedInfo() {
  return (
    <div className="featured w-full flex items-center justify-between">
      <div className="featuredItem flex-1 my-0 mx-5 p-8 shadow-lg">
        <span className="featuredTitle text-xl font-bold">Revanue</span>
        <div className="featuredMoneyContainer mt-3 flex content-center">
          <span className="featuredMony text-3xl font-bold">$56.87</span>
          <span className="featuredMonyRate flex items-center ml-5">
            -11.23
            <ArrowDownwardIcon className="featuredIcon text-sm ml-1 text-red-600" />
          </span>
        </div>
        <span className="featuredSub text-lg text-gray-600">Compared to last Month</span>
      </div>
      <div className="featuredItem flex-1 my-0 mx-5 p-8 shadow-lg">
        <span className="featuredTitle text-xl font-bold">Sales</span>
        <div className="featuredMoneyContainer mt-3 flex items-center">
          <span className="featuredMony text-3xl font-bold">$4456.23</span>
          <span className="featuredMonyRate flex items-center ml-5">
            -4.45
            <ArrowDownwardIcon className="featuredIcon text-sm ml-1 text-red-600" />
          </span>
        </div>
        <span className="featuredSub text-lg text-gray-600">Compared to last Month</span>
      </div>
      <div className="featuredItem flex-1 my-0 mx-5 p-8 shadow-lg">
        <span className="featuredTitle text-xl font-bold">Cost</span>
        <div className="featuredMoneyContainer mt-3 flex content-center">
          <span className="featuredMony text-3xl font-bold">$453.44</span>
          <span className="featuredMonyRate flex items-center ml-5">
            -11.23
            <ArrowUpwardIcon className="featuredIcon text-sm ml-1 text-green-600" />
          </span>
        </div>
        <span className="featuredSub text-lg text-gray-600">Compared to last Month</span>
      </div>
    </div>
  );
}
