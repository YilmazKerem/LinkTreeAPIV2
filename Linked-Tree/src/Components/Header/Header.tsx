import React, { Component } from 'react';
import Account from '../../assets/Account.svg';
import { Link } from 'react-router-dom';

export default class Header extends Component
{
    render()
    {
        return (
            <div className='flex justify-end'>
                <Link to="/Account">
                    <img className='rounded-full   bg-orange-200 w-12 h-12' src={Account} alt="" />
                </Link>
            </div>
        );
    }
}
