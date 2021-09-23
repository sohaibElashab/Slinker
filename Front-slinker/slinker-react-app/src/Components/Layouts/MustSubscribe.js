import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

const MustSubscribe = ({red}) => {
    return (
        <div className="must__subscribe__ISC">
            <span className="point__ISC none">
                <i className="fas fa-ellipsis-h "></i>
            </span>
            {
                red ? <span className="must__subscribe__title__ISC red__ISC">
                            <i className="fas fa-exclamation-triangle"></i>
                            You must repaire alot of links
                        </span> : 
                        <span className="must__subscribe__title__ISC green__ISC">
                            <i className="fas fa-check"></i>
                            Report Completed
                        </span>
            }
            
            <span className="must__subscribe__text__ISC">
                Please subscribe to Slinker to get access to full features and
                find broken links on your site
            </span>
        </div>
    )
}

export default MustSubscribe
