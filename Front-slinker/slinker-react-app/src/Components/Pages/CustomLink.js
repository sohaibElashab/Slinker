import React from 'react'
import NavSearch from '../Layouts/NavSearch'
import Sidebar from '../Layouts/Sidebar'

const CustomLink = () => {
    return (
    <div className="content">
        <Sidebar/>
        <main>
            <NavSearch/>
            <div className="main__CL">
                <div className="custom__link__cl">
                    Custom Link Checker
                    <div className="form__custom__link__cl">
                        <input type="text" value="eysi.net"/>
                        <button>Insert</button>
                    </div>
                </div>
            </div>
        </main>
    </div>
    )
}

export default CustomLink
