import React, { useState } from 'react';
import FeatureAPI from './API/FeaturesAPI';

function Features(props) {
    const [API, setAPI] = useState(FeatureAPI);
    return (
        <>
            <div className="container-fluid text-center mt-5 feature">
                <span>Features</span>
                <h2>The components you need, together on one tool</h2>
                <div className="row">
                    {API.map((res) => {
                        console.log(res);
                        return (
                            <div className="col-3 d-flex align-items-center mt-3 featuretitle">
                                <img src={res.image} alt="" />
                                <h5>{res.title}</h5>


                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    );
}

export default Features;