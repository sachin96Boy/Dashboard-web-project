import React from 'react'



import LineStyleIcon from '@material-ui/icons/LineStyle';
import TimelineIcon from '@material-ui/icons/Timeline';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

export default function Sidebar() {
    return (
        <div className="sidebar  flex-1 h-almost bg-green-light sticky top-12">
            <div className="sidebarwrapper p-5 text-blacks">
                <div className="sidebarmenu mb-3.5">
                    <h3 className="sidebartitle text-3xl text-gray-dark"><strong>DashBoard</strong></h3>
                    <ul className="sidebarlist list-none p-5">
                        <li className="sidebarlistitem p-1 cursor-pointer flex items-center rounded-xl active:bg-gray-light hover:bg-gray-light">
                            <LineStyleIcon className="sidebaricon mr-1 text-xl"  />
                            Home
                        </li>
                        <li className="sidebarlistitem p-1 cursor-pointer flex items-center rounded-xl active:bg-gray-light hover:bg-gray-light">
                            <TimelineIcon className="sidebaricon mr-1 text-xl" />
                            Analytics
                        </li>
                        <li className="sidebarlistitem p-1 cursor-pointer flex items-center rounded-xl active:bg-gray-light hover:bg-gray-light" >
                            <TrendingUpIcon className="sidebaricon mr-1 text-xl" />
                            Sales
                        </li>
                        <li className="sidebarlistitem p-1 cursor-pointer flex items-center rounded-xl active:bg-gray-light hover:bg-gray-light">
                            <LineStyleIcon className="sidebaricon mr-1 text-xl" />
                            Home
                        </li>
                        <li className="sidebarlistitem p-1 cursor-pointer flex items-center rounded-xl active:bg-gray-light hover:bg-gray-light">
                            <LineStyleIcon className="sidebaricon mr-1 text-xl" />
                            Home
                        </li>
                    </ul>
                </div>
                <div className="sidebarmenu mb-3.5">
                    <h3 className="sidebartitle text-3xl text-gray-dark"><strong>QuickMenu</strong></h3>
                    <ul className="sidebarlist list-none p-5">
                        <li className="sidebarlistitem p-1 cursor-pointer flex items-center rounded-xl active:bg-gray-light hover:bg-gray-light">
                            <LineStyleIcon className="sidebaricon mr-1 text-xl"  />
                            Home
                        </li>
                        <li className="sidebarlistitem p-1 cursor-pointer flex items-center rounded-xl active:bg-gray-light hover:bg-gray-light">
                            <TimelineIcon className="sidebaricon mr-1 text-xl" />
                            Analytics
                        </li>
                        <li className="sidebarlistitem p-1 cursor-pointer flex items-center rounded-xl active:bg-gray-light hover:bg-gray-light" >
                            <TrendingUpIcon className="sidebaricon mr-1 text-xl" />
                            Sales
                        </li>
                        <li className="sidebarlistitem p-1 cursor-pointer flex items-center rounded-xl active:bg-gray-light hover:bg-gray-light">
                            <LineStyleIcon className="sidebaricon mr-1 text-xl" />
                            Home
                        </li>
                        <li className="sidebarlistitem p-1 cursor-pointer flex items-center rounded-xl active:bg-gray-light hover:bg-gray-light">
                            <LineStyleIcon className="sidebaricon mr-1 text-xl" />
                            Home
                        </li>
                    </ul>
                </div>
                <div className="sidebarmenu mb-3.5">
                    <h3 className="sidebartitle text-3xl text-gray-dark"><strong>Notifications</strong></h3>
                    <ul className="sidebarlist list-none p-5">
                        <li className="sidebarlistitem p-1 cursor-pointer flex items-center rounded-xl active:bg-gray-light hover:bg-gray-light">
                            <LineStyleIcon className="sidebaricon mr-1 text-xl"  />
                            Home
                        </li>
                        <li className="sidebarlistitem p-1 cursor-pointer flex items-center rounded-xl active:bg-gray-light hover:bg-gray-light">
                            <TimelineIcon className="sidebaricon mr-1 text-xl" />
                            Analytics
                        </li>
                        <li className="sidebarlistitem p-1 cursor-pointer flex items-center rounded-xl active:bg-gray-light hover:bg-gray-light" >
                            <TrendingUpIcon className="sidebaricon mr-1 text-xl" />
                            Sales
                        </li>
                        <li className="sidebarlistitem p-1 cursor-pointer flex items-center rounded-xl active:bg-gray-light hover:bg-gray-light">
                            <LineStyleIcon className="sidebaricon mr-1 text-xl" />
                            Home
                        </li>
                        <li className="sidebarlistitem p-1 cursor-pointer flex items-center rounded-xl active:bg-gray-light hover:bg-gray-light">
                            <LineStyleIcon className="sidebaricon mr-1 text-xl" />
                            Home
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
