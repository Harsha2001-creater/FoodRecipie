import React, { useState } from 'react';
import './App.css';
import './key';
import Axios from 'axios';
import Receipe from './components/recipieTile.js'

function App() {

  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);

  const YOUR_APP_ID = "b330c182";
  const YOUR_APP_KEY = "66e3e4d977a8c05562b5d1c7489ad78a";
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free`;

  async function getrecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    getrecipes();
  }

  return (
    <div className="app">
      <h1>Food Recipe Plaza</h1>
      <form className="app_searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter the Item....."
          value={query}
          className="app_input"
          onChange={(e) => setquery(e.target.value)}
        />
        <input type="submit" value="Search" className="app_submit" />
      </form>
      <div className="app_recipie">
        {recipes.map(recipe => <Receipe items={recipe} />)}
      </div>

    </div>
  );
}

export default App

