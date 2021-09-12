import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

const AmazonProduct = ({ show, id, GetSimilar ,pdf }) => {
  const products = useSelector((state) => state.products.products);
  const [list, setlist] = useState(products);
  const [AFlist, setAFlist] = useState([]);
  useEffect(() => {
    if (products !== undefined) {
      var Affilliate = [];
      var result = [];

      result = products.filter((product) => product.website_id == id);
      result.map((el) => {
        Affilliate.push(el.affiliat_id);
      });
      Affilliate = [...new Set(Affilliate)];
      setlist(result);
      setAFlist(Affilliate);
    }
  }, [products, id]);

  console.log(list);
  console.log(AFlist);

  const testChange = (e) => {
    console.log(e.target.value);
    const result = products.filter((product) => product.website_id == id);
    setlist(result);
    if (e.target.value !== "All") {
      const filtered = result.filter(
        (product) => product.affiliat_id == e.target.value
      );
      setlist(filtered);
    }
  };
  return (
    <div className="table__amazon__products__ISC">
      <div className="amazon__products__header__ISC">
        <div className={`table__filter__ISC ${pdf && "pdf__none"}`}>
          <div
            className="products__status__ISC"
            className={`products__status__ISC ${
              show ? "" : "products__status__width__ISC"
            }`}
          >
            <span className="blue__ISC">Status:</span>
            <span className="green__ISC">All</span>
            <span>Unavailable</span>
            <span>404</span>
          </div>
          <div
            className="products__status__ISC"
            className={`products__status__ISC ${
              show ? "" : "products__status__width__ISC"
            }`}
          >
            <span className="blue__ISC">Affilliate Id:</span>
            <select name="" id="" onChange={testChange}>
              <option value="All">All</option>
              {AFlist !== undefined
                ? AFlist.map((el) => (
                    <option value={el} key={el}>
                      {el}
                    </option>
                  ))
                : ""}
            </select>
          </div>
          {show && (
            <div className="products__status__ISC">
              <span className="blue__ISC">Actions:</span>
              <select name="" id="">
                <option value="">Bulk Actions</option>
                <option value="">Repaire Product link</option>
                <option value="">Replace Product link</option>
                <option value="">Replace Affilate id</option>
                <option value="">Delete Product</option>
              </select>
            </div>
          )}
        </div>
        <hr />
        <div className="table__header__ISC">
          {show && <span></span>}
          <span>Image</span>
          <span>Product name</span>
          <span>Product Statu</span>
          <span>Reviews</span>
          <span>Affilliate Id</span>
          {show && <span></span>}
        </div>
      </div>
      <div className="amazon__products__body__ISC">
        {list !== undefined
          ? list.map((element) => (
              <div
                className="amazon__product__ISC"
                key={element.id}
                onClick={() => GetSimilar(element.id)} 
                style={{ cursor: "pointer" }}
              >
                {show && (
                  <span>
                    <i className="fas fa-chevron-down"></i>
                  </span>
                )}
                <span>
                  <img src={element.image} alt="" />
                </span>
                <span className="text1__ISC">{element.name}</span>
                <span
                  className={
                    element.status == "UNAVAILABLE"
                      ? "red__bg__ISC text2__ISC"
                      : element.status == "AVAILABLE"
                      ? "green__bg__ISC text2__ISC"
                      : "gris__bg__ISC text2__ISC"
                  }
                >
                  {element.status}
                </span>

                {/* <span className={"text2__ISC"}>{element.status}</span> */}
                <span>3.7 ({element.number_reviews} reviews)</span>
                <span className="blue__bg__ISC text3__ISC">
                  {element.affiliat_id}
                </span>
                {show && (
                  <span className="text4__ISC">View Product Report</span>
                )}
              </div>
            ))
          : "loading ...!"}
      </div>
    </div>
  );
};

export default AmazonProduct;
