import React, {useState} from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

function Header() {
    let [menu, setMenu] = useState('menu');
    let [icon,setIcon]=useState(true);
    const onNavBtnClickHandler = () => {
        if (menu === 'menu') {
            setIcon(false);
            setMenu('menu menu_active');
        } else {
            setIcon(true);
            setMenu('menu');
        }

    }


    return (
        <div className={'wrapper'}>
            <div className={menu}>
                {icon ?
                    <i onClick={onNavBtnClickHandler} className="fa fa-bars fa-2x menu_btn1" aria-hidden="true"/>
                :
                    <i onClick={onNavBtnClickHandler} className="fa fa-times fa-2x menu_btn2" aria-hidden="true"/>
                }


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
            </div>
        </div>
);
}


export default Header;