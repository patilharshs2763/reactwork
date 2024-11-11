import React from "react";
import { Row, Col, Card } from "antd";
import Header from "../Header";
import SendIcon from "@mui/icons-material/Send";
import "./about.css";
import Commentbutton from "../Commentbutton";

const About = () => {
  return (
    <div className="maindiv-about">
      <Header />
      <div className="about-container">
        <Row gutter={[16, 16]} justify="center">
          <Col span={24} className="about-header">
            <h2 className="about-title">ABOUT US</h2>
            <h1 className="about-subtitle">
              WE MAKE ALL TYPES OF COMMERCIAL SIGNS
            </h1>
            <p className="about-description">
              Signs NYC, with over 20 years of experience in the signage and
              custom fabrication field, has established itself as a trusted
              partner for diverse businesses across NYC and beyond. Specializing
              in custom signs, we cater to small businesses, franchises, and
              national accounts, offering tailored solutions for multi-site
              branding, specialty fabrication, and architectural signage. Our
              commitment to excellence ensures every project, big or small, is
              handled with precision and professionalism. We take pride in doing
              things right, every time.
            </p>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
            <Card title="CUSTOM SIGNAGE SOLUTION" className="about-card">
              <p>
                With over 30 years of experience, we specialize in crafting
                unique signage that captures your brand’s essence. Our range
                includes Channel Letters, Illuminated Signage, and Decals, all
                designed to make a lasting impression.
              </p>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
            <Card title="CRAFTSMANSHIP" className="about-card">
              <p>
                Utilizing cutting-edge CNC, laser cutting, and CAD/CAM, Signs
                NYC delivers precision and innovation in every signage project,
                blending modern techniques with expert craftsmanship for
                high-quality, creative designs.
              </p>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
            <Card title="TAILORED APPROACH" className="about-card">
              <p>
                We tailor every project to meet individual client needs,
                ensuring unique, brand-aligned signage solutions. Our team
                collaborates closely with clients for customized, impactful
                results.
              </p>
            </Card>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={8}
            lg={8}
            xl={8}
            xxl={8}
            className="experience-container"
          >
            <div>
              <div className="experience-box">
                <h1 className="experience-years">33</h1>
                <p>YEARS OF EXPERIENCE</p>
              </div>
            </div>
            <br />
            <div>
              <Commentbutton
                text="REQUEST A QUOTE"
                endIcon={<SendIcon />}
                className="comment-button-style"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
