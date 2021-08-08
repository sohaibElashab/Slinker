import React from 'react'
import MustSubscribe from '../Layouts/MustSubscribe'
import AmazonProduct from '../Layouts/AmazonProduct'
import NavSearch from '../Layouts/NavSearch'
import Sidebar from '../Layouts/Sidebar'
import ControlButton from '../Layouts/ControlButton'
import MetricsDetails from '../Layouts/MetricsDetails'

const Summary = () => {
    return (
    <div className="content">
        <Sidebar/>
        <main>
            <NavSearch/>
            <div className="main__ISC">
                <div className="title__content">
                    <span>Summary</span>
                </div>
                <div className="content__ISC">
                    <div className="content__header__ISC">
                        <MustSubscribe red={false}/>
                        <ControlButton big={true}/>
                    </div>
                        <div className="resultes__ISC">
                            <div className="amazon__products__ISC amazon__products__I">
                                Amazon Products
                                <AmazonProduct show={false}/>
                            </div>
                            <div className="metrics__details__list__sc">
                                <MetricsDetails height={false}/>
                            </div>
                        </div>
                </div>
            </div>
        </main>
    </div>
    )
}

export default Summary
