import React, { useRef } from 'react'
import MustSubscribe from '../Layouts/MustSubscribe'
import AmazonProduct from '../Layouts/AmazonProduct'
import NavSearch from '../Layouts/NavSearch'
import Sidebar from '../Layouts/Sidebar'
import ControlButton from '../Layouts/ControlButton'
import MetricsDetails from '../Layouts/MetricsDetails'
import { useParams } from 'react-router-dom'
import { PDFExport } from "@progress/kendo-react-pdf";


const Summary = () => {

    const AmazonProductSection = useRef(null)

    const exportAmazonProduct = (event) =>{
        // savePDF(AmazonProductSection.current , {paperSize : 'A4'});
        AmazonProductSection.current.save();
        console.log("pdf");
    }
    
    const {id} = useParams(); 
    const GetSimilar = (i) => {}
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
                        <ControlButton big={true} exportAmazonProduct={exportAmazonProduct}/>
                    </div>
                        <div className="resultes__ISC">
                            <div className="amazon__products__ISC amazon__products__I">
                                Amazon Products
                                <AmazonProduct id={id} show={false} GetSimilar={GetSimilar}/>
                            </div>
                            <div className="metrics__details__list__sc none">
                                <MetricsDetails id={id} height={false}/>
                            </div>
                        </div>
                </div>
            </div>
        </main>
        <div className="pdf__summary">
            <PDFExport forcePageBreak=".page-break"  ref={AmazonProductSection} paperSize="A4">
                <div className="amazon__products__ISC amazon__products__I amazon__products__pdf__summary">
                    Amazon Products
                    <AmazonProduct id={id} pdf={true} show={false} GetSimilar={GetSimilar}/>
                    <MetricsDetails id={id} pdf={true} height={false}/>
                </div>
            </PDFExport>
        </div>
    </div>
    )
}

export default Summary
