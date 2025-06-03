import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GiCookingPot } from "react-icons/gi";

function PathfitKusina() {
  return (
    <Container fluid className="about-section">
      <Container style={{ marginTop: "100px" }}>
        <Row className="justify-content-center">
          <Col md={12} className="home-about-description text-center">
            <h1 style={{ fontSize: "2.6em" }}>
              Pathfit <span className="purple">Kusina</span>
            </h1>
            <p className="home-about-body" style={{ fontSize: "1.2em", marginBottom: "2em" }}>
              Welcome to our culinary corner where health meets flavor! Discover nutritious recipes 
              that make healthy eating both delicious and enjoyable. Our recipes focus on fresh, 
              locally-sourced ingredients and balanced nutrition to support your fitness journey.
            </p>
            
            <div className="main-features" style={{ marginBottom: "3em" }}>
              <h2 style={{ fontSize: "1.8em", marginBottom: "1em" }}>
                What We Offer
              </h2>
              <Row className="justify-content-center">
                <Col md={4} className="mb-4">
                  <div className="feature-card" style={{ 
                    padding: "2em",
                    backgroundColor: "rgba(35, 35, 45, 0.2)",
                    borderRadius: "15px",
                    height: "100%"
                  }}>
                    <h3 style={{ color: "var(--bs-purple)", marginBottom: "1em" }}>Healthy Recipes</h3>
                    <p>Nutritious and delicious recipes that support your fitness goals while satisfying your taste buds.</p>
                  </div>
                </Col>
                <Col md={4} className="mb-4">
                  <div className="feature-card" style={{ 
                    padding: "2em",
                    backgroundColor: "rgba(35, 35, 45, 0.2)",
                    borderRadius: "15px",
                    height: "100%"
                  }}>
                    <h3 style={{ color: "var(--bs-purple)", marginBottom: "1em" }}>Nutritional Info</h3>
                    <p>Detailed nutritional information for each recipe to help you make informed dietary choices.</p>
                  </div>
                </Col>
                <Col md={4} className="mb-4">
                  <div className="feature-card" style={{ 
                    padding: "2em",
                    backgroundColor: "rgba(35, 35, 45, 0.2)",
                    borderRadius: "15px",
                    height: "100%"
                  }}>
                    <h3 style={{ color: "var(--bs-purple)", marginBottom: "1em" }}>Cooking Videos</h3>
                    <p>Step-by-step video guides to help you prepare our healthy dishes with confidence.</p>
                  </div>
                </Col>
              </Row>
            </div>

            <Link to="/recipes">
              <Button
                variant="primary"
                style={{
                  backgroundColor: "var(--bs-purple)",
                  border: "none",
                  padding: "10px 30px",
                  fontSize: "1.2em",
                  borderRadius: "8px",
                }}
              >
                <GiCookingPot style={{ marginRight: "10px" }} />
                Explore Our Recipes
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default PathfitKusina; 