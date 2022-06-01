import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Quato from './components/Quato';

function App() {

  const [quato, setQuato] = useState({
    content: "",
    dateAdded: "",
    author: ""
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getQuato();
  }, []);

  async function getQuato() {
    try {
      setLoading(true);
      const { data } = await axios.get("https://api.quotable.io/random");
      setQuato(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="App">
      <button
        onClick={() => getQuato()}
      >generate</button>
      {
        quato && <Quato
          content={quato.content}
          date={quato.dateAdded}
          author={quato.author}
        />
      }

    </div >
  );
}

export default App;
