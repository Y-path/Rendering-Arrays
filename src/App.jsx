import { useState } from 'react'

import './App.css'
import { Learners } from '../components/Learners'

function App() {
  const [learners] = useState(Learners);

  return (
    <>
      <h2>Learners:</h2>
      {learners.map((learner) => {
        return <Learner key={learner.name} learner={learner} />
      })}
    </>
  );
}

function Learner({ learner }) {
  return (
    <>
      <h3>{learner.name}</h3>
      <h4>Bio: &nbsp;{learner.bio}</h4>
      <Score scores={learner.scores} />

    </>
  );
}

function Score({ scores }) {
  return (
    <ul>
      {scores.map((score, index) => {
        return (
          <li key={index}>
            Date: {score.date}
            &nbsp; &nbsp;
            Score: {score.score}
          </li>
        );
      })}
    </ul>
  );
}

export default App
