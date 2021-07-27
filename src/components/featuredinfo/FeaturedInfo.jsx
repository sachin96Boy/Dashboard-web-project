import React from 'react'

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
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
        </div>
    )
}
