import React from 'react';

const CoronaStatus = ({ coronaData }) => {
    return (
        <div>
            {
                coronaData.map((item) => {
                    return (
                        <div key={item.CountryCode} className="corona-container">
                            <div className="country-box">
                                <h1 className="title-area">Country <span>{item.Country}</span></h1>
                            </div>
                            <div className="box-container">
                                <div className="box-row">
                                    <div className="title-area">
                                        <h2>Today's Count</h2>
                                    </div>
                                    <div className="box">
                                        <div className="content">
                                            <div className="title-area">Newly Confirmed</div>
                                            <div className="count-area">{item.NewConfirmed.toLocaleString()}</div>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <div className="content">
                                            <div className="title-area">New Death(s)</div>
                                            <div className="count-area">{item.NewDeaths.toLocaleString()}</div>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <div className="content">
                                            <div className="title-area">New Recoverd</div>
                                            <div className="count-area">{item.NewRecovered.toLocaleString()}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="box-row">
                                    <div className="title-area">
                                        <h2>All over in {item.Country}</h2>
                                    </div>
                                    <div className="box">
                                        <div className="content">
                                            <div className="title-area">Total Confirmed</div>
                                            <div className="count-area">{item.TotalConfirmed.toLocaleString()}</div>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <div className="content">
                                            <div className="title-area">Total Deaths</div>
                                            <div className="count-area">{item.TotalDeaths.toLocaleString()}</div>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <div className="content">
                                            <div className="title-area">Total Recovered</div>
                                            <div className="count-area">{item.TotalRecovered.toLocaleString()}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="footer-text">
                                    <span>Total Cases still pending in {item.Country}</span>
                                    <span className="still-pending-count">{parseInt(item.TotalConfirmed - item.TotalDeaths - item.TotalRecovered).toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    )
                })

            }
        </div>
    )
}

export default CoronaStatus;