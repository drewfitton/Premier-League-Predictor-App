import React, { useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
    const [features, setFeatures] = useState({
        homeTeam: '',
        awayTeam: '',
        homeOdds: '',
        awayOdds: '',
        drawOdds: ''
    });
    const [prediction, setPrediction] = useState(null);
    const [predictionProba, setPredictionProba] = useState(null);
    const [error, setError] = useState('');
    const imageLinks = {
      "Bournemouth": "https://loodibee.com/wp-content/uploads/AFC-Bournemouth-logo-300x300.png",
      "Arsenal": "https://loodibee.com/wp-content/uploads/Arsenal-FC-logo-300x300.png", 
      "Aston Villa": "https://loodibee.com/wp-content/uploads/Aston-Villa-FC-logo-300x300.png",
      "Brentford": "https://loodibee.com/wp-content/uploads/Brentford-FC-logo-300x300.png",
      "Brighton": "https://loodibee.com/wp-content/uploads/Brighton-Hove-Albion-logo-300x300.png",
      "Chelsea": "https://loodibee.com/wp-content/uploads/Chelsea-FC-logo-300x300.png",
      "Crystal Palace": "https://loodibee.com/wp-content/uploads/Crystal-Palace-FC-logo-300x300.png",
      "Everton": "https://loodibee.com/wp-content/uploads/Everton-FC-logo-300x300.png",
      "Fulham": "https://loodibee.com/wp-content/uploads/Fulham-FC-logo-300x300.png",
      "Ipswich": "https://loodibee.com/wp-content/uploads/Ipswich-Town-FC-logo-300x300.png",
      "Leicester": "https://loodibee.com/wp-content/uploads/Leicester-City-FC-logo-300x300.png",
      "Liverpool": "https://loodibee.com/wp-content/uploads/Liverpool-FC-logo-300x300.png",
      "Manchester City": "https://loodibee.com/wp-content/uploads/Manchester-City-FC-logo-300x300.png",
      "Manchester Utd": "https://loodibee.com/wp-content/uploads/Manchester-United-FC-logo-300x300.png",
      "Newcastle": "https://loodibee.com/wp-content/uploads/Newcastle-United-logo-300x300.png",
      "Nottingham": "https://loodibee.com/wp-content/uploads/Nottingham-Forest-FC-logo-300x300.png",
      "Southampton": "https://loodibee.com/wp-content/uploads/Southampton-FC-logo-300x300.png",
      "Tottenham": "https://loodibee.com/wp-content/uploads/Tottenham-Hotspur-logo-300x300.png",
      "West Ham": "https://loodibee.com/wp-content/uploads/West-Ham-United-FC-logo-300x300.png",
      "Wolves": "https://loodibee.com/wp-content/uploads/Wolverhampton-Wanderers-logo-300x300.png",
      "Draw": "https://dorve.com/wp-content/uploads/2023/08/premierleague-1024x1024.png"
    }
    const numPattern = /^[+-]?\d+$/;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFeatures({ ...features, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!numPattern.test(features.homeOdds) || !numPattern.test(features.awayOdds) || !numPattern.test(features.drawOdds)) {
          setError('Odds fields must be numbers');
          return; // Stop the form submission
        }
        setError('')
        try {
          const response = await axios.post('http://127.0.0.1:5000/predict', features);
          setPrediction(response.data.prediction);
          setPredictionProba(response.data.probabilities);
        } catch (error) {
            console.error('Error making prediction:', error);
        }
    };

    return (
      <div>
        <div className="title">
              <img src="https://dorve.com/wp-content/uploads/2023/08/premierleague-1024x1024.png" alt="" className="titleLogo" />
              <h1>Premier League Match Predictor</h1>
              <img src="https://dorve.com/wp-content/uploads/2023/08/premierleague-1024x1024.png" alt="" className="titleLogo" />
        </div>
        <div className="container">
          <div className="left-section">
            <form onSubmit={handleSubmit}>
              <div className="input_div">
                <p>Home Team</p>
                <select name="homeTeam" value={features.homeTeam} onChange={handleChange}>
                  <option value="">Select Home Team</option>
                  {Object.keys(imageLinks).map((team) => (
                    <option key={team} value={team}>{team}</option>
                  ))}
                </select>
              </div>
              <div className="input_div">
                <p>Away Team</p>
                <select name="awayTeam" value={features.awayTeam} onChange={handleChange}>
                  <option value="">Select Away Team</option>
                  {Object.keys(imageLinks).map((team) => (
                    <option key={team} value={team}>{team}</option>
                  ))}
                </select>
              </div>
              <div className="input_div">
                <p>Home Odds</p>
                <input type="text" name="homeOdds" value={features.homeOdds} onChange={handleChange} placeholder="Home Team Odds" />
              </div>
              <div className="input_div">
                <p>Away Odds</p>
                <input type="text" name="awayOdds" value={features.awayOdds} onChange={handleChange} placeholder="Away Team Odds" />
              </div>
              <div className="input_div">
                <p>Draw Odds</p>
                <input type="text" name="drawOdds" value={features.drawOdds} onChange={handleChange} placeholder="Draw Odds" />
              </div>
              {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
              <button type="submit">Predict</button>
            </form>
          </div>

          <div className="right-section">
            {prediction !== null && (
              <div className="outputStats">
                <h2>Prediction:</h2>
                <h1>{prediction}</h1>
                <img src={imageLinks[prediction]} alt="" className="outImage" />
                <h2>Prediction Probabilities:</h2>
                <h3 className="outInfo">Home Win: {predictionProba.home_win}%</h3>
                <h3 className="outInfo">Away Win: {predictionProba.away_win}%</h3>
                <h3 className="outInfo">Draw: {predictionProba.draw}%</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    );
}

export default App;
