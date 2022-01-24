import React from 'react';
import Menu from './Menu';

const MenuTabs = ({filterItem, catItems}) => {
    return (
        <>
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    {
                        catItems.map((currElem, index) => {
                            return <button className="btn btn-warning" key={index} onClick={() => filterItem(currElem)}>{currElem}</button>
                        })
                    }
                    {/* <button className="btn btn-warning" onClick={() => setItems(Menu)}>All</button> */}
                </div>
            </div>
        </>
    )
};

export default MenuTabs;
