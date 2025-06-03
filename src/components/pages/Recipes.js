import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Recipes.css";

function Recipes() {
  return (
    <Container fluid>
      <div className="recipes-container">
        <div className="recipes-header">
          <h1>Fresh From the Garden</h1>
          <p>Dishes that will Leaf You Wanting More</p>
        </div>

        {/* Kani Salad Spring Rolls */}
        <div className="recipe-card">
          <h2>Kani Salad Spring Rolls</h2>
          <p className="description">
            A refreshing twist on the classic kani salad, wrapped for convenience and packed with crisp greens, tuna, and a delightful dressing. Light, satisfying, and full of flavor.
          </p>
          <div className="recipe-content">
            <div className="ingredients-section">
              <h3>Ingredients</h3>
              <div className="ingredients-group">
                <h4>Wraps</h4>
                <ul className="ingredients-list">
                  <li>Rice paper (soaked in water)</li>
                  <li>2 cucumber (sliced vertically)</li>
                  <li>1 medium-sized carrots (sliced vertically)</li>
                  <li>1 mango (sliced vertically)</li>
                  <li>Lettuce</li>
                  <li>Tuna flakes</li>
                </ul>
                <h4>Sauce</h4>
                <ul className="ingredients-list">
                  <li>Peanut Butter</li>
                  <li>Soy Sauce</li>
                  <li>Sugar</li>
                  <li>Garlic</li>
                  <li>Water</li>
                </ul>
              </div>
            </div>
            <div className="nutrition-section">
              <h3>Nutritional Facts</h3>
              <table className="nutrition-table">
                <thead>
                  <tr>
                    <th>Ingredient</th>
                    <th>Calories</th>
                    <th>Protein (g)</th>
                    <th>Fat (g)</th>
                    <th>Carbs (g)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Cucumber</td><td>16</td><td>0.7</td><td>0.1</td><td>3.6</td></tr>
                  <tr><td>Carrots</td><td>41</td><td>0.9</td><td>0.2</td><td>9.6</td></tr>
                  <tr><td>Mango</td><td>60</td><td>0.8</td><td>0.4</td><td>15.0</td></tr>
                  <tr><td>Lettuce</td><td>15</td><td>1.4</td><td>0.2</td><td>2.9</td></tr>
                  <tr><td>Tuna (cooked)</td><td>132</td><td>28.0</td><td>1.3</td><td>0.0</td></tr>
                  <tr><td>Rice Paper</td><td>35</td><td>0.5</td><td>0.1</td><td>8.0</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Malunggay-Kamote Pesto Pasta */}
        <div className="recipe-card">
          <h2>Malunggay-Kamote Pesto Pasta</h2>
          <p className="description">
            A nutritious pasta infused with malunggay and kamote leaves, bringing health and heartiness to every twirl. A fusion of wellness and taste, rich in vitamins and fiber.
          </p>
          <div className="recipe-content">
            <div className="ingredients-section">
              <h3>Ingredients</h3>
              <div className="ingredients-group">
                <h4>Sauce</h4>
                <ul className="ingredients-list">
                  <li>Malunggay Leaves</li>
                  <li>Kamote Tops</li>
                  <li>Roasted Peanuts</li>
                  <li>Garlic and Onion</li>
                  <li>Cooking Oil</li>
                  <li>Chicken Breast</li>
                </ul>
                <h4>Pasta</h4>
                <ul className="ingredients-list">
                  <li>Fusilli Pasta</li>
                  <li>Palm Oil</li>
                  <li>Salt</li>
                  <li>Black Pepper</li>
                </ul>
              </div>
            </div>
            <div className="nutrition-section">
              <h3>Nutritional Facts</h3>
              <table className="nutrition-table">
                <thead>
                  <tr>
                    <th>Ingredient</th>
                    <th>Calories</th>
                    <th>Protein (g)</th>
                    <th>Fat (g)</th>
                    <th>Carbs (g)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Malunggay Leaves</td><td>64</td><td>9.4</td><td>1.4</td><td>8.3</td></tr>
                  <tr><td>Kamote Tops</td><td>22</td><td>2.6</td><td>0.3</td><td>3.3</td></tr>
                  <tr><td>Roasted Peanuts</td><td>567</td><td>25.8</td><td>49.2</td><td>16.1</td></tr>
                  <tr><td>Garlic & Onion</td><td>125</td><td>3.0</td><td>0.5</td><td>28.5</td></tr>
                  <tr><td>Cooking Oil</td><td>884</td><td>0.0</td><td>100.0</td><td>0.0</td></tr>
                  <tr><td>Chicken Breast</td><td>165</td><td>31.0</td><td>3.6</td><td>0.0</td></tr>
                  <tr><td>Fusilli Pasta</td><td>371</td><td>13.0</td><td>1.5</td><td>75.0</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Kamote Leaf Juice */}
        <div className="recipe-card">
          <h2>Kamote Leaf Juice</h2>
          <p className="description">
            A refreshing, earthy beverage made from kamote leaves with lemon, delivering a natural boost of nutrients with a smooth, slightly sweet taste. Detoxifying, hydrating, and packed with antioxidants.
          </p>
          <div className="recipe-content">
            <div className="ingredients-section">
              <h3>Ingredients</h3>
              <ul className="ingredients-list">
                <li>Kamote leaf extract</li>
                <li>Honey</li>
                <li>Lemon slices</li>
                <li>Lemon Juice</li>
              </ul>
            </div>
            <div className="nutrition-section">
              <h3>Nutritional Facts</h3>
              <table className="nutrition-table">
                <thead>
                  <tr>
                    <th>Ingredient</th>
                    <th>Calories</th>
                    <th>Protein (g)</th>
                    <th>Fat (g)</th>
                    <th>Carbs (g)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Kamote Leaf Extract</td><td>22</td><td>2.0</td><td>0.3</td><td>3.0</td></tr>
                  <tr><td>Honey</td><td>304</td><td>0.3</td><td>0.0</td><td>82.4</td></tr>
                  <tr><td>Lemon Slices</td><td>29</td><td>1.1</td><td>0.3</td><td>9.3</td></tr>
                  <tr><td>Lemon Juice</td><td>22</td><td>0.4</td><td>0.2</td><td>6.9</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="video-section">
          <h2>Watch How It's Made</h2>
          <div className="video-container">
            <video controls>
              <source src="/food log/KUSINA.MOV" type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Recipes; 