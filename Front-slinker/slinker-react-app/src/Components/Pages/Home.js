import React from 'react'

const Home = () => {
    return (
        <>
            <section className="containe__home top__home">
                <div className="layout__home">
                </div>
            </section>
            <section className="containe__upgrade__home">
                <div className="header__home">
                    <section className="topbar__home">
                        <div className="logo__home">
                            <img src="./Assets/Slinker logo.svg" alt="" srcset=""/>
                        </div>
                        <div className="compte__home">
                            <i className="far fa-user"></i>
                            <span>3</span>
                        </div>
                    </section>
                    <section className="search__home">
                        <h1 >Enter Your website</h1>
                        <span>Welcome to Slinker !</span>
                        <div className="searchBar__home">
                            <input type="text" placeholder="Enter your domain to check affiliate’s links"/>
                            <button>Analyze</button>
                        </div>
                    </section>
                </div>
                <section className="search__upgrade__home">
                    <h1>Enter Your website</h1>
                    <span>Welcome to Slinker !</span>
                    <div className="searchBar__home">
                        <textarea cols="30" rows="10" placeholder="Enter your domain to check affiliate’s links"></textarea>
                        <button className="apgrade__button">Analyze</button>
                    </div>
                </section>
                <div className="upgrade__home">
                    <button>Upgrade Plan</button>
                </div>
            </section>
        </>
    )
}

export default Home
