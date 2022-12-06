import Image from "next/image";
import React, { useState } from "react";
import Masonry from "react-masonry-css";

// Images
import image000 from "../public/zainab/00.jpg";
import image001 from "../public/zainab/01.jpg";
import image002 from "../public/zainab/02.jpg";
import image003 from "../public/zainab/03.jpg";
import image004 from "../public/zainab/04.jpg";
import image005 from "../public/zainab/05.jpg";
import image006 from "../public/zainab/06.jpg";
import image007 from "../public/zainab/07.jpg";
import image008 from "../public/zainab/08.jpg";
import image009 from "../public/zainab/09.jpg";
// Images
import image01 from "../public/zainab-II/01.jpg";
import image02 from "../public/zainab-II/02.jpg";
import image03 from "../public/zainab-II/03.jpg";
import image04 from "../public/zainab-II/04.jpg";
import image05 from "../public/zainab-II/05.jpg";
import image06 from "../public/zainab-II/06.jpg";
import image07 from "../public/zainab-II/07.jpg";
// Images
import image1 from "../public/zainab-III/01.jpg";
import image2 from "../public/zainab-III/02.jpg";
import image3 from "../public/zainab-III/03.jpg";
import image4 from "../public/zainab-III/04.jpg";
import image5 from "../public/zainab-III/05.jpg";
import image6 from "../public/zainab-III/06.jpg";

// Tareet

import imaget1 from "../public/tareet/01.webp";
import imaget2 from "../public/tareet/02.webp";
import imaget3 from "../public/tareet/03.webp";
import imaget4 from "../public/tareet/04.webp";
import imaget5 from "../public/tareet/05.webp";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const ArtistMasonry = () => {
  const [tabState, setTabState] = useState<string>("first");

  return (
    <div className="px-5 lg:px-60 pt-20 lg:pt-40">
      <div>
        <h1 className="text-5xl self-start"> Tareet</h1>
        <div className="divider-bright my-1 mt-3"></div>
        <div className="flex gap-x-5 py-5">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className={`my-masonry-grid`}
            columnClassName="my-masonry-grid_column"
          >
            <div className="w-100">
              <Image src={imaget1} alt="" placeholder="blur" />
            </div>

            <div className="w-100">
              <Image src={imaget2} alt="" placeholder="blur" />
            </div>

            <div className="w-100">
              <Image src={imaget3} alt="" placeholder="blur" />
            </div>

            <div className="w-100">
              <Image src={imaget4} alt="" placeholder="blur" />
            </div>

            <div className="w-100">
              <Image src={imaget5} alt="" placeholder="blur" />
            </div>

            {/* Zainab Mansary */}
          </Masonry>
        </div>
      </div>
      <h1 className="text-5xl self-start"> Zainab Mansary</h1>
      <div className="flex gap-x-5 py-5">
        <h1
          className={`${
            tabState === "first" ? "bg-white text-black" : ""
          } cursor-pointer outline outline-[0.002px] px-8 py-2 outline-light`}
          onClick={() => setTabState("first")}
        >
          I
        </h1>
        <h1
          className={`${
            tabState === "second" ? "bg-white text-black" : ""
          } cursor-pointer outline outline-[0.002px]  px-8 py-2 outline-light`}
          onClick={() => setTabState("second")}
        >
          II
        </h1>
        <h1
          className={`${
            tabState === "third" ? "bg-white text-black" : ""
          } cursor-pointer outline outline-[0.002px] px-8 py-2 outline-light`}
          onClick={() => setTabState("third")}
        >
          III
        </h1>
      </div>
      <div className="divider-bright mb-8"></div>
      {tabState === "first" && (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={`my-masonry-grid`}
          columnClassName="my-masonry-grid_column"
        >
          <div className="w-100">
            <Image src={image000} alt="" placeholder="blur" />
          </div>

          <div className="w-100">
            <Image src={image001} alt="" placeholder="blur" />
          </div>

          <div className="w-100">
            <Image src={image002} alt="" placeholder="blur" />
          </div>

          <div className="w-100">
            <Image src={image003} alt="" placeholder="blur" />
          </div>

          <div className="w-100">
            <Image src={image004} alt="" placeholder="blur" />
          </div>

          <div className="w-100">
            <Image src={image005} alt="" placeholder="blur" />
          </div>

          <div className="w-100">
            <Image src={image006} alt="" placeholder="blur" />
          </div>

          {/* Zainab Mansary */}
        </Masonry>
      )}
      {tabState === "second" && (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={`my-masonry-grid`}
          columnClassName="my-masonry-grid_column"
        >
          <div className="w-100">
            <Image src={image01} alt="" placeholder="blur" />
          </div>

          <div className="w-100">
            <Image src={image02} alt="" placeholder="blur" />
          </div>

          <div className="w-100">
            <Image src={image03} alt="" placeholder="blur" />
          </div>

          <div className="w-100">
            <Image src={image04} alt="" placeholder="blur" />
          </div>

          <div className="w-100">
            <Image src={image05} alt="" placeholder="blur" />
          </div>

          <div className="w-100">
            <Image src={image06} alt="" placeholder="blur" />
          </div>

          <div className="w-100">
            <Image src={image07} alt="" placeholder="blur" />
          </div>

          {/* Zainab Mansary */}
        </Masonry>
      )}
      {tabState === "third" && (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={`my-masonry-grid`}
          columnClassName="my-masonry-grid_column"
        >
          <div className="w-100">
            <Image src={image1} alt="" placeholder="blur" />
          </div>

          <div className="w-100">
            <Image src={image2} alt="" placeholder="blur" />
          </div>

          <div className="w-100">
            <Image src={image3} alt="" placeholder="blur" />
          </div>

          <div className="w-100">
            <Image src={image4} alt="" placeholder="blur" />
          </div>

          <div className="w-100">
            <Image src={image5} alt="" placeholder="blur" />
          </div>

          <div className="w-100">
            <Image src={image6} alt="" placeholder="blur" />
          </div>

          {/* Zainab Mansary */}
        </Masonry>
      )}
    </div>
  );
};

export default ArtistMasonry;
