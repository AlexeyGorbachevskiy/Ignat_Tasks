import React, {useState} from 'react';
import obj from './Header.module.css';
import {NavLink} from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

function Header() {
    let [menu, setMenu] = useState(['menu', '']);
    let [icon, setIcon] = useState(true);
    const onNavBtnClickHandler = () => {
        if (menu[0] === 'menu' && menu[1] === '') {
            setIcon(false);
            setMenu([`menu`, `menu_active`]);
        } else {
            setIcon(true);
            setMenu(['menu', '']);
        }

    }


    return (
        <div className={obj.wrapper}>
            <div className={[`${obj[`${menu[0]}`]}`, `${obj[`${menu[1]}`]}`].join(" ")}>
                {icon ?
                    <i onClick={onNavBtnClickHandler} className={`fa fa-bars fa-2x ${obj.menu_btn1}`}
                       aria-hidden="true"/>
                    :
                    <i onClick={onNavBtnClickHandler} className={`fa fa-times fa-2x ${obj.menu_btn2}`}
                       aria-hidden="true"/>
                }


                <span className={obj.menu_list}>
                    <NavLink className={obj.pre_junior} to={'/pre_junior'}>
                        <span className={obj.pre_junior}>Pre Junior
                            <div className={obj.pre_junior_dropdown}>
                                  <div className={obj.pre_junior_dropdown_content}>
                                      <span><NavLink className={obj.link} to={'/first_task'}>First task</NavLink></span>
                                      <span> <NavLink className={obj.link}
                                                      to={'/second_task'}>Second task</NavLink></span>
                                      <span> <NavLink className={obj.link}
                                                      to={'/third_task'}>Third task</NavLink></span>
                                      <span> <NavLink className={obj.link}
                                                      to={'/fourth_task'}>Fourth task</NavLink></span>
                                  </div>
                            </div>
                        </span>
                    </NavLink>

                    <NavLink className={obj.junior} to={'/junior'}>
                    <span className={obj.junior}>Junior
                    <div className={obj.junior_dropdown}>
                                  <div className={obj.junior_dropdown_content}>
                                      <span>
                                          <NavLink className={obj.link} to={'/sixth_task'}>
                                          Sixth task
                                          </NavLink>
                                          <NavLink className={obj.link} to={'/seventh_task'}>
                                          Seventh task
                                          </NavLink>
                                           <NavLink className={obj.link} to={'/eighth_task'}>
                                          Eighth task
                                          </NavLink>
                                          <NavLink className={obj.link} to={'/ninth_task'}>
                                          Ninth task
                                          </NavLink>
                                      </span>
                                  </div>
                            </div>
                    </span>
                    </NavLink>
                    <span className={obj.junior_plus}>Junior+</span>


                </span>
            </div>
        </div>
    );
}


export default Header;