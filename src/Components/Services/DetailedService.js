import React from 'react';

const DetailedService = ({last, title, detail}) => {

    return (
        <div className={(last ? 'detailed-services last' : 'detailed-services')}>
            <div className="detailed-title">
                <h5>{title}</h5>
            </div>
            <ul className="detailed-list">
                {detail.map((li) => {
                    return(
                        <li key={li}>{li}</li>
                    )
                })}       
            </ul>
        </div>
    );
};

export default DetailedService;