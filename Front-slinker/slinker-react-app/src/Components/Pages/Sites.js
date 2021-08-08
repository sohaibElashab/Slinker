import React from 'react'
import NavSearch from '../Layouts/NavSearch'
import Sidebar from '../Layouts/Sidebar'
import SiteResultes from '../Layouts/SiteResultes'

const Sites = () => {
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
                    <SiteResultes/>
                    <SiteResultes/>
                    <SiteResultes/>
                    <SiteResultes/>
                    <SiteResultes/>
                    <SiteResultes/>
                </div>
            </div>
        </main>
    </div>
    )
}

export default Sites
