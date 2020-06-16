import React, {useState} from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";


function Header() {
    let [menu, setMenu] = useState('menu');
    const onNavBtnClickHandler = () => {
        if (menu === 'menu') {
            setMenu('menu menu_active');
        } else {
            setMenu('menu');
        }

    }

    return (
        <div className={'wrapper'}>
            <div className={menu}>
                <i className="material-icons">menu</i>
                <button onClick={onNavBtnClickHandler} className='menu_btn'></button>

                <span className={'menu_list'}>
                    <span className={'pre_junior'}>Pre Junior

                    <div className={'pre_junior_dropdown'}>
                        <div className={'pre_junior_dropdown_content'}>
                        <span><NavLink className={'link'} to={'/first_task'}>First task</NavLink></span>
                        <span> <NavLink className={'link'} to={'/second_task'}>Second task</NavLink></span>
                        <span> <NavLink className={'link'} to={'/third_task'}>Third task</NavLink></span>
                        <span> <NavLink className={'link'} to={'/fourth_task'}>Fourth task</NavLink></span>
                        </div>
                    </div>

                    </span>

                    <span className={'junior'}>Junior</span>
                    <span className={'junior_plus'}>Junior+</span>


                </span>

                {/*<span className={obj.home_navbar}><NavLink className={obj.home_link} to={'/'}>Home</NavLink></span>*/}
            </div>
        </div>
);
}


export default Header;