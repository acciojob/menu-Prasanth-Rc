import React, { useState } from 'react';
import Menu from './Menu';
import './App.css'; // Make sure this exists

const App = () => {
  const [menuItems] = useState([
    { id: 1, name: 'Pancakes', category: 'Breakfast', price: 5.99 },
    { id: 2, name: 'Omelette', category: 'Breakfast', price: 6.49 },
    { id: 3, name: 'Burger', category: 'Lunch', price: 8.99 },
    { id: 4, name: 'Pizza', category: 'Lunch', price: 10.99 },
    { id: 5, name: 'Milkshake', category: 'Shakes', price: 4.99 },
    { id: 6, name: 'Smoothie', category: 'Shakes', price: 4.49 },
  ]);

  const [filteredCategory, setFilteredCategory] = useState('');

  const filterItems = (category) => {
    setFilteredCategory(category);
  };

  return (
    <div id="main">
      <div className="category-buttons">
        <button id="filter-btn-1" onClick={() => filterItems('Breakfast')}>
          Breakfast
        </button>
        <button id="filter-btn-2" onClick={() => filterItems('Lunch')}>
          Lunch
        </button>
        <button id="filter-btn-3" onClick={() => filterItems('Shakes')}>
          Shakes
        </button>
      </div>
      <Menu items={menuItems} category={filteredCategory} />
    </div>
  );
};

export default App;