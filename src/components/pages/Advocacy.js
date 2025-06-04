import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Advocacy.css";

function Advocacy() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", marginBottom: "30px", textAlign: "center" }}>
              Our <span className="purple">Advocacy</span>
            </h1>
            <div className="advocacy-content">
              <Card className="mb-4">
                <Card.Body>
                  <section className="formulated-program">
                    <h2>Formulated Program</h2>
                    {/* ...existing content... */}
                    <h4>Activity-based Strategies</h4>
                    <p>
                      A home-based workout routine provides an accessible, economical, and effective method for maintaining physical fitness without the need for specialized equipment or access to a gym. By utilizing bodyweight exercises, individuals can engage in strength-building activities while simultaneously improving flexibility and cardiovascular endurance. These exercises effectively target major muscle groups and can be tailored to suit both beginners and more experienced individuals.
                    </p>
                    <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
                      <table className="table table-bordered table-striped" style={{ minWidth: 400, background: 'rgba(35,35,45,0.2)', color: '#fff' }}>
                        <thead>
                          <tr>
                            <th colSpan="2" style={{ textAlign: 'center', background: 'rgba(108,99,255,0.15)' }}>Workout A</th>
                          </tr>
                          <tr>
                            <th>Exercise</th>
                            <th>Resources</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Pushup and variations (4 sets of 6-8 reps)</td>
                            <td>
                              <a href="https://www.youtube.com/watch?v=0zkzvb_bfuY" target="_blank" rel="noopener noreferrer">Video 1</a><br/>
                              <a href="https://www.youtube.com/watch?v=2FxZK4H2GUM" target="_blank" rel="noopener noreferrer">Video 2</a>
                            </td>
                          </tr>
                          <tr>
                            <td>Pike Pushups and variations (3 sets of 6-10 reps)</td>
                            <td>
                              <a href="https://www.youtube.com/watch?v=PYL8jUzJr3A" target="_blank" rel="noopener noreferrer">Video 1</a><br/>
                              <a href="https://www.youtube.com/watch?v=5yLcLmhjDw" target="_blank" rel="noopener noreferrer">Video 2</a>
                            </td>
                          </tr>
                          <tr>
                            <td>Close Grip PushUps (3 sets of 8-10 reps)</td>
                            <td>
                              <a href="https://youtu.be/IcWPQo1i0k4?t=44" target="_blank" rel="noopener noreferrer">Video</a>
                            </td>
                          </tr>
                          <tr>
                            <td>Leg Raises (3 sets of 15-20 reps)</td>
                            <td>
                              <a href="https://youtube.com/watch?v=PCDxgsX_LFs&si=bSwiMLRHV1j1v-zU" target="_blank" rel="noopener noreferrer">Video</a>
                            </td>
                          </tr>
                          <tr>
                            <td>Bodyweight Calf Raise and variations (3 sets of 15-20 reps)</td>
                            <td>
                              <a href="https://www.youtube.com/watch?v=YoVLzAJKqY0" target="_blank" rel="noopener noreferrer">Video</a>
                            </td>
                          </tr>
                          <tr>
                            <td>Water Jug Lift</td>
                            <td>
                              <a href="https://www.youtube.com/watch?v=YVn6iPEIVBo" target="_blank" rel="noopener noreferrer">Video</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table className="table table-bordered table-striped" style={{ minWidth: 400, background: 'rgba(35,35,45,0.2)', color: '#fff' }}>
                        <thead>
                          <tr>
                            <th colSpan="2" style={{ textAlign: 'center', background: 'rgba(108,99,255,0.15)' }}>Workout B</th>
                          </tr>
                          <tr>
                            <th>Exercise</th>
                            <th>Resources</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Lunges (4 sets of 4-6 reps)</td>
                            <td>
                              <a href="https://youtube.com/watch?v=ugW5I-a5A-Q&si=cJDcSlkRvFZNzzBP" target="_blank" rel="noopener noreferrer">Video</a>
                            </td>
                          </tr>
                          <tr>
                            <td>Reverse Pushups (3 sets of 6-8 reps)</td>
                            <td>
                              <a href="https://youtube.com/watch?v=a00N2M7J1_o&si=yNu8C1E1LTkWohrq" target="_blank" rel="noopener noreferrer">Video</a>
                            </td>
                          </tr>
                          <tr>
                            <td>Bedsheet Row (3 sets of 6-8 reps)</td>
                            <td>
                              <a href="https://youtube.com/watch?v=rloXYB8M3vU&si=jQPrCCWB63wcQlB9" target="_blank" rel="noopener noreferrer">Video</a>
                            </td>
                          </tr>
                          <tr>
                            <td>Side-lying Curl (3 sets of 8-10 reps)</td>
                            <td>
                              <a href="https://youtube.com/watch?v=VRvGrig1Ntc&si=BlI6nyEuRKREjk85" target="_blank" rel="noopener noreferrer">Video</a>
                            </td>
                          </tr>
                          <tr>
                            <td>Leg Raises (3 sets of 15-20 reps)</td>
                            <td>
                              <a href="https://youtube.com/watch?v=PCDxgsX_LFs&si=bSwiMLRHV1j1v-zU" target="_blank" rel="noopener noreferrer">Video</a>
                            </td>
                          </tr>
                          <tr>
                            <td>Bodyweight Calf Raise variations (3 sets of 15-20 reps)</td>
                            <td>
                              <a href="https://youtube.com/watch?v=_5R7wFS6I9o&si=bYJJCLgH7v2ND2S" target="_blank" rel="noopener noreferrer">Video</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* ...existing content... */}
                  </section>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Advocacy; 