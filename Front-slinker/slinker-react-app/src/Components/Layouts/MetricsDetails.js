import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'

const MetricsDetails = ({id , height , pdf}) => {
    const pages = useSelector((state) => state.pages.pages);
    const websites = useSelector((state) => state.websites.websites);
    const products = useSelector((state) => state.products.products);
    var result = []
    var crawl_time = null
    var count_links = null
    var count_pages = null
    if(pages !== undefined){
        result = pages.filter(page => page.website_id == id);
        count_pages = result.length;
    } 
    if(websites !== undefined){
        crawl_time = websites.filter(website => website.id == id);
    } 
    if(products !== undefined){
        count_links = products.filter(product => product.website_id == id);
    } 
    return (
        <>
            <div className={`page-break metrics__details__sc ${height && 'metrics__height__details__sc'}`}>
                <div className="mds__sc">
                    <span>Site Metrics</span>
                    <div>
                        <div className={`md__sc ${pdf && "pdf__border"}`}>
                            <span className={`point__ISC ${pdf && "pdf__none"}`}>
                                <i className="fas fa-ellipsis-h"></i>
                            </span>
                            <div>
                                <i className={`md__time__sc far fa-copy ${pdf && "pdf__none"}`} ></i>
                                <span className="md__number__sc">{count_pages !== null && count_pages}</span>
                                <span className="spanDetails">Pages Checked</span>
                            </div>
                        </div>
                        <div className={`md__sc ${pdf && "pdf__border"}`}>
                            <span className={`point__ISC ${pdf && "pdf__none"}`}>
                                <i className="fas fa-ellipsis-h"></i>
                            </span>
                            <div>
                                <i className={`md__Date__sc fas fa-file-signature ${pdf && "pdf__none"}`}  ></i>
                                <span className="md__number__sc">{count_links !== null && count_links.length}</span>
                                <span className="spanDetails">Links Processed</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mds__sc">
                    <span>Crawl Details</span>
                    <div>
                        <div className={`md__sc ${pdf && "pdf__border"}`}>
                            <span className={`point__ISC ${pdf && "pdf__none"}`}>
                                <i className="fas fa-ellipsis-h"></i>
                            </span>
                            <div>
                                <i className={`md__Processed__sc far fa-calendar-alt ${pdf && "pdf__none"}`} ></i>
                                <span className="md__number__sc">03/20</span>
                                <span className="spanDetails">Crawling Date Started</span>
                            </div>
                        </div>
                        <div className={`md__sc ${pdf && "pdf__border"}`}>
                            <span className={`point__ISC ${pdf && "pdf__none"}`}>
                                <i className="fas fa-ellipsis-h"></i>
                            </span>
                            <div>
                                <i className={`md__Pages__sc fas fa-history ${pdf && "pdf__none"}`} ></i>
                                <span className="md__number__sc">{crawl_time !== null && crawl_time[0].crawl_time}</span>
                                <span className="spanDetails">Time Elapsed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`list__sc ${height && 'list__height__sc'}`}>
                Page List
                <div className="page__lists__sc">

                {
                    result !== [] ? result.map((element) => (
                        <div key={element.id}>
                            <div className="page__list__sc">
                                <span>{element.page_url}</span>
                                <span><i className="green__ISC fas fa-circle"></i>Ready</span>
                            </div>
                            <hr/>
                        </div>
                        )
                    )
                    :"loading ...!"
                }
                </div>
            </div>
        </>
    )
}

export default MetricsDetails
