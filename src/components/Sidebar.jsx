import React, { useEffect, useState } from 'react';
import {
    AiFillBell,
    AiFillHome,
    AiFillMessage,
    AiFillSetting,
    AiOutlineBell,
    AiOutlineHome,
    AiOutlineMessage,
    AiOutlineSetting,
} from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';

import './sidebar.scss';

const filledIcons = [AiFillHome, AiFillMessage, AiFillBell, AiFillSetting];
const outlineIcons = [
    AiOutlineHome,
    AiOutlineMessage,
    AiOutlineBell,
    AiOutlineSetting,
];

const Sidebar = () => {
    const [selectedIcon, setSelectedIcon] = useState(outlineIcons);
    const [activeIcon, setActiveIcon] = useState(1);

    const handleIconClick = (idx) => {
        setActiveIcon(idx);
        const changedIcons = outlineIcons.map((icon, i) => {
            if (i === idx) {
                return filledIcons[i];
            }
            return icon;
        });

        setSelectedIcon(changedIcons);
    };

    return (
        <>
            <div className='sidebar'>
                <div className='sidebar__wrapper'>
                    <div className='sidebar__img'>
                        <img
                            src='https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
                            alt='avatar'
                        />
                        <div className='online'></div>
                    </div>
                    <div className='sidebar__menu'>
                        <div className='sidebar__menu-wrapper'>
                            {selectedIcon.map((icon, i) => {
                                const Icon = icon;
                                return (
                                    <div
                                        key={i}
                                        className={`sidebar__icon ${
                                            i === activeIcon ? 'active' : ''
                                        }`}
                                        onClick={() => handleIconClick(i)}
                                    >
                                        {<Icon />}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className='sidebar__exit'>
                        <BiLogOut />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
