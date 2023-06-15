import React from 'react';

import { BiArrowBack, BiPhone } from 'react-icons/bi';
import {
    BsCameraVideo,
    BsThreeDotsVertical,
    BsMicFill,
    BsCamera,
} from 'react-icons/bs';
import { ImAttachment } from 'react-icons/im';
import { FaRegLaugh } from 'react-icons/fa';

import './chat.scss';

const messages = [
    {
        msg: 'Hey there',
        direction: 'left',
        time: 'Today, 8.30pm',
    },
    {
        msg: 'How are you?',
        direction: 'left',
        time: 'Today, 8.30pm',
    },
    {
        msg: 'Hello!',
        direction: 'right',
        time: 'Today, 8.32pm',
    },
    {
        msg: 'Im very well, how about you?',
        direction: 'right',
        time: 'Today, 8.32pm',
    },
    {
        msg: 'Me too! Can we meet tomorrow',
        direction: 'left',
        time: 'Today, 8.33pm',
    },
    {
        msg: 'Yeah, sure!',
        direction: 'right',
        time: 'Today, 9.33pm',
    },
];

const Chat = ({ bg, name, online, isMobileScreen, setSelectedPersonId }) => {
    return (
        <div className='chat'>
            <div className='chat__wrapper'>
                <div className='chat__nav'>
                    <div className='chat__name'>
                        {isMobileScreen && (
                            <BiArrowBack
                                className='backIcon'
                                onClick={() => setSelectedPersonId(null)}
                            />
                        )}
                        <div className='chat__img'>
                            <img
                                src={
                                    bg
                                        ? bg
                                        : 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
                                }
                                alt='avatar'
                            />
                            <div className='online'></div>
                        </div>
                        <div className='chat__desc'>
                            <h5>{name ? name : 'Jack Winbow'}</h5>
                            <p>
                                Online -{' '}
                                {online ? online : 'timelast seen 9:25pm'}
                            </p>
                        </div>
                    </div>
                    <div className='chat__icons'>
                        <div className='call'>
                            <BiPhone className='chatIcon' />
                        </div>
                        <div className='camera'>
                            <BsCameraVideo className='chatIcon' />
                        </div>
                        <div className='settings'>
                            <BsThreeDotsVertical className='chatIcon' />
                        </div>
                    </div>
                </div>
                <div className='chat__box'>
                    <div className='chat__box-wrapper'>
                        {messages.map((msg, i) => (
                            <div
                                className={`box-wrapper ${
                                    msg.direction === 'left'
                                        ? 'leftSide'
                                        : 'rightSide'
                                }`}
                                key={i}
                            >
                                <div
                                    className={`box ${
                                        msg.direction === 'left'
                                            ? 'left'
                                            : 'right'
                                    }`}
                                >
                                    <p>{msg.msg}</p>
                                </div>
                                <span>{msg.time}</span>
                            </div>
                        ))}
                    </div>

                    <div className='chat__send'>
                        <div className='chat__send-wrapper'>
                            <input
                                type='text'
                                placeholder='Type your message here..'
                            />
                            <div className='voice'>
                                <BsMicFill className='micIcon' />
                            </div>
                            <ImAttachment className='attachmentIcon' />
                            <div className='icons'>
                                <FaRegLaugh className='emojiIcon' />
                                <BsCamera className='cameraIcon' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
