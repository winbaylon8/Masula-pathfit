import React from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import "./PALog.css";

function PALog() {
  const workoutData = [
    {
      week: "Week 1 (March 24-28)",
      sessions: [
        {
          date: "March 24",
          day: "MONDAY",
          exercises: [
            { name: "Kneeling Push Ups", sets: 3, reps: 10, superset: "Dumbbell Tricep Over Head (3 sets; 10 reps)" },
            { name: "Inch Worm", sets: 3, reps: 10, superset: "Skull Crushers (3 sets; 10 reps)" },
            { name: "Bench Dips", sets: 3, reps: 10, superset: "Leg Raises (3 sets; 10 reps)" },
            { name: "Planks Shoulder Tops", sets: 3, reps: 10, superset: "Russian Twist (3 sets; 30 reps)" }
          ],
          imageName: "/images/MONDAY_(March_24).jpg"
        },
        {
          date: "March 26",
          day: "WEDNESDAY",
          exercises: [
            { name: "Goblet Squats", sets: 4, reps: 15 },
            { name: "Split Squats", sets: 4, reps: 15 },
            { name: "Hip Trust", sets: 4, reps: 15 },
            { name: "Sumo Squats", sets: 4, reps: 15 },
            { name: "Donkey Kicks", sets: 4, reps: 15, superset: "Straight Leg Lift (4 sets; 15 reps)" }
          ],
          imageName: "/images/WEDNESDAY_(March_26).jpg"
        },
        {
          date: "March 28",
          day: "FRIDAY",
          exercises: [
            { name: "Kneeling Push Ups", sets: 3, reps: 10, superset: "Dumbbell Tricep Over Head (3 sets; 10 reps)" },
            { name: "Inch Worm", sets: 3, reps: 10, superset: "Skull Crushers (3 sets; 10 reps)" },
            { name: "Bench Dips", sets: 3, reps: 10, superset: "Leg Raises (3 sets; 10 reps)" },
            { name: "Planks Shoulder Tops", sets: 3, reps: 10, superset: "Russian Twist (3 sets; 30 reps)" }
          ],
          imageName: "/images/FRIDAY_(March_28).jpg"
        }
      ]
    },
    {
      week: "Week 2 (March 31-April 4)",
      sessions: [
        {
          date: "March 31",
          day: "MONDAY",
          exercises: [
            { name: "Goblet Squats", sets: 4, reps: 15 },
            { name: "Split Squats", sets: 4, reps: 15 },
            { name: "Hip Trust", sets: 4, reps: 15 },
            { name: "Sumo Squats", sets: 4, reps: 15 },
            { name: "Donkey Kicks", sets: 4, reps: 15, superset: "Straight Leg Lift (4 sets; 15 reps)" }
          ],
          imageName: "/images/MONDAY_(March_31).jpg"
        },
        {
          date: "April 2",
          day: "WEDNESDAY",
          exercises: [
            { name: "Kneeling Push Ups", sets: 3, reps: 10, superset: "Dumbbell Tricep Over Head (3 sets; 10 reps)" },
            { name: "Inch Worm", sets: 3, reps: 10, superset: "Skull Crushers (3 sets; 10 reps)" },
            { name: "Bench Dips", sets: 3, reps: 10, superset: "Leg Raises (3 sets; 10 reps)" },
            { name: "Planks Shoulder Tops", sets: 3, reps: 10, superset: "Russian Twist (3 sets; 30 reps)" }
          ],
          imageName: "/images/WEDNESDAY_(April_2).jpg"
        },
        {
          date: "April 4",
          day: "FRIDAY",
          exercises: [
            { name: "Goblet Squats", sets: 4, reps: 15 },
            { name: "Split Squats", sets: 4, reps: 15 },
            { name: "Hip Trust", sets: 4, reps: 15 },
            { name: "Sumo Squats", sets: 4, reps: 15 },
            { name: "Donkey Kicks", sets: 4, reps: 15, superset: "Straight Leg Lift (4 sets; 15 reps)" }
          ],
          imageName: "/images/FRIDAY_(April_4).jpg"
        }
      ]
    },
    {
      week: "Week 3 (April 7-11)",
      sessions: [
        {
          date: "April 7",
          day: "MONDAY",
          exercises: [
            { name: "Dumbbell Dead Lift", sets: 4, reps: 15, superset: "Diagonal Leg Lift (4 sets; 15 reps)" },
            { name: "Walking Lunges", sets: 4, reps: 15 },
            { name: "Squat Jumps", sets: 4, reps: 15 },
            { name: "Hip Bridges", sets: 4, reps: 15 },
            { name: "Fire Hydrant", sets: 4, reps: 15 }
          ],
          imageName: "/images/MONDAY_(April_7).jpg"
        },
        {
          date: "April 9",
          day: "WEDNESDAY",
          exercises: [
            { name: "Inch Worm w/ Knee to Chest", sets: 3, reps: 10, superset: "Plank Knee Taps" },
            { name: "Push Up Release", sets: 3, reps: 8, superset: "Elbow Plank (3 sets; 12 reps)" },
            { name: "Dumbbell Press", sets: 3, reps: 12, superset: "Bicycle (3 sets; 12 reps)" },
            { name: "Dumbbell Rows", sets: 3, reps: 12, superset: "Seated Knee to Chest (3 sets; 12 reps)" },
            { name: "Dumbbell Shrugs", sets: 3, reps: 12 }
          ],
          imageName: "/images/WEDNESDAY_(April_9).jpg"
        },
        {
          date: "April 11",
          day: "FRIDAY",
          exercises: [
            { name: "Dumbbell Dead Lift", sets: 4, reps: 15, superset: "Diagonal Leg Lift (4 sets; 15 reps)" },
            { name: "Walking Lunges", sets: 4, reps: 15 },
            { name: "Squat Jumps", sets: 4, reps: 15 },
            { name: "Hip Bridges", sets: 4, reps: 15 },
            { name: "Fire Hydrant", sets: 4, reps: 15 }
          ],
          imageName: "/images/FRIDAY_(April_11).jpg"
        }
      ]
    },
    {
      week: "Week 4 (April 14-18)",
      sessions: [
        {
          date: "April 14",
          day: "MONDAY",
          exercises: [
            { name: "Inch Worm w/ Knee to Chest", sets: 3, reps: 10, superset: "Plank Knee Taps" },
            { name: "Push Up Release", sets: 3, reps: 8, superset: "Elbow Plank (3 sets; 12 reps)" },
            { name: "Dumbbell Press", sets: 3, reps: 12, superset: "Bicycle (3 sets; 12 reps)" },
            { name: "Dumbbell Rows", sets: 3, reps: 12, superset: "Seated Knee to Chest (3 sets; 12 reps)" },
            { name: "Dumbbell Shrugs", sets: 3, reps: 12 }
          ],
          imageName: "/images/MONDAY_(April_14).jpg"
        },
        {
          date: "April 16",
          day: "WEDNESDAY",
          exercises: [
            { name: "Dumbbell Dead Lift", sets: 4, reps: 15, superset: "Diagonal Leg Lift (4 sets; 15 reps)" },
            { name: "Walking Lunges", sets: 4, reps: 15 },
            { name: "Squat Jumps", sets: 4, reps: 15 },
            { name: "Hip Bridges", sets: 4, reps: 15 },
            { name: "Fire Hydrant", sets: 4, reps: 15 }
          ],
          imageName: "/images/WEDNESDAY_(April_16).jpg"
        },
        {
          date: "April 18",
          day: "FRIDAY",
          exercises: [
            { name: "Inch Worm w/ Knee to Chest", sets: 3, reps: 10, superset: "Plank Knee Taps" },
            { name: "Push Up Release", sets: 3, reps: 8, superset: "Elbow Plank (3 sets; 12 reps)" },
            { name: "Dumbbell Press", sets: 3, reps: 12, superset: "Bicycle (3 sets; 12 reps)" },
            { name: "Dumbbell Rows", sets: 3, reps: 12, superset: "Seated Knee to Chest (3 sets; 12 reps)" },
            { name: "Dumbbell Shrugs", sets: 3, reps: 12 }
          ],
          imageName: "/images/FRIDAY_(April_18).jpg"
        }
      ]
    },
    {
      week: "Week 5 (April 21-25)",
      sessions: [
        {
          date: "April 21",
          day: "MONDAY",
          exercises: [
            { name: "Pushup and variations", sets: 4, reps: 25, superset: "Jumping Squats (4 sets; 25 reps)" },
            { name: "Pike Push-ups", sets: 4, reps: 25 },
            { name: "Close Grip Pushups", sets: 4, reps: 25 },
            { name: "Leg Raises", sets: 4, reps: 25 },
            { name: "Body Weight Calf Raises", sets: 4, reps: 25 }
          ],
          imageName: "/images/MONDAY_(April_21).jpg"
        },
        {
          date: "April 23",
          day: "WEDNESDAY",
          exercises: [
            { name: "Lunges", sets: 4, reps: 25, superset: "Body-Weight Calf Raises (4 sets; 25 reps)" },
            { name: "Reverse Pushups", sets: 4, reps: 25 },
            { name: "Bedsheet Rows", sets: 4, reps: 25 },
            { name: "Side-Lying Curl", sets: 4, reps: 25 },
            { name: "Leg Raises", sets: 4, reps: 25 }
          ],
          imageName: "/images/WEDNESDAY_(April_23).jpg"
        },
        {
          date: "April 25",
          day: "FRIDAY",
          exercises: [
            { name: "Pushup and variations", sets: 4, reps: 25, superset: "Jumping Squats (4 sets; 25 reps)" },
            { name: "Pike Push-ups", sets: 4, reps: 25 },
            { name: "Close Grip Pushups", sets: 4, reps: 25 },
            { name: "Leg Raises", sets: 4, reps: 25 },
            { name: "Body Weight Calf Raises", sets: 4, reps: 25 }
          ],
          imageName: "/images/FRIDAY_(April_25).jpg"
        }
      ]
    }
  ];

  return (
    <Container fluid className="about-section">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Physical <span className="purple">Activity Log</span>
            </h1>
            <p className="home-about-body">
              My fitness journey from March 24 to April 25
            </p>
          </Col>
        </Row>
        
        {workoutData.map((week, weekIndex) => (
          <div key={weekIndex} className="week-block mb-5">
            <h2 className="purple mb-4">{week.week}</h2>
            {week.sessions.map((session, sessionIndex) => (
              <Card key={sessionIndex} className="mb-4 workout-card">
                <Card.Header className="d-flex justify-content-between align-items-center">
                  <h3 className="mb-0">{session.day} ({session.date})</h3>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={8}>
                      <Table responsive borderless className="workout-table">
                        <thead>
                          <tr>
                            <th>Exercise</th>
                            <th>Sets</th>
                            <th>Reps</th>
                            <th>Superset</th>
                          </tr>
                        </thead>
                        <tbody>
                          {session.exercises.map((exercise, index) => (
                            <tr key={index}>
                              <td>{exercise.name}</td>
                              <td>{exercise.sets}</td>
                              <td>{exercise.reps}</td>
                              <td>{exercise.superset || '-'}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Col>
                    <Col md={4} className="workout-image">
                      {session.imageName && (
                        <img 
                          src={session.imageName}
                          alt={`Workout ${session.day}`}
                          className="img-fluid rounded"
                        />
                      )}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          </div>
        ))}
      </Container>
    </Container>
  );
}

export default PALog; 