import React, { useState } from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu';
import Menuitems from './Menuitems';
import MenuTabs from './MenuTabs';

const allCategoryValue = [ ... new Set(Menu.map((currElem) => {
    return currElem.category;
})), "all"];

const Gallery = () => {
    const [items, setItems] = useState(Menu);
    const [catItems, setCatItems] = useState(allCategoryValue);

    const filterItem = (categoryItem) => {
        if(categoryItem === 'all'){
            setItems(Menu)
            return;
        }
        const updatedItems = Menu.filter((currentElement) => {
            return currentElement.category === categoryItem;
        })
        setItems(updatedItems);
    }
  return (
      <>
        <h1 className='mt-5 text-center main-heading'>Order Your Favourite Dish</h1>
        <hr />
        {/* Tabs */}
        <MenuTabs filterItem = {filterItem} catItems = {catItems}/>
        {/* Main items section */}
        <Menuitems items = {items}/>
      </>
  );
};

export default Gallery;
