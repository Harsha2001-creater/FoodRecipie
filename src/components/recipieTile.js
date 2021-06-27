import React from 'react';
import "./RecipieTile.css";

export default function RecipeTile({ items }) {
  return (
    <div className="recipeTile">
      <img className="recipeTile_img" src={items.recipe.image} alt={items.recipe.label} />
      <p className="recipeTile_name">{items.recipe.label}</p>
    </div>
  );
}
