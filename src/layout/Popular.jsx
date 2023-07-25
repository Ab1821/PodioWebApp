import React, { useState } from 'react';
import PopularAPI from './API/PopularAPI';

function Popular(props) {
    const [API, setAPI] = useState(PopularAPI);
    return (
        <>
            <div className="container-fluid mt-5 p-5 popular ">
                <div className="txt">
                    <h2>Popular ways of using Podio</h2>
                    <center><p>Here's an overview of the kinds of workflows and processes people love using Podio for. Starting with the top three</p></center>
                    <div className="row mt-5 pop">
                        {API.map((res) => {
                            // console.log(API);
                            return (
                                <div className="col-4 mt-5">
                                    <div className="card p-3">
                                        <h2>{res.title}</h2>
                                        <span>{res.info}</span>
                                    </div>
                                </div>
                            )
                        })}


                    </div>
                    <div className="container">
                        <img src="img/podio-effect.jpg" alt="podio-effect" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Popular;