import "../style/services.css";
import { FaLaptopCode } from "react-icons/fa";


function Services() {
  return (
    <main className="main">
      <div className="ser-container">
        {/* top div */}
        <div className="top-div-ser">
          <h2 className="title-ser">My Services</h2>
          <p className="des-ser">
            I specialize in creating modern responsive  and user-friendly
            websites tailored to your unique needs  From custom designs to
            seamless functionality I ensure your online presence stands out
            Whether you need a brand-new website an e-commerce platform  or
            regular maintenance I am here to deliver high-quality solutions that
            drive results
        </p>
        </div>

        {/*bottom div */}

        <div className="boxes-con">
            <div className="box" >
            <FaLaptopCode className="ser-icon" />
            <h3>Web Development</h3>
            <span>Blog E-Commerce</span>
            </div>

            <div className="box" >
            <FaLaptopCode className="ser-icon" />
            <h3>Web Development</h3>
            <span>Blog E-Commerce</span>
            </div>

            <div className="box" >
            <FaLaptopCode className="ser-icon" />
            <h3>Web Development</h3>
            <span>Blog E-Commerce</span>
            </div>

            <div className="box" >
            <FaLaptopCode className="ser-icon" />
            <h3>Web Development</h3>
            <span>Blog, E-Commerce</span>
            </div>

            <div className="box" >
            <FaLaptopCode className="ser-icon" />
            <h3>Web Development</h3>
            <span>Blog E-Commerce</span>
            </div>

            <div className="box" >
            <FaLaptopCode className="ser-icon" />
            <h3>Web Development</h3>
            <span>Blog E-Commerce</span>
            </div>

           
        </div>
      </div>
    </main>
  );
}

export default Services;
