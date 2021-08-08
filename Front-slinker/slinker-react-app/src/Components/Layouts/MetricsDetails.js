import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

const MetricsDetails = ({height}) => {
    return (
        <>
            <div className={`metrics__details__sc ${height && 'metrics__height__details__sc'}`}>
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
            <div className={`list__sc ${height && 'list__height__sc'}`}>
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
        </>
    )
}

export default MetricsDetails
