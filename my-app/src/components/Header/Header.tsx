import React from 'react';
import obj from './Header.module.css';
import {NavLink} from "react-router-dom";


function Header() {

    return (
        <div className={obj.header}>
            <span className={obj.home_navbar}><NavLink className={obj.home_link} to={'/'}>Home</NavLink></span>

            <span className={obj.tasks_navbar}>
            <span><NavLink className={obj.link} to={'/first_task'}>First task</NavLink></span>
            <span> <NavLink className={obj.link} to={'/second_task'}>Second task</NavLink></span>
            <span> <NavLink className={obj.link} to={'/third_task'}>Third task</NavLink></span>
            <span> <NavLink className={obj.link} to={'/fourth_task'}>Fourth task</NavLink></span>
            </span>
        </div>

    );
}


export default Header;