import React from 'react'
import Loader from 'react-loaders';

import styled from 'styled-components';

const LoaderCase = styled.div`
    width: 100%;
    font-size: 4em;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding: 5rem;
`;

let StyledLoader = () => (
    <LoaderCase>
        <Loader type="ball-pulse-rise" />
    </LoaderCase>
); 



export default StyledLoader;
