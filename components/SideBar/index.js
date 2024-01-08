import React from "react";
import style from "./sidebar.module.css";
import Logo from "../../assets/images/anycar_logo.png";
import Image from "next/image";


const SideBar = () => {
  return (
    <div className={style.sidebar_ctn}>
      <div className={style.logo}>
        <Image src={Logo} alt="logo" />
      </div>
    </div>
  );
};

export default SideBar;