import React from "react";
import styles from "styles/Home.module.css";
import logo from "public/log-main.png";
import Image from "next/image";

export default function Header() {
  return (
    <div
      className={`${styles["header"]} w-100 lg:px-0  lg:max-w-[120px] lg:w-full border-b-1 text-white border-b border-white-500 mx-auto `}
    >
      <Image src={logo} alt="" width={100} />
    </div>
  );
}
