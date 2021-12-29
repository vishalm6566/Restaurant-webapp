import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuApi"
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const uniqueList = [
    ...new Set(
        Menu.map((curElem) => {
            return curElem.category;
        })
    ),
    "All",
];

console.log(uniqueList);


const Restaurant = () => {

    const [menuData, setMenuData] = useState(Menu)
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu);
            return;
        }

        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });

        setMenuData(updatedList);
    };

    return (
        <div id='container1'>
            <h1 id="title1">Happy Meal</h1>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </div>
    )
}

export default Restaurant
