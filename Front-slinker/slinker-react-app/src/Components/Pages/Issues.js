import React, { useEffect, useState ,useRef } from "react";
import NavSearch from "../Layouts/NavSearch";
import Sidebar from "../Layouts/Sidebar";
import MustSubscribe from "../Layouts/MustSubscribe";
import AmazonProduct from "../Layouts/AmazonProduct";
import ControlButton from "../Layouts/ControlButton";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { PDFExport } from "@progress/kendo-react-pdf";

const Issues = () => {
  const { id } = useParams();
  const similar = useSelector((state) => state.similar.similars);
  const [list, setlist] = useState(undefined);

  const GetSimilar = (product_id) => {
    console.log(product_id);
    const result = similar.filter((simi) => simi.product_id === product_id);
    setlist(result);
  };
  
  const AmazonProductSection = useRef(null)

  const exportAmazonProduct = (event) =>{
      // savePDF(AmazonProductSection.current , {paperSize : 'A4'});
      AmazonProductSection.current.save();
      console.log("pdf");
  }
  return (
    <div className="content">
      <Sidebar />
      <main>
        <NavSearch />
        <div className="main__ISC">
          <div className="title__content">
            <span>Issues</span>
          </div>
          <div className="content__ISC">
            <div className="content__header__ISC">
              <MustSubscribe red={true} />
              <ControlButton big={true} exportAmazonProduct={exportAmazonProduct}/>
            </div>
            <div className="resultes__ISC">
              <div className="amazon__products__ISC ">
                Amazon Products
                <AmazonProduct id={id} show={true} GetSimilar={GetSimilar} />
              </div>
              <div className="amazon__similar__products__Issues">
                Amazon Similar Products
                <div className="table__amazon__similar__products__Issues">
                  {list !== undefined
                    ? list.map((element) => (
                        <div
                          className="amazon__similar__product__Issues"
                          key={element.id}
                        >
                          <img src={element.image} alt="" />
                          <span>{element.name}</span>
                          <button>View</button>
                        </div>
                      ))
                    : "Select a product"}
                </div>
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
              </div>
          </PDFExport>
      </div>
    </div>
  );
};

export default Issues;
