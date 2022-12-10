// Images

import MasonryComponent from "./MasonryComponent";

const ArtistSection = () => {
  // Custom Component

  return (
    <div className="pt-20 lg:pt-40 lg:px-20 ">
      <h1 className="text-4xl lg:text-6xl">Featured Designers.</h1>
      <div className="divider-bright my-3"></div>
      <MasonryComponent />
    </div>
  );
};

export default ArtistSection;
