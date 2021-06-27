import React from 'react';
import "./recipieTile.css";
import { Link } from 'react-router-dom'

export default function RecipeTile({ items }) {
  return (
    <div className="recipeTile">
      <img className="recipeTile_img" src={items.recipe.image} alt={items.recipe.label} />
      <p className="recipeTile_name"><a href={items.recipe.url}>{items.recipe.label}</a></p>

    </div>
  );
}
