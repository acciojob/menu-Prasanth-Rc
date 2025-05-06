import React, { useState } from 'react';
import '../styles/App.css';
import Menu from './Menu';

const App = () => {
  const [menuItems] = useState([
    { id: 1, name: 'Pancakes', category: 'Breakfast', price: 5.99, image: '/images/pancakes.jpg' },
    { id: 2, name: 'Omelette', category: 'Breakfast', price: 6.49, image: '/images/omelette.jpg' },
    { id: 3, name: 'Burger', category: 'Lunch', price: 8.99, image: '/images/burger.jpg' },
    { id: 4, name: 'Pizza', category: 'Lunch', price: 10.99, image: '/images/pizza.jpg' },
    { id: 5, name: 'Milkshake', category: 'Shakes', price: 4.99, image: '/images/milkshake.jpg' },
    { id: 6, name: 'Smoothie', category: 'Shakes', price: 4.49, image: '/images/smoothie.jpg' },
  ]);

  const [filteredCategory, setFilteredCategory] = useState('');

  const filterItems = (category) => {
    setFilteredCategory(category);
  };

  return (
    <div id="main">
      <div className="category-buttons">
        <button id="filter-btn-1" onClick={() => filterItems('Breakfast')}>Breakfast</button>
        <button id="filter-btn-2" onClick={() => filterItems('Lunch')}>Lunch</button>
        <button id="filter-btn-3" onClick={() => filterItems('Shakes')}>Shakes</button>
      </div>
      <Menu items={menuItems} category={filteredCategory} />
    </div>
  );
};

export default App;
