import React from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';

function PALog() {
  const workoutData = [
    // ... existing code ...
  ];

  // Helper to parse sets and reps from a superset string
  function parseSetsReps(str, fallbackSets, fallbackReps) {
    const setsMatch = str.match(/(\d+)\s*set/);
    const repsMatch = str.match(/(\d+)\s*rep/);
    return {
      sets: setsMatch ? parseInt(setsMatch[1]) : fallbackSets,
      reps: repsMatch ? parseInt(repsMatch[1]) : fallbackReps,
    };
  }

  // Helper to clean exercise names (remove 'superset' and extra spaces)
  function cleanExerciseName(name) {
    return name.replace(/superset/gi, '').replace(/\s+/g, ' ').trim();
  }

  // Transform all exercises and supersets into flat exercise entries
  const cleanedWorkoutData = workoutData.map(week => ({
    ...week,
    sessions: week.sessions.map(session => ({
      ...session,
      exercises: session.exercises.flatMap(ex => {
        if (ex.superset) {
          // Parse name, sets, reps for superset
          const supersetName = cleanExerciseName(ex.superset.replace(/\s*\([^)]*\)/, ''));
          const { sets, reps } = parseSetsReps(ex.superset, ex.sets, ex.reps);
          return [
            { name: supersetName, sets, reps },
            { name: cleanExerciseName(ex.name), sets: ex.sets, reps: ex.reps }
          ];
        } else {
          return [{ name: cleanExerciseName(ex.name), sets: ex.sets, reps: ex.reps }];
        }
      })
    }))
  }));

  return (
    <Container fluid className="about-section">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Physical <span className="purple">Activity Log</span>
            </h1>
            <p className="home-about-body">
              Track your fitness journey from March 24 to April 25
            </p>
          </Col>
        </Row>
        {cleanedWorkoutData.map((week, weekIndex) => (
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
                          </tr>
                        </thead>
                        <tbody>
                          {session.exercises.map((exercise, index) => (
                            <tr key={index}>
                              <td>{exercise.name}</td>
                              <td>{exercise.sets}</td>
                              <td>{exercise.reps}</td>
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
                          style={{ filter: 'grayscale(100%)' }}
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