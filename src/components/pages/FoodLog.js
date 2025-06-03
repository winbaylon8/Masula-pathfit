import React from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import "./FoodLog.css";

function FoodLog() {
  const mealData = [
    {
      week: "Week 1 (March 24-28)",
      days: [
        {
          date: "March 24",
          day: "MONDAY",
          meals: {
            lunch: {
              items: [
                "2 pieces of chicken wings",
                "half sweet potato",
                "1 cup guisadong gulay",
                "4 small spring rolls"
              ],
              image: "/food log/IMG_5580.JPG"
            },
            dinner: {
              items: [
                "1 large sweet potato",
                "7 pieces small okra",
                "2 breast chicken",
                "1 medium egg",
                "2 medium-sized banana",
                "1 medium-sized orange",
                "1 small apple"
              ],
              image: "/food log/IMG_5581.JPG"
            }
          }
        },
        {
          date: "March 26",
          day: "WEDNESDAY",
          meals: {
            lunch: {
              items: [
                "4 small spring rolls",
                "1 cup rice",
                "1 sunny-side",
                "half-cup pastil"
              ],
              image: "/food log/IMG_5584.JPG"
            },
            dinner: {
              items: [
                "2 cups of kimchi chicken rice"
              ],
              image: "/food log/IMG_5585.JPG"
            }
          }
        },
        {
          date: "March 28",
          day: "FRIDAY",
          meals: {
            lunch: {
              items: [
                "1 cup rice",
                "1 sunny-side",
                "half-cup pastil"
              ],
              image: "/food log/IMG_5586.JPG"
            },
            dinner: {
              items: [
                "2 cups of kimchi chicken rice"
              ],
              image: "/food log/IMG_5587.JPG"
            }
          }
        }
      ]
    },
    {
      week: "Week 2 (March 31-April 4)",
      days: [
        {
          date: "March 31",
          day: "MONDAY",
          meals: {
            lunch: {
              items: [
                "1 cup rice",
                "2 cups pork kare-kare"
              ],
              image: "/food log/IMG_5589.JPG"
            },
            dinner: {
              items: [
                "half cup rice",
                "blanched alugbati",
                "1 medium galunggong",
                "2 small rilled talong",
                "2 cups cabbage"
              ],
              image: "/food log/IMG_5590.JPG"
            }
          }
        },
        {
          date: "April 2",
          day: "WEDNESDAY",
          meals: {
            lunch: {
              items: [
                "1 cup rice",
                "1 piece tuna mackerel",
                "1 cup ampalaya"
              ],
              image: "/food log/IMG_5591.JPG"
            },
            dinner: {
              items: [
                "1 piece grilled chicken breast",
                "3 boiled eggs"
              ],
              image: "/food log/IMG_5592.JPG"
            }
          }
        },
        {
          date: "April 4",
          day: "FRIDAY",
          meals: {
            lunch: {
              items: [
                "half cup rice",
                "1 piece tortang isda",
                "2 cups adobong sitaw"
              ],
              image: "/food log/IMG_5593.JPG"
            },
            dinner: {
              items: [
                "6 small sized boiled okra",
                "3 small boiled eggs",
                "1 and a half cup sinigang"
              ],
              image: "/food log/IMG_5594.JPG"
            }
          }
        }
      ]
    },
    {
      week: "Week 3 (April 7-11)",
      days: [
        {
          date: "April 7",
          day: "MONDAY",
          meals: {
            lunch: {
              items: [
                "1 cup mechado",
                "2 boiled medium-sized eggs",
                "1 cup rice"
              ],
              image: "/food log/IMG_5595.JPG"
            },
            dinner: {
              items: [
                "7 pieces lettuce",
                "1 piece fried breast chicken",
                "2 scrambled eggs"
              ],
              image: "/food log/IMG_5596.JPG"
            }
          }
        },
        {
          date: "April 9",
          day: "WEDNESDAY",
          meals: {
            lunch: {
              items: [
                "1 small boneless bangus",
                "4 small boiled okra",
                "2 whole fried potato"
              ],
              image: "/food log/IMG_5597.JPG"
            },
            dinner: {
              items: [
                "2 cups of salmon sinigang",
                "half cup rice"
              ],
              image: "/food log/IMG_5598.JPG"
            }
          }
        },
        {
          date: "April 11",
          day: "FRIDAY",
          meals: {
            lunch: {
              items: [
                "1 cup rice",
                "1 sunny-side up egg",
                "half-cup pastil"
              ],
              image: "/food log/IMG_5600.JPG"
            },
            dinner: {
              items: [
                "3 grilled small breast chicken",
                "1 cup guisadong alugbati with tofu"
              ],
              image: "/food log/IMG_5601.JPG"
            }
          }
        }
      ]
    },
    {
      week: "Week 4 (April 14-18)",
      days: [
        {
          date: "April 14",
          day: "MONDAY",
          meals: {
            lunch: {
              items: [
                "2 pieces of bok choy with peanut sauce",
                "2 pieces of scrambled egg",
                "3 pieces of small grilled breast"
              ],
              image: "/food log/IMG_5602.JPG"
            },
            dinner: {
              items: [
                "2 cups of pinakbet",
                "1 piece of fish belly"
              ],
              image: "/food log/IMG_5604.JPG"
            }
          }
        },
        {
          date: "April 16",
          day: "WEDNESDAY",
          meals: {
            lunch: {
              items: [
                "1 piece of boiled egg",
                "2 cups of ensaladang repolyo",
                "2 pieces of grilled ribs"
              ],
              image: "/food log/IMG_2183.jpg"
            },
            dinner: {
              items: [
                "1 cup of miswa soup",
                "2 piece of blanched petchay leaves"
              ],
              image: "/food log/IMG_2984.jpg"
            }
          }
        },
        {
          date: "April 18",
          day: "FRIDAY",
          meals: {
            lunch: {
              items: [
                "1 bowl of caesar salad",
                "1 medium-sized boiled egg"
              ],
              image: "/food log/IMG_2988.jpg"
            },
            dinner: {
              items: [
                "1 piece scrambled egg",
                "1 piece chicken hotdog",
                "half cup sisig rice",
                "150 grams blanched sitaw"
              ],
              image: "/food log/IMG_3082.jpg"
            }
          }
        }
      ]
    },
    {
      week: "Week 5 (April 21-25)",
      days: [
        {
          date: "April 21",
          day: "MONDAY",
          meals: {
            lunch: {
              items: [
                "1 cup pork adobo",
                "1 cup fried rice"
              ],
              image: "/food log/IMG_3239.jpg"
            },
            dinner: {
              items: [
                "1 cup carbonara",
                "1 cup boiled broccoli",
                "1 piece pork chop"
              ],
              image: "/food log/IMG_3404.jpg"
            }
          }
        },
        {
          date: "April 23",
          day: "WEDNESDAY",
          meals: {
            lunch: {
              items: [
                "2 pieces spinach omelette",
                "1 piece fried chicken"
              ],
              image: "/food log/IMG_3561.jpg"
            },
            dinner: {
              items: [
                "1 medium-sized scrambled egg",
                "1 cup lechon",
                "50 grams blanched sitaw"
              ],
              image: "/food log/IMG_3594.jpg"
            }
          }
        },
        {
          date: "April 25",
          day: "FRIDAY",
          meals: {
            lunch: {
              items: [
                "1 cup caesar salad"
              ],
              image: "/food log/IMG_3688.jpg"
            },
            dinner: {
              items: [
                "2 pieces fried bangus belly",
                "1 half medium-sized sweet potato",
                "half cup rice"
              ],
              image: "/food log/IMG_5579.JPG"
            }
          }
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
              Food <span className="purple">Log</span>
            </h1>
            <p className="home-about-body">
              My nutrition journey from March 24 to April 25
            </p>
          </Col>
        </Row>

        <div className="fasting-info">
          <h4>Intermittent Fasting Schedule</h4>
          <p>
            I currently practice intermittent fasting using the 16:8 method, where I fast for 16 hours and eat during an 8-hour window—typically from 12 PM to 8 PM. I've found this routine helps me manage my appetite, stay consistent with my nutrition, and maintain better energy levels throughout the day. I also appreciate the simplicity it brings to my schedule. I'd like to continue following this approach, but I'm open to adjusting it if you think it might impact my training performance, recovery, or overall progress.
          </p>
        </div>
        
        {mealData.map((week, weekIndex) => (
          <div key={weekIndex} className="week-block mb-5">
            <h2 className="purple mb-4">{week.week}</h2>
            {week.days.map((day, dayIndex) => (
              <Card key={dayIndex} className="mb-4 food-card">
                <Card.Header className="d-flex justify-content-between align-items-center">
                  <h3 className="mb-0">{day.day} ({day.date})</h3>
                </Card.Header>
                <Card.Body>
                  {day.meals.lunch && (
                    <div className="mb-4">
                      <h4 className="meal-header lunch">LUNCH</h4>
                      <div className="meal-content">
                        <div className="meal-details">
                          <Table responsive borderless className="food-table">
                            <tbody>
                              {day.meals.lunch.items.map((item, index) => (
                                <tr key={index}>
                                  <td>{item}</td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </div>
                        <div className="meal-photo">
                          <img 
                            src={day.meals.lunch.image}
                            alt={`Lunch ${day.day}`}
                            className="img-fluid rounded"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  {day.meals.dinner && (
                    <div>
                      <h4 className="meal-header dinner">DINNER</h4>
                      <div className="meal-content">
                        <div className="meal-details">
                          <Table responsive borderless className="food-table">
                            <tbody>
                              {day.meals.dinner.items.map((item, index) => (
                                <tr key={index}>
                                  <td>{item}</td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </div>
                        <div className="meal-photo">
                          <img 
                            src={day.meals.dinner.image}
                            alt={`Dinner ${day.day}`}
                            className="img-fluid rounded"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </Card.Body>
              </Card>
            ))}
          </div>
        ))}
      </Container>
    </Container>
  );
}

export default FoodLog; 