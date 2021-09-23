import React from 'react'
import NavSearch from '../Layouts/NavSearch'
import Sidebar from '../Layouts/Sidebar'
import ControlButton from '../Layouts/ControlButton'
import MustSubscribe from '../Layouts/MustSubscribe'
import AmazonProduct from '../Layouts/AmazonProduct'
import MetricsDetails from '../Layouts/MetricsDetails'

const Custom = () => {

    const GetSimilar = (i) => {}
    return (
    <div className="content">
        <Sidebar/>
        <main>
            <NavSearch/>
            <div className="main__ISC">
                <div className="title__content">
                    <span>Custom link checker</span>
                </div>
                <div className="content__ISC">
                    <div className="content__header__ISC">
                        <MustSubscribe red={false}/>
                        <ControlButton big={true}/>
                    </div>
                    <div className="resultes__ISC">
                    <div className="metrics__details__list__sc">
                        <div className="custom__link__sc">
                        Custom Link
                        <div className="form__custom__link__sc">
                            <input type="text" value="eysi.net" />
                            <button>Insert</button>
                        </div>
                        </div>
                        <MetricsDetails id={4} height={true}/>
                    </div>
                    <div className="amazon__products__ISC amazon__products__I none">
                        Amazon Products
                        <AmazonProduct id={3} show={false} GetSimilar={GetSimilar}/>
                    </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    )
}

export default Custom
