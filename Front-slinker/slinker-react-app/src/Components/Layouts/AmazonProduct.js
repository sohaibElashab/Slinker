import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

const AmazonProduct = ({show}) => {
    return (
    <div className="table__amazon__products__ISC">
        <div className="amazon__products__header__ISC">
        <div className="table__filter__ISC">
            <div className="products__status__ISC" className={`products__status__ISC ${show ? '' : 'products__status__width__ISC'}`}>
            <span className="blue__ISC">Status:</span>
            <span className="green__ISC">All</span>
            <span>Unavailable</span>
            <span>404</span>
            </div>
            <div className="products__status__ISC" className={`products__status__ISC ${show ? '' : 'products__status__width__ISC'}`}>
            <span className="blue__ISC">Affilliate Id:</span>
            <select name="" id="">
                <option value="">All</option>
                <option value="">ge2kliam22</option>
                <option value="">ge2kliam22</option>
            </select>
            </div>
            {
                show && <div className="products__status__ISC">
                            <span className="blue__ISC">Actions:</span>
                            <select name="" id="">
                                <option value="">Bulk Actions</option>
                                <option value="">Repaire Product link</option>
                                <option value="">Replace Product link</option>
                                <option value="">Replace Affilate id</option>
                                <option value="">Delete Product</option>
                            </select>
                        </div>
            }
            
        </div>
        <hr />
        <div className="table__header__ISC">
            {
                show && <span></span>
            }
            <span>Image</span>
            <span>Product name</span>
            <span>Product Statu</span>
            <span>Reviews</span>
            <span>Affilliate Id</span>
            {
                show && <span></span>
            }
        </div>
        </div>
        <div className="amazon__products__body__ISC">
        <div className="amazon__product__ISC">
            {
                show && <span><i className="fas fa-chevron-down"></i></span>
            }
            <span>
            <img src="./Assets/product.png" alt="" />
            </span>
            <span className="text1__ISC">
            Nair Hair Remover for Men Hair Remover Body Cream, 13 oz
            </span>
            <span className="red__bg__ISC text2__ISC">UNAVAILABLE</span>
            <span>3.7 (42 reviews)</span>
            <span className="blue__bg__ISC text3__ISC">ge2kliam22</span>
            {
                show && <span className="text4__ISC">View Product Report</span>
            }
        </div>
        <div className="amazon__product__ISC">
            {
                show && <span><i className="fas fa-chevron-down"></i></span>
            }
            <span>
            <img src="./Assets/product.png" alt="" />
            </span>
            <span className="text1__ISC">
            Nair Hair Remover for Men Hair Remover Body Cream, 13 oz
            </span>
            <span className="red__bg__ISC text2__ISC">UNAVAILABLE</span>
            <span>3.7 (42 reviews)</span>
            <span className="blue__bg__ISC text3__ISC">ge2kliam22</span>
            {
                show && <span className="text4__ISC">View Product Report</span>
            }
        </div>
        <div className="amazon__product__ISC">
            {
                show && <span><i className="fas fa-chevron-down"></i></span>
            }
            <span>
            <img src="./Assets/product.png" alt="" />
            </span>
            <span className="text1__ISC">
            Nair Hair Remover for Men Hair Remover Body Cream, 13 oz
            </span>
            <span className="red__bg__ISC text2__ISC">UNAVAILABLE</span>
            <span>3.7 (42 reviews)</span>
            <span className="blue__bg__ISC text3__ISC">ge2kliam22</span>
            {
                show && <span className="text4__ISC">View Product Report</span>
            }
        </div>
        <div className="amazon__product__ISC">
            {
                show && <span><i className="fas fa-chevron-down"></i></span>
            }
            <span>
            <img src="./Assets/product.png" alt="" />
            </span>
            <span className="text1__ISC">
            Nair Hair Remover for Men Hair Remover Body Cream, 13 oz
            </span>
            <span className="red__bg__ISC text2__ISC">UNAVAILABLE</span>
            <span>3.7 (42 reviews)</span>
            <span className="blue__bg__ISC text3__ISC">ge2kliam22</span>
            {
                show && <span className="text4__ISC">View Product Report</span>
            }
        </div>
        <div className="amazon__product__ISC">
            {
                show && <span><i className="fas fa-chevron-down"></i></span>
            }
            <span>
            <img src="./Assets/product.png" alt="" />
            </span>
            <span className="text1__ISC">
            Nair Hair Remover for Men Hair Remover Body Cream, 13 oz
            </span>
            <span className="red__bg__ISC text2__ISC">UNAVAILABLE</span>
            <span>3.7 (42 reviews)</span>
            <span className="blue__bg__ISC text3__ISC">ge2kliam22</span>
            {
                show && <span className="text4__ISC">View Product Report</span>
            }
        </div>
        <div className="amazon__product__ISC">
            {
                show && <span><i className="fas fa-chevron-down"></i></span>
            }
            <span>
            <img src="./Assets/product.png" alt="" />
            </span>
            <span className="text1__ISC">
            Nair Hair Remover for Men Hair Remover Body Cream, 13 oz
            </span>
            <span className="red__bg__ISC text2__ISC">UNAVAILABLE</span>
            <span>3.7 (42 reviews)</span>
            <span className="blue__bg__ISC text3__ISC">ge2kliam22</span>
            {
                show && <span className="text4__ISC">View Product Report</span>
            }
        </div>
        </div>
    </div>
    )
}

export default AmazonProduct
