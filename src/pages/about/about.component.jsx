import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Parallax from 'react-rellax';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Staff1 from "../../assets/img/staff/staff1.jpg";
import Awais from "../../assets/img/staff/awaispic.jpg";
import Class from "../../assets/img/staff/classroom.jpg";
import Zoom from "react-reveal/Zoom";


import $ from 'jquery';


class About extends Component {

  state= {
    responsive:{
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      },
    },
}

render() {

  return (
    <div id="about">
      <div className="about">
        <Zoom duration={2000}>
        <h1 className="pt-3 text-center font-details pb-3">ABOUT US</h1>
        </Zoom>
        <div className="border"></div>
       
        <Container>
          <Row className="pt-3 pb-5 align-items-center mains">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2  ">
                <Zoom duration={2000}>
                <Image className="profile justify-content-end" alt="profile" src={Class} thumbnail fluid />
                </Zoom>
              </Row>
            </Col>
            <Col xs={12} md={6} className="info-my">
            <Zoom duration={2000}>

              <Row className=" align-items-start p-1 my-details  rounded">
              
                <p>
                Hi there! I am <strong>&nbsp;Anand Kumar Jha</strong>
                <br />A passionate programmer and a Coach, born and brought up in India. I am a Full Stack Web Developer with React.js, Django, Express.js, Node.js, and PostgreSQL as my tech stack.
                <br />
                In 2019, I successfully completed my Engineering with specialization in 'Electronics and Telecommunication'.
                <br />
                Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                <br />
                Along with that, I also help people as a COACH on their journey of becoming a professional programmer. I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                <br /> <br />
                </p>
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://ranaaw12.github.io/about/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Portfolio
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/ranaaw12" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/hafiz-rana-m-awais-07287b192/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
                
              </Row>
              </Zoom>
            </Col>
          </Row>
        </Container>
      </div>
      <Zoom duration={2000}>
      <h1 className="pt-3 text-center Staff">OUR STAFF</h1>
      </Zoom>
      <div className="border"></div>

      <Zoom duration={2000}>
      <OwlCarousel
    className="owl-theme"
    loop
    margin={10}
    autoplay={true}
    responsive={this.state.responsive}
    items={3}
    nav={true}
>
    <div className="item testimonials">

    <div className="testimonial-item">
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src={Staff1} className="testimonial-img" alt=""/>
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
          </div>


    </div>
    <div className="item testimonials">

    <div className="testimonial-item">
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src={Awais} className="testimonial-img" alt=""/>
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
          </div>


    </div>
    <div className="item testimonials">

    <div className="testimonial-item">
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src={Awais} className="testimonial-img" alt=""/>
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
          </div>



    </div>
    <div className="item testimonials">

    <div className="testimonial-item">
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src={Awais} className="testimonial-img" alt=""/>
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
          </div>



    </div>
    <div className="item testimonials">

    <div className="testimonial-item">
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src={Awais} className="testimonial-img" alt=""/>
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
          </div>


    </div>
    <div className="item testimonials">

    <div className="testimonial-item">
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src={Awais} className="testimonial-img" alt=""/>
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
          </div>




    </div>
    <div className="item testimonials">

    <div className="testimonial-item">
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src={Awais} className="testimonial-img" alt=""/>
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
          </div>


    </div>
    <div className="item testimonials">

    <div className="testimonial-item">
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src={Awais} className="testimonial-img" alt=""/>
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
          </div>

    </div>
    <div className="item testimonials">

    <div className="testimonial-item">
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src={Awais} className="testimonial-img" alt=""/>
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
          </div>


    </div>
    <div className="item testimonials">

    <div className="testimonial-item">
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src={Staff1} className="testimonial-img" alt=""/>
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
          </div>


    </div>
    <div className="item testimonials">

    <div className="testimonial-item">
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src={Staff1} className="testimonial-img" alt=""/>
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
          </div>


    </div>
    <div className="item testimonials">

    <div className="testimonial-item">
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src={Staff1} className="testimonial-img" alt=""/>
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
          </div>


    </div>
</OwlCarousel>
</Zoom>


    </div>
  )
}
}

export default About;
