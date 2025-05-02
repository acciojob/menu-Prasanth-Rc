import React, { useState } from 'react';
import '../styles/App.css';
import Menu from './Menu';
import data from './data'; // You can define a separate file or inline data

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [category, setCategory] = useState('All');

  const filterItems = (cat) => {
    setCategory(cat);
    if (cat === 'All') {
      setMenuItems(data);
    } else {
      setMenuItems(data.filter(item => item.category === cat));
    }
  };

  return (
    <div id="main">
      <h1>Menu</h1>
      <div className="buttons">
        <button id="filter-btn-1" onClick={() => filterItems('Breakfast')}>Breakfast</button>
        <button id="filter-btn-2" onClick={() => filterItems('Lunch')}>Lunch</button>
        <button id="filter-btn-3" onClick={() => filterItems('Shakes')}>Shakes</button>
      </div>
      <Menu items={menuItems} />
    </div>
  );
}

export default App;
