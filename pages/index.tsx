import About from "../components/About";
import ArtistSection from "../components/ArtistSection";

import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="px-5 lg:px-12">
      <Hero />
      <About />
      <ArtistSection />
    </div>
  );
}
