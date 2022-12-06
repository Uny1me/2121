import image05 from "../public/zainab-II/05.jpg";
import Image from "next/image";
const About = () => {
  return (
    <div className="flex flex-col lg:flex-row px-5 lg:px-12 pt-20 gap-x-8 about-wrapper">
      <div className={`about-img w-[100%]`}>
        <Image src={image05} alt="2121" />
      </div>
      <div className="flex flex-col relative justify-start pt-5 lg:pt-0">
        <small className="text-lg border-l-2  border-light px-3">
          What&apos;s happening?
        </small>
        <h1 className="text-4xl lg:text-6xl py-6">
          Vestibulum commodo tellus finibus diam dapibus, quis rutrum nulla
          congue.
        </h1>
        <p className="lg:w-[90%] text-sm lg:text-xl leading-12">
          Mauris consectetur rutrum nunc id tincidunt. Praesent lobortis magna
          sit amet ipsum tristique aliquet. Maecenas imperdiet id arcu ut
          posuere. Aenean nec blandit diam, ac interdum metus. Nam sit amet
          augue felis.
        </p>
        <p className="lg:w-[90%] text-sm lg:text-xl leading-12">
          Cras hendrerit ex sit amet fringilla rutrum. Fusce molestie nec leo in
          dapibus. Etiam quis justo ut odio consectetur vehicula. Mauris sed
          nisl magna.
        </p>
      </div>
    </div>
  );
};

export default About;
