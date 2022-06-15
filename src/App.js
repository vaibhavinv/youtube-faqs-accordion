import React, { useState } from "react";
import data from "./data";

import SingleQuestion from "./Question";
function App() {
  //use this to extract only one object from the array

  // const [questions, setQuestions] = useState(0);
  //const { title, info } = data[questions];

  //to get complete array use array.map function

  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>YouTube FAQs</h3>
        <section className="info">
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
