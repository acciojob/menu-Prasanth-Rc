import React from 'react';

const Menu = ({ items, category }) => {
  const filteredItems = category
    ? items.filter(item => item.category === category)
    : items;

  return (
    <div className="menu">
      {filteredItems.map(item => (
        <div key={item.id} className="menu-item">
          <h3>{item.name}</h3>
          <p>Category: {item.category}</p>
          <p>Price: ${item.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;