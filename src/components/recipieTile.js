import React from 'react'

export default function RecipeTile({ items }) {
  return (
    <div className="recipeTile">
      <img src={items.recipe.image} alt={items.recipe.label} />
      <p>{items.recipe.label}</p>
    </div>
  )
}
