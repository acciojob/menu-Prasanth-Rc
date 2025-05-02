import React from 'react';

const Menu = ({ items, category }) => {
  const filteredItems = category
    ? items.filter(item => item.category === category)
    : items;

  return (
    <div className="menu">
      {filteredItems.map(item => (
        <div key={item.id} className="menu-item" data-test-id={`menu-item-${item.category.toLowerCase()}`}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.category}</p>
          <p>${item.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
