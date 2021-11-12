import React from 'react'

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export default function FeaturedInfo() {
    return (
        <div className="featured w-full flex justify-between">
            <div className="featuredItem flex-1 my-0 mx-5 p-8">
                <span className="featuredTitle">
                    Revanue
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMony">
                        $56.87
                    </span>
                    <span className="featuredMonyRate">
                        -11.23<ArrowDownwardIcon />
                    </span>
                </div>
                <span className="featuredSub">
                    Compared to last Month
                </span>
            </div>
            <div className="featuredItem flex-1 my-0 mx-5 p-8">
                <span className="featuredTitle">
                    Sales
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMony">
                        $4456.23
                    </span>
                    <span className="featuredMonyRate">
                        -4.45<ArrowDownwardIcon />
                    </span>
                </div>
                <span className="featuredSub">
                    Compared to last Month
                </span>
            </div>
            <div className="featuredItem flex-1 my-0 mx-5 p-8">
                <span className="featuredTitle">
                    Cost
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMony">
                        $453.44
                    </span>
                    <span className="featuredMonyRate">
                        -11.23<ArrowUpwardIcon />
                    </span>
                </div>
                <span className="featuredSub">
                    Compared to last Month
                </span>
            </div>
        </div>
    )
}
