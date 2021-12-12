import React from 'react';
import PageLoader from '../../asset/img/my_cinema_loader.png';

const FallBackLoader = () => (
    <div style={{
        textAlign: 'center',
    }}>

        <img
            src={PageLoader}
            alt={"loader..."}
            style={{
                marginTop: '10%'
            }}
        />

    </div>
)


export default FallBackLoader