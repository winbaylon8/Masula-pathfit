import React from "react";
import { Container } from "react-bootstrap";
import "./HealthTrivia.css";

function HealthTrivia() {
  const triviaFacts = [
    {
      title: "Laughter Boosts Your Immune System",
      content: "Laughter reduces stress hormones and increases immune cells and infection-fighting antibodies, improving your resistance to disease."
    },
    {
      title: "Chewing Gum Enhances Cognitive Function",
      content: "Chewing gum has been shown to improve memory, focus, and alertness by increasing blood flow to the brain."
    },
    {
      title: "Spending Time in Nature Strengthens Immunity",
      content: "Regular exposure to natural environments can increase white blood cell production, which is crucial for fighting infections."
    },
    {
      title: "A Positive Attitude Protects Your Heart",
      content: "Maintaining a positive outlook on life has been associated with a lower risk of heart disease, stroke, and even cancer."
    },
    {
      title: "Your Brain Is More Active at Night",
      content: "Contrary to the belief that the brain rests during sleep, research indicates that it is more active at night, consolidating memories and processing information."
    },
    {
      title: "You Can Overdose on Water",
      content: "Consuming excessive amounts of water in a short period can lead to hyponatremia, a condition where sodium levels in the blood become dangerously low, potentially causing swelling in the brain and other serious health issues."
    },
    {
      title: "You Are Taller in the Morning",
      content: "Due to spinal decompression during sleep, you are slightly taller in the morning than at night."
    },
    {
      title: "You Produce 25 Million New Cells Every Second",
      content: "Your body is constantly regenerating, producing approximately 25 million new cells every second to replace old or damaged ones."
    },
    {
      title: "Farting May Help Lower Blood Pressure",
      content: "Recent studies suggest that the hydrogen sulfide gas produced during flatulence can have cardiovascular benefits, potentially lowering blood pressure."
    },
    {
      title: "You Have More Bacteria Cells Than Human Cells",
      content: "The human body contains more bacterial cells than human cells, primarily residing in the gut, playing a crucial role in digestion and overall health."
    }
  ];

  const references = [
    {
      author: "Cajochen, C., & Kräuchi, K.",
      year: "2003",
      title: "Circadian modulation of cognitive performance: Impact of the biological clock on neuropsychological functioning",
      journal: "Chronobiology International",
      link: "https://doi.org/10.1081/CBI-120024587"
    },
    {
      author: "Crawford, H.",
      year: "2015",
      title: "Why are we taller in the morning?",
      journal: "BBC Science Focus Magazine",
      link: "https://www.sciencefocus.com/the-human-body/why-are-we-taller-in-the-morning/"
    },
    {
      author: "Hajar, R.",
      year: "2023",
      title: "Laughter in medicine",
      journal: "Heart Views",
      link: "https://doi.org/10.4103/heartviews.heartviews_10_23"
    },
    {
      author: "Kubzansky, L. D., & Thurston, R. C.",
      year: "2007",
      title: "Emotional vitality and incident coronary heart disease: Benefits of healthy psychological functioning",
      journal: "Archives of General Psychiatry",
      link: "https://doi.org/10.1001/archpsyc.64.12.1393"
    },
    {
      author: "Li, Q.",
      year: "2010",
      title: "Effect of forest bathing trips on human immune function",
      journal: "Environmental Health and Preventive Medicine",
      link: "https://doi.org/10.1007/s12199-009-0167-7"
    }
  ];

  return (
    <Container fluid>
      <div className="trivia-container">
        <div className="trivia-header">
          <h1>10 Mind-Blowing Health Facts Backed by Science</h1>
          <p>
            Health and wellness go far beyond just diet and exercise. The human body and mind 
            are full of surprising capabilities and curiosities that even many health professionals 
            don't talk about daily. Here are 10 science-backed, astonishing health facts that might 
            just change the way you see your body—and your health.
          </p>
        </div>

        <div className="trivia-grid">
          {triviaFacts.map((fact, index) => (
            <div key={index} className="trivia-card">
              <h3>{fact.title}</h3>
              <p>{fact.content}</p>
            </div>
          ))}
        </div>

        <div className="references-section">
          <h2>References</h2>
          <ul className="references-list">
            {references.map((ref, index) => (
              <li key={index}>
                {ref.author} ({ref.year}). {ref.title}. {ref.journal}.{" "}
                <a href={ref.link} target="_blank" rel="noopener noreferrer">
                  {ref.link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default HealthTrivia; 