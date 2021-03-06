import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

const ControlButton = ({big , exportAmazonProduct}) => {
    return (
        <div className={` ${big ? 'button__control__ISC' : 'button__control__dashboard'}`}>
            {
                big ?  <> 
                            <div className="control__ISC button__control__recherch__ISC">
                                <i className="fas fa-redo-alt"></i>
                                <span>Recheck</span>
                            </div>
                            <button className="control__ISC button__control__download__ISC" onClick={exportAmazonProduct}>
                                <i className="fas fa-download"></i>
                                <span>Download</span>
                            </button>
                        </>
                        :
                        <div className="control__button__dashboard">
                            <div className="control__dashboard button__control__recherch__dashboard">
                                <i className="fas fa-redo-alt"></i>
                                <span>Recheck</span>
                            </div>
                            <button className="control__dashboard button__control__download__dashboard"  onClick={exportAmazonProduct}>
                                <i className="fas fa-download"></i>
                                <span>Download</span>
                            </button>
                        </div>
            }
            <div className={` ${big ? 'button__control__upgrade__ISC none' : 'button__control__upgrade__dashboard'}`}>
                Improve Managment by upgrading your account
                <button>Upgrade</button>
            </div>
        </div>
    )
}

export default ControlButton
