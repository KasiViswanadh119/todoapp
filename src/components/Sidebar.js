import React from "react";
import '../App.css';
import logo from '../assets/task.png';
import { SidebarData } from "./SidebarData";

const SideBar = () => {
    return (
        <div className='Page'>
            <div className='Sidepage'>
                <div className='logo'>
                    <img src={logo} alt='logo' className='shape' />
                    <h1 className='text'>Task boards</h1>
                </div>
                <div className='projects'>
                    <ul className="SidebarList">
                        {SidebarData.map((val, key) => (
                            <li
                                key={key}
                                className={`row ${window.location.pathname === val.link ? "active" : ""}`}
                                onClick={() => {
                                    window.location.pathname = val.link;
                                }}
                            >
                                <div id="title">{val.title}</div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <button className='projectbutton'>+ Add new Project</button>
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default SideBar;
