import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

const ControlButton = ({big}) => {
    return (
        <div className={` ${big ? 'button__control__ISC' : 'button__control__dashboard'}`}>
            {
                big ?  <> 
                            <div className="control__ISC button__control__recherch__ISC">
                                <i className="fas fa-redo-alt"></i>
                                <span>Recheck</span>
                            </div>
                            <div className="control__ISC button__control__download__ISC">
                                <i className="fas fa-download"></i>
                                <span>Download</span>
                            </div>
                        </>
                        :
                        <div className="control__button__dashboard">
                            <div className="control__dashboard button__control__recherch__dashboard">
                                <i className="fas fa-redo-alt"></i>
                                <span>Recheck</span>
                            </div>
                            <div className="control__dashboard button__control__download__dashboard">
                                <i className="fas fa-download"></i>
                                <span>Download</span>
                            </div>
                        </div>
            }
            <div className={` ${big ? 'button__control__upgrade__ISC' : 'button__control__upgrade__dashboard'}`}>
                Improve Managment by upgrading your account
                <button>Upgrade</button>
            </div>
        </div>
    )
}

export default ControlButton
