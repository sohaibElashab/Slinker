import React from 'react'
import { useSelector } from 'react-redux'
import NavSearch from '../Layouts/NavSearch'
import Sidebar from '../Layouts/Sidebar'
import SiteResultes from '../Layouts/SiteResultes'

const Sites = () => {
    const websites = useSelector((state) => state.websites.websites);
    return (
    <div className="content">
        <Sidebar/>
        <main>
            <NavSearch/>
            <div className="main__sites">
                <div className="title__content">
                    <span>Sites</span>
                    <button>Add site +</button>
                </div>
                <div className="sites__sites">
                    {
                        websites !== undefined ? 
                            websites.map((el) => (
                                <SiteResultes id={el.id} name={el.name} logo={el.image}/>
                            )) 
                        : ""
                    }
                </div>
            </div>
        </main>
    </div>
    )
}

export default Sites
