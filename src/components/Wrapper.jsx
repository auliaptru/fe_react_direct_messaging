/* eslint-disable react/prop-types */
import React from 'react';

import './wrapper.scss';
import { BiCheckDouble } from 'react-icons/bi';

const Wrapper = ({ data, setShowMsg }) => {
    return (
        <div className='wrapper'>
            {data.map((data) => {
                const { id, bg, name, chat, time, status, numMsg } = data;
                return (
                    <div
                        className='wrapper__list'
                        key={id}
                        onClick={() => setShowMsg(id, name, time, bg)}
                    >
                        <div className='desc'>
                            <div className='avatar'>
                                <img src={bg} alt='' />
                            </div>
                            <div className='name'>
                                <h5>{name}</h5>
                                <p>{chat}</p>
                            </div>
                        </div>
                        <div className='status'>
                            <p>{time}</p>
                            <div className='status__icon'>
                                {status && status === 'read' ? (
                                    <BiCheckDouble className='read' />
                                ) : status === 'new' ? (
                                    <div className='newMsg'>{numMsg}</div>
                                ) : status === 'notread' ? (
                                    <BiCheckDouble className='notread' />
                                ) : (
                                    ''
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Wrapper;
