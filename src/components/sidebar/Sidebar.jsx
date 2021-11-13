import React from "react";

import LineStyleIcon from "@material-ui/icons/LineStyle";
import TimelineIcon from "@material-ui/icons/Timeline";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import PersonIcon from '@mui/icons-material/Person';
import WebIcon from '@mui/icons-material/Web';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MailIcon from '@mui/icons-material/Mail';
import FeedbackIcon from '@mui/icons-material/Feedback';
import MessageIcon from '@mui/icons-material/Message';
import ForumIcon from '@mui/icons-material/Forum';
import ReportIcon from '@mui/icons-material/Report';

export default function Sidebar() {
  return (
    <div className="sidebar rounded-tr-3xl flex h-almost bg-green-300 sticky top-12 z-50">
      <div className="sidebarwrapper p-5 text-blacks">
        {/* sidebar - section */}
        <div className="sidebarmenu mb-3.5">
          <h3 className="sidebartitle text-3xl text-gray-dark">
            <strong>DashBoard</strong>
          </h3>
          <ul className="sidebarlist list-none p-5">
            <li className="sidebarlistitem p-1 cursor-pointer flex items-center rounded-xl active:bg-gray-light hover:bg-gray-light">
              <LineStyleIcon className="sidebaricon mr-1 text-xl" />
              Home
            </li>
            <li className="sidebarlistitem p-1 cursor-pointer flex items-center rounded-xl active:bg-gray-light hover:bg-gray-light">
              <TimelineIcon className="sidebaricon mr-1 text-xl" />
              Analytics
            </li>
            <li className="sidebarlistitem p-1 cursor-pointer flex items-center rounded-xl active:bg-gray-light hover:bg-gray-light">
              <TrendingUpIcon className="sidebaricon mr-1 text-xl" />
              Sales
            </li>
          </ul>
        </div>
        {/* sidebar - section */}
        <div className="sidebarmenu mb-3.5">
          <h3 className="sidebartitle text-3xl text-gray-dark">
            <strong>QuickMenu</strong>
          </h3>
          <ul className="sidebarlist list-none p-5">
            <li className="sidebarlistitem p-1 cursor-pointer flex items-center rounded-xl active:bg-gray-light hover:bg-gray-light">
              <PersonIcon className="sidebaricon mr-1 text-xl" />
              Users
            </li>
            <li className="sidebarlistitem p-1 cursor-pointer flex items-center rounded-xl active:bg-gray-light hover:bg-gray-light">
              <WebIcon className="sidebaricon mr-1 text-xl" />
              Products
            </li>
            <li className="sidebarlistitem p-1 cursor-pointer flex items-center rounded-xl active:bg-gray-light hover:bg-gray-light">
              <AttachMoneyIcon className="sidebaricon mr-1 text-xl" />
              transactions
            </li>
            <li className="sidebarlistitem p-1 cursor-pointer flex items-center rounded-xl active:bg-gray-light hover:bg-gray-light">
              <AssessmentIcon className="sidebaricon mr-1 text-xl" />
              Reports
            </li>
          </ul>
        </div>
        {/* sidebar - section */}
        <div className="sidebarmenu mb-3.5">
          <h3 className="sidebartitle text-3xl text-gray-dark">
            <strong>Notifications</strong>
          </h3>
          <ul className="sidebarlist list-none p-5">
            <li className="sidebarlistitem p-1 cursor-pointer flex items-center rounded-xl active:bg-gray-light hover:bg-gray-light">
              <MailIcon className="sidebaricon mr-1 text-xl" />
              Mail
            </li>
            <li className="sidebarlistitem p-1 cursor-pointer flex items-center rounded-xl active:bg-gray-light hover:bg-gray-light">
              <FeedbackIcon className="sidebaricon mr-1 text-xl" />
              Feedback
            </li>
            <li className="sidebarlistitem p-1 cursor-pointer flex items-center rounded-xl active:bg-gray-light hover:bg-gray-light">
              <MessageIcon className="sidebaricon mr-1 text-xl" />
              Messages
            </li>
          </ul>
        </div>
        {/* sidebar - section */}
        <div className="sidebarmenu mb-3.5">
          <h3 className="sidebartitle text-3xl text-gray-dark">
            <strong>Staff</strong>
          </h3>
          <ul className="sidebarlist list-none p-5">
            <li className="sidebarlistitem p-1 cursor-pointer flex items-center rounded-xl active:bg-gray-light hover:bg-gray-light">
              <ForumIcon className="sidebaricon mr-1 text-xl" />
              Message
            </li>
            <li className="sidebarlistitem p-1 cursor-pointer flex items-center rounded-xl active:bg-gray-light hover:bg-gray-light">
              <TimelineIcon className="sidebaricon mr-1 text-xl" />
              Analytics
            </li>
            <li className="sidebarlistitem p-1 cursor-pointer flex items-center rounded-xl active:bg-gray-light hover:bg-gray-light">
              <ReportIcon className="sidebaricon mr-1 text-xl" />
              Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
