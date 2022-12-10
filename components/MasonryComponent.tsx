import React from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";
import designers from "../library/designers";

import image6 from "../public/zainab-III/06.jpg";
import Script from "next/script";

type Props = {
  name?: String;
  bio?: String;
  images?: string;
};

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const MasonryComponent = () => {
  return (
    <div>
      {designers?.map((designer) => {
        return (
          <>
            <h1 className="lg:text-6xl text-4xl self-start pb-3 pt-8">
              {" "}
              {designer.name}
            </h1>
            {designer.video && (
              <div className="embed-container">
                <iframe src={designer.video} allowFullScreen></iframe>
              </div>
            )}
            <p className="bio leading-9 pb-6 text-lg">{designer.bio}</p>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className={`my-masonry-grid`}
              columnClassName="my-masonry-grid_column"
            >
              {designer.images.map((image, index) => {
                console.log(image);
                return (
                  <div className="w-100" key={index}>
                    <Image
                      src={image}
                      alt=""
                      placeholder="blur"
                      className="min-w-[100%] min-h-[40%]"
                    />
                  </div>
                );
              })}
            </Masonry>
          </>
        );
      })}
    </div>
  );
};

export default MasonryComponent;
