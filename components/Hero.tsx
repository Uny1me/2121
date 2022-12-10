import Image from "next/image";
import React from "react";
import heroImage from "../public/hero.webp";

import styles from "../styles/Home.module.css";
import { Location } from "./Icons";

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between  pt-8">
      <div>
        <h1
          className={`${styles["fade-in-up"]} text-white text-6xl lg:text-8xl pb-8`}
        >
          Integer risus risus, <br /> sodales id posuerett <br /> tincidunt eso.
        </h1>
        <p className={`${styles["fade-in-up-quick"]} leading-8 pb-8`}>
          Fusce at nulla in ex volutpat pharetra. Nam fringilla imperdiet augue,
          sit amet placerat lacus eleifend ac. <br /> Mauris condimentum nisi
          massa, consequat malesuada lectus euismod ut. <br /> Nam quis sodales
          lectus. Nam commodo congue eros eu pulvinar.{" "}
        </p>
        <div className="divider mb-8"></div>
        <div className="flex items-start">
          <Location />
          <div className="text px-3">
            <h3 className="uppercase">Hours</h3>
            <p
              className="font-weight-light text-xs pt-1"
              style={{
                fontWeight: "100",
              }}
            >
              {" "}
              9:30&mdash;6:00, Monday Until 8:00
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles["fade-in-up"]} w-100 pt-6`}>
        <Image src={heroImage} alt="" width={400} height={768} />
      </div>
    </div>
  );
}

export default Hero;
