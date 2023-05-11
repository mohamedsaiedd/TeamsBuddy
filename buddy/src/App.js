import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/buddy', { prompt })
    .then((res) => {
        console.log(res);
        setResponse(res.data)
      }).catch((err) => {
        console.log(err);
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        input you text:
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
      <p>
        the response is {response}
      </p>
    </form>
  );
}

export default App;
