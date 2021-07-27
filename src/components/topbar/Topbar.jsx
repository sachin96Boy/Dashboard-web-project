import React from "react";

import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';

export const Topbar = () => {
  return (
    <div className="topBar  w-full h-12 bg-white sticky top-0 z-50 ">
      <div className="topbarwrapper h-full py-0 px-5 flex items-center justify-between ">
        <div className="topLeft">
          <span className="logo font-bold text-4xl text-blue-800 cursor-pointer">
            Harshana Medicare
          </span>
        </div>
        <div className="topRight flex items-center">
          <div className="topBarIconsContainer relative cursor-pointer mr-3">
            <NotificationsNoneIcon />
            <span className="topiconsBadge flex content-center justify-center absolute -top-2 -right-0.5 bg-pink rounded-full w-5 h-5 border-2  border-pink-dark text-justify items-center text-lg">
                2
            </span>
          </div>
          <div className="topBarIconsContainer relative cursor-pointer mr-3">
            <LanguageIcon />
            <span className="topiconsBadge flex content-center justify-center absolute -top-2 -right-0.5 bg-pink rounded-full w-5 h-5 border-2 border-pink-dark text-justify items-center text-lg">
                2
            </span>
          </div>
          <div className="topBarIconsContainer relative cursor-pointer mr-3 ">
            <SettingsIcon />

          </div>
          <img className="img topAvtr w-10 h-10 rounded-full cursor-pointer"src="https://st.depositphotos.com/1016231/5085/i/600/depositphotos_50852169-stock-photo-hipster-style-guy-fashion-man.jpg" alt="pic1"/>
        </div>
      </div>
    </div>
  );
};
