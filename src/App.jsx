import React, { useEffect, useState } from 'react';

import Sidebar from './components/Sidebar';
import People from './components/People';
import Chat from './components/Chat';
import './app.scss';
import Navbar from './components/Navbar';

const App = () => {
    const [isMobileScreen, setIsMobileScreen] = useState(
        window.innerWidth <= 450
    );
    const [selectedPersonId, setSelectedPersonId] = useState(null);
    const [name, setName] = useState('');
    const [online, setOnline] = useState('');
    const [backgroundImg, setBackgroundImg] = useState('');

    const setShowMsg = (personId, name, online, bg) => {
        setSelectedPersonId(personId);
        setName(name);
        setOnline(online);
        setBackgroundImg(bg);
    };

    const handleResize = () => {
        setIsMobileScreen(window.innerWidth <= 450);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='app'>
            <Navbar />
            <div className='app__wrapper'>
                <div className='app__sidebar'>
                    <Sidebar />
                </div>
                <div
                    className={`app__people ${
                        isMobileScreen && selectedPersonId ? 'hidden' : ''
                    }`}
                >
                    <People setShowMsg={setShowMsg} />
                </div>
                <div
                    className={`app__chat ${
                        isMobileScreen && selectedPersonId ? 'show' : ''
                    }`}
                >
                    <Chat
                        bg={backgroundImg}
                        name={name}
                        online={online}
                        isMobileScreen={isMobileScreen}
                        setSelectedPersonId={setSelectedPersonId}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
