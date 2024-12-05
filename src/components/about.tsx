import "../style/hero.css";
import Image from "next/image";
import "../style/about.css"
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import Link from "next/link";




function About() {
  return (
    <div className="header-container">
      <div className="header-boxer-container">
        {/* left */}
        <div>
          <Image src={"/imgs.jpg"} width={400} height={400}
          className="header-img"
           alt="img" />

           <div className="social-icon">
           <Link href={""}><IoLogoYoutube  className="s-icon1"/></Link>
          <Link href={""}> <FaFacebook className="s-icon2" /></Link>
          <Link href={""}> <FaSquareInstagram className="s-icon3"/></Link>
           </div>



        </div>

        {/*right */}
        <div className="hero-right-div">
            <h1 className="title-hero">About Us
                
            </h1>
            <p className="des-hero">I am a passionate and skilled web developer, dedicated to creating functional, visually appealing, 
                and user-friendly websites and web applications. With expertise in modern web technologies, I aim 
                to deliver high-quality solutions that meet client needs and enhance user experiences.</p>
                
        </div>
      </div>
    </div>
  );
}

export default About;
