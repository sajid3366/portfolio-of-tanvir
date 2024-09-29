import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div >
            <h1>Opsss sorry! Nothing here</h1>
            <Link to='/' className='btn btn-primary'>Go Home</Link>
        </div>
    );
};

export default Error;