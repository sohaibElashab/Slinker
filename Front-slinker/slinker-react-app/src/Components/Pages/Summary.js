import React from 'react'
import NavSearch from '../Layouts/NavSearch'
import Sidebar from '../Layouts/Sidebar'

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
                        <div className="must__subscribe__ISC">
                            <span className="point__ISC">
                                <i className="fas fa-ellipsis-h"></i>
                            </span>
                            <span className="must__subscribe__title__ISC green__ISC">
                                <i className="fas fa-check"></i>
                                Report Completed
                            </span>
                            <span className="must__subscribe__text__ISC">
                                Please subscribe to Slinker to get access to full features and find broken links on your site
                            </span>
                        </div>
                        <div className="button__control__ISC">
                            <div className="control__ISC button__control__recherch__ISC">
                                <i className="fas fa-redo-alt"></i>
                                <span>Recheck</span>
                            </div>
                            <div className="control__ISC button__control__download__ISC">
                                <i className="fas fa-download"></i>
                                <span>Download</span>
                            </div>
                            <div className="button__control__upgrade__ISC">
                                Improve Managment by upgrading your account
                                <button>Upgrade</button>
                            </div>
                        </div>
                    </div>
                        <div className="resultes__ISC">
                            <div className="amazon__products__ISC amazon__products__I">
                                Amazon Products
                                <div className="table__amazon__products__ISC">
                                    <div className="amazon__products__header__ISC">
                                        <div className="table__filter__ISC">
                                            <div className="products__status__ISC">
                                                <span className="blue__ISC">Status:</span>
                                                <span className="green__ISC">All</span>
                                                <span>Available</span>
                                                <span>Unavailable</span>
                                                <span>404</span>
                                            </div>
                                            <div className="products__status__ISC">
                                                <span className="blue__ISC">Affilliate Id:</span>
                                                <select name="" id="">
                                                    <option value="">All</option>
                                                    <option value="">ge2kliam22</option>
                                                    <option value="">ge2kliam22</option>
                                                </select>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="table__header__ISC">
                                            <span>Image</span>
                                            <span>Product name</span>
                                            <span>Product Statu</span>
                                            <span>Reviews</span>
                                            <span>Affilliate Id</span>
                                        </div>
                                    </div>
                                    <div className="amazon__products__body__ISC">
                                        <div className="amazon__product__ISC">
                                            <span>
                                                <img src="./Assets/product.png" alt=""/>
                                            </span>
                                            <span className="text1__ISC">Nair Hair Remover for Men Hair Remover Body Cream, 13 oz</span>
                                            <span  className="red__bg__ISC text2__ISC">UNAVAILABLE</span>
                                            <span>3.7 (42 reviews)</span>
                                            <span  className="blue__bg__ISC text3__ISC">ge2kliam22</span>
                                        </div>
                                        <div className="amazon__product__ISC">
                                            <span>
                                                <img src="./Assets/product.png" alt=""/>
                                            </span>
                                            <span className="text1__ISC">Nair Hair Remover for Men Hair Remover Body Cream, 13 oz</span>
                                            <span  className="green__bg__ISC text2__ISC">AVAILABLE</span>
                                            <span>3.7 (42 reviews)</span>
                                            <span  className="blue__bg__ISC text3__ISC">ge2kliam22</span>
                                        </div>
                                        <div className="amazon__product__ISC">
                                            <span>
                                                <img src="./Assets/product.png" alt=""/>
                                            </span>
                                            <span className="text1__ISC">Nair Hair Remover for Men Hair Remover Body Cream, 13 oz</span>
                                            <span  className="gris__bg__ISC text2__ISC">page 404</span>
                                            <span>3.7 (42 reviews)</span>
                                            <span  className="blue__bg__ISC text3__ISC">ge2kliam22</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="metrics__details__list__sc">
                                <div className="metrics__details__sc">
                                    <div className="mds__sc">
                                        <span>Site Metrics</span>
                                        <div>
                                            <div className="md__sc">
                                                <span className="point__ISC">
                                                    <i className="fas fa-ellipsis-h"></i>
                                                </span>
                                                <div>
                                                    <i className="md__time__sc far fa-copy"></i>
                                                    <span className="md__number__sc">110</span>
                                                    <span>Pages Checked</span>
                                                </div>
                                            </div>
                                            <div className="md__sc">
                                                <span className="point__ISC">
                                                    <i className="fas fa-ellipsis-h"></i>
                                                </span>
                                                <div>
                                                    <i className="md__Date__sc fas fa-file-signature"></i>
                                                    <span className="md__number__sc">220</span>
                                                    <span>Links Processed</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mds__sc">
                                        <span>Crawl Details</span>
                                        <div>
                                            <div className="md__sc">
                                                <span className="point__ISC">
                                                    <i className="fas fa-ellipsis-h"></i>
                                                </span>
                                                <div>
                                                    <i className="md__Processed__sc far fa-calendar-alt"></i>
                                                    <span className="md__number__sc">03/20</span>
                                                    <span>Crawling Date Started</span>
                                                </div>
                                            </div>
                                            <div className="md__sc">
                                                <span className="point__ISC">
                                                    <i className="fas fa-ellipsis-h"></i>
                                                </span>
                                                <div>
                                                    <i className="md__Pages__sc fas fa-history"></i>
                                                    <span className="md__number__sc">3 min</span>
                                                    <span>Time Elapsed</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list__sc">
                                    Page List
                                    <div className="page__lists__sc">
                                        <div className="page__list__sc">
                                            <span>https://eysi.net</span>
                                            <span><i className="green__ISC fas fa-circle"></i>Ready</span>
                                        </div>
                                        <hr/>
                                        <div className="page__list__sc">
                                            <span>https://eysi.net</span>
                                            <span><i className="green__ISC fas fa-circle"></i>Ready</span>
                                        </div>
                                        <hr/>
                                        <div className="page__list__sc">
                                            <span>https://eysi.net</span>
                                            <span><i className="green__ISC fas fa-circle"></i>Ready</span>
                                        </div>
                                        <hr/>
                                        <div className="page__list__sc">
                                            <span>https://eysi.net</span>
                                            <span><i className="green__ISC fas fa-circle"></i>Ready</span>
                                        </div>
                                        <hr/>
                                        <div className="page__list__sc">
                                            <span>https://eysi.net</span>
                                            <span><i className="green__ISC fas fa-circle"></i>Ready</span>
                                        </div>
                                        <hr/>
                                        <div className="page__list__sc">
                                            <span>https://eysi.net</span>
                                            <span><i className="green__ISC fas fa-circle"></i>Ready</span>
                                        </div>
                                        <hr/>
                                        <div className="page__list__sc">
                                            <span>https://eysi.net</span>
                                            <span><i className="green__ISC fas fa-circle"></i>Ready</span>
                                        </div>
                                        <hr/>
                                        <div className="page__list__sc">
                                            <span>https://eysi.net</span>
                                            <span><i className="green__ISC fas fa-circle"></i>Ready</span>
                                        </div>
                                        <hr/>
                                        <div className="page__list__sc">
                                            <span>https://eysi.net</span>
                                            <span><i className="green__ISC fas fa-circle"></i>Ready</span>
                                        </div>
                                        <hr/>
                                        <div className="page__list__sc">
                                            <span>https://eysi.net</span>
                                            <span><i className="green__ISC fas fa-circle"></i>Ready</span>
                                        </div>
                                        <hr/>
                                        <div className="page__list__sc">
                                            <span>https://eysi.net</span>
                                            <span><i className="green__ISC fas fa-circle"></i>Ready</span>
                                        </div>
                                        <hr/>
                                        <div className="page__list__sc">
                                            <span>https://eysi.net</span>
                                            <span><i className="green__ISC fas fa-circle"></i>Ready</span>
                                        </div>
                                        <hr/>
                                        <div className="page__list__sc">
                                            <span>https://eysi.net</span>
                                            <span><i className="green__ISC fas fa-circle"></i>Ready</span>
                                        </div>
                                        <hr/>
                                        <div className="page__list__sc">
                                            <span>https://eysi.net</span>
                                            <span><i className="green__ISC fas fa-circle"></i>Ready</span>
                                        </div>
                                        <hr/>
                                        <div className="page__list__sc">
                                            <span>https://eysi.net</span>
                                            <span><i className="green__ISC fas fa-circle"></i>Ready</span>
                                        </div>
                                        <hr/>
                                        <div className="page__list__sc">
                                            <span>https://eysi.net</span>
                                            <span><i className="green__ISC fas fa-circle"></i>Ready</span>
                                        </div>
                                        <hr/>
                                        <div className="page__list__sc">
                                            <span>https://eysi.net</span>
                                            <span><i className="green__ISC fas fa-circle"></i>Ready</span>
                                        </div>
                                        <hr/>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </main>
    </div>
    )
}

export default Summary
