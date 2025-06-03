import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi there, and thank you for stopping by. I created this space not just to track my physical progress, but to share a personal story that I know many others might relate to.
              <br />
              <br />For most of my life, I’ve been someone who poured all my time and energy into academics. I chased grades, deadlines, and achievements with everything I had. And while I’m proud of what I accomplished academically, I now realize that it came at a cost. Somewhere along the way, I stopped paying attention to myself—my body, my health, my confidence. I thought I could make up for it later, that it wasn’t urgent. But over time, I began to feel the consequences.
               <br />
              <br />My muscles felt weak—especially in my arms and legs. I couldn’t lift things without struggling, I’d get tired easily, and even simple tasks felt heavier than they should. But what hit even harder was the emotional weight that came with it. I felt insecure—not just about how I looked, but about how disconnected I had become from my own body. Looking in the mirror, I didn’t recognize the person staring back. I felt small, fragile, and honestly… ashamed that I had let myself get to that point.
               <br />
              <br />So, I made a decision: to start from zero, no matter how slow the progress would be.
               <br />
              <br />I began training—light at first. Push-ups, resistance bands, learning the basics of form and control. It was frustrating at times. I struggled. I doubted myself. But I kept showing up. And over time, something started to shift. I wasn’t just building muscle—I was building discipline, self-respect, and a deeper understanding of who I am when I’m not hiding.
               <br />
              <br />This journey has been so much more than fitness. It’s been about healing, reclaiming self-worth, and proving to myself that I can change. I’m still learning, still growing, still facing my insecurities one rep at a time. But I’m proud of how far I’ve come.
               <br />
              <br />This website is where I’ll be sharing my experiences—workout routines, challenges, progress updates, and honest reflections. It’s not about perfection or comparison. It’s about real growth, from someone who started this journey feeling weak and unsure, but refused to stay that way.
               <br />
              <br />If you're feeling the same way I once did, I hope this space reminds you that it’s never too late to choose yourself. Strength isn’t just something you’re born with—it’s something you can build.
               <br />
              <br />Welcome to my journey. I’m glad you’re here.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
