import "../style/hero.css";
import Image from "next/image";

function Hero() {
  return (
    <div className="header-container">
      <div className="header-boxer-container">
        {/* left */}
        <div>
          <Image src={"/imgs.jpg"} width={400} height={400}
          className="header-img"
           alt="img" />
        </div>

        {/*right */}
        <div className="hero-right-div">
            <h1 className="title-hero">I am Saima Khan
                Front-end Developer
            </h1>
            <p className="des-hero">I am a passionate and skilled web developer dedicated to creating functional visually appealing
                and user-friendly websites and web applications With expertise in modern web technologies I am 
                to deliver high-quality solutions that meet client needs and enhance user experiences</p>
                <button className="hero-btn" >Hire Me</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
