import React from 'react'
import { useSelector } from 'react-redux';

const NavSearch = () => {
    const websites = useSelector((state) => state.websites.websites);
    return (
        <div className="navbar__content">
            <div className="search__content">
                <img src="/Assets/content_icones/search.svg" alt="" />
                <input type="text" name="" id="" placeholder="Search" />
            </div>
            <div className="compte__content">
                <img src="https://localhost:3000/Assets/logo Slinker 2.png" className="nonerevers"></img>
                <div>
                    <i className="far fa-user"></i>
                    {websites !== undefined && websites.length > 0 ? (
                        <span>{websites.length}</span>
                    ) : (
                        <></>
                    )} 
                </div>
            </div>
        </div>
    )
}

export default NavSearch
