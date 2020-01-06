import styled from 'styled-components';

export const HeroContainer = styled.div`
    margin-top: 10px;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;  
`;

export const HeroImage = styled.div`
    width: 100%;
    height: 600px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: ${props => `url(${props.image})`};

    @media (max-width: 800px) {
        height: 400px;
    }
`;

export const HeroText = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(2px);
    background-color: rgba(0, 0, 0, 0.50);
`;

export const HeroTitle = styled.h1`
    font-size: 3.5em;
    margin: 0 10px;
    color: #fff;
    text-align: center;
`;

