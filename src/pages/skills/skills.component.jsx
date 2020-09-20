import React from "react";
import School from "../../assets/img/ourMission/school1.jpeg";
import School2 from "../../assets/img/ourMission/school2.png";
import Zoom from "react-reveal/Zoom";
import "./skills.styles.css";



const Skills = () => {
  return (
    

    <div className="pt-3 pb-3" id="skills">
      <Zoom duration={2000}>
      <h1 className="text-center font-details-b pb-4">OUR MISSION</h1>
      </Zoom>
      <div className="border"></div>
      
      <section className="section my-services" data-section="section2">
        <div className="container">
          <div className="section-heading">
            <h2>What I’m good at?</h2>
            <div className="line-dec"></div>
            <span
              >Curabitur leo felis, rutrum vitae varius eu, malesuada a tortor.
              Vestibulum congue leo et tellus aliquam, eu viverra nulla semper.
              Nullam eu faucibus diam. Donec eget massa ante.</span
            >
          </div>
          <div className="row">
            <div className="col-md-6 imgssCard">
      <Zoom duration={2000}>

            <img src={School} className="testimonial-img" alt=""/>
          </Zoom>      
            </div>
            <div className="col-md-6">
      <Zoom duration={2000} delay={200}>
              
              <div className="service-itemss">
                <div className="second-service-icon service-iconss"></div>
                <h4>OUR MISSION</h4>
                <p>
                  Proin lacus massa, eleifend sed fermentum in, dignissim vel
                  metus. Nunc accumsan leo nec felis porttitor, ultricies
                  faucibus purus mollis.
                </p>
              </div>
              </Zoom>
            </div>
            <div className="col-md-6">
      <Zoom duration={2000} delay={300}>

              <div className="service-itemss">
                <div className="third-service-icon service-iconss"></div>
                <h4>OUR VISSION</h4>
                <p>
                  Integer suscipit condimentum aliquet. Nam quis risus metus.
                  Nullam faucibus quam eget arcu pretium tincidunt. Nam libero
                  dui.
                </p>
              </div>
              </Zoom>
            </div>
            <div className="col-md-6 imgssCard">
      <Zoom duration={2000} delay={400}>

            <img src={School2} className="testimonial-img" alt=""/>
            </Zoom>    
            </div>
          </div>
        </div>
      </section>






    </div>
    
  );
};

export default Skills;
