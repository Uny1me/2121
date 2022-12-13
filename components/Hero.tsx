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
          2121: Speculative <br /> Everything <br />
        </h1>
        <p className={`${styles["fade-in-up-quick"]} leading-8 pb-8`}>
          The first of the annual fashion exhibitions by Dunsin Wright.{" "}
          <br className="lg:block hidden" /> Inspired by sci-fi and the
          historical exclusion of POC in the genre,{" "}
          <br className="lg:block hidden" />
          this exhibition aims to present an intersectional lens through which
          to view possible futures or <br className="lg:block hidden" />{" "}
          alternate realities{" "}
        </p>
        <div className="divider mb-8"></div>
        <div className="flex items-start">
          <Location />
          <div className="text px-3">
            {/* <h3 className="uppercase">Hours</h3> */}
            <p
              className="font-weight-light text-xs pt-1"
              style={{
                fontWeight: "100",
              }}
            >
              {" "}
              13&mdash;14, December 2022. 10:00&mdash; 18:00 WAT
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
