import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { listGroups, listPerson } from './data';
import Wrapper from './Wrapper';

import './people.scss';

const People = ({ setShowMsg }) => {
    return (
        <div className='people'>
            <div className='people__wrapper'>
                <div className='people__search'>
                    <input type='search' placeholder='Search' name='' id='' />
                    <FiSearch className='searchIcon' />
                </div>
                <div className='people__groups box'>
                    <h4>Groups</h4>
                    <Wrapper
                        title='Groups'
                        data={listGroups}
                        setShowMsg={setShowMsg}
                    />
                </div>
                <div className='people__person box'>
                    <h4>Person</h4>
                    <Wrapper
                        title='Person'
                        data={listPerson}
                        setShowMsg={setShowMsg}
                    />
                </div>
            </div>
        </div>
    );
};

export default People;
