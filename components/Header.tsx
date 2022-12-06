import React from "react";
import styles from "../styles/Home.module.css";
import logo from "../public/log-main.png";
import Image from "next/image";

export default function Header() {
  return (
    <div
      className={`${styles["header"]} px-5 lg:px-0 w-100 lg:w-[1024px] border-b-1 text-white border-b border-white-500 mx-auto`}
    >
      {/* <h1 className=" text-6xl lg:text-7xl py-4">2121</h1> */}
      <Image src={logo} alt="" width={100} />
    </div>
  );
}
