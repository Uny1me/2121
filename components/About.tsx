import image05 from "public/zainab-II/05.jpg";
import Image from "next/image";
const About = () => {
  return (
    <div className="flex flex-col lg:flex-row pt-20 gap-x-8 about-wrapper">
      <div className={`about-img w-[100%]`}>
        <Image src={image05} alt="2121" />
      </div>
      <div className="flex flex-col relative justify-start pt-5 lg:pt-0">
        <small className="text-lg border-l-2  border-light px-3">
          What&apos;s happening?
        </small>
        <h1 className="text-4xl lg:text-6xl py-6">
          The theme this year implores brands and attendees to come up with
          their interpretations of what fashion will look like a hundred years
          from now
        </h1>
        <p className="lg:w-[90%]  leading-8">
          We will feature works from 5 talented emerging African fashion
          designers and multi-media artists. The talent will have the
          opportunity to showcase their innovation as it pertains to materials,
          design process, sustainability and craft.
        </p>
        <br />
        <p className="lg:w-[90%]  leading-8">
          Included in the designers who will be showcased are Feben, Zainab
          Mansary, and Kadiju included in our 200 confirmed attendees for
          opening night, will be some of the most prominent names in music,
          fashion and art, such as Tems, Ayra Starr, Rema and Lisa Folawiyo. Our
          media partners include well-established houses like Native Mag and the
          Guardian.
        </p>
      </div>
    </div>
  );
};

export default About;
