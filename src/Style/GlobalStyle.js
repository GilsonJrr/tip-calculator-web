import styled from 'styled-components';

export const BackgroundApp = styled.div`
    background: #C5E4E7;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(max-width: 375px){
        height: 100%;
    }
`;

export const Logo = styled.div`
    position: absolute;
    top: 136px;
    @media(max-width: 375px){
        top: 30px;
        position: relative;
    }
`;

export const BackCalculator = styled.div`
    //web
    width: 920px;
    height: 480px;
    background: #FFFFFF;
    border-radius: 25px;
    display: flex;
    //mobile
    @media(max-width: 375px){
        margin-top: 60px;
        width: 100%;
        height: 90%;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const BackResult = styled.div`
    width: 50%;
    background: #00474B;
    border-radius: 15px;
    margin: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(max-width: 375px){
        width: 88%;
        height: 250px;
    }
`;

export const DivResult = styled.div`
    display: flex; 
    flex-direction: row;
    width: 307px;
    justify-content: space-between;
    height: 71px; 
    align-items: center; 
    margin-top: 26px; 
    margin-bottom: 26px;
    @media(max-width: 375px){
        margin-top: 5px;
        margin-bottom: 0px;
        width: 85%;
    }
`;

export const DivInput = styled.div`
    display: flex;
    margin: 40px;
    flex-direction: column;
    width: 50%;
    @media(max-width: 375px){
        width: 100%;
        margin: 20px;
    }
`;

export const InputValue = styled.div`
    display: flex;
    width: 376px;
    height: 45px;
    background: #EEF4F8;
    border-radius: 5px;
    align-items: center;
    justify-content: space-between;
    //padding-left: 13px;
    padding-right: 13px;
    @media(max-width: 375px){
        width: 85%;
        align-self: center;
        margin-bottom: -30px;
    }
`;

export const Button = styled.button`
    border: none;
    outline: none;
    width: 117px;
    height: 48px;
    background: #00474B;
    border-radius: 5px;
    margin-top: 13px;
    margin-right: 13px;
    align-items: center;
    justify-content: center;

    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: #FFFFFF;

    @media(max-width: 375px){
        align-self: center;
        width: 152px;
        margin-right: 5px;
        margin-left: 5px;
    }
`;

export const DviButton = styled.div`
    display: flex;
    flex-wrap: wrap; 
    width: 100%;
    @media(max-width: 375px){
        align-self: center;
        width: 90%;
    }
`;

export const ButtonReset = styled.button`
    border: none;
    outline: none;
    width: 307px;
    height: 46px;
    background: #0D686D;
    border-radius: 5px;
    margin-top: 100px;

    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #00474B;
    @media(max-width: 375px){
        margin-top: 30px;
        width: 85%;
    }
`;

export const TextInput = styled.div`
    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #406566;
    margin-bottom: 4px;
    @media(max-width: 375px){
        padding-left: 25px;
    }
`;

export const TextAlert = styled.div`
    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #D89385;
    @media(max-width: 375px){
        font-size: 12px;
        padding-right: 25px;
    }
`;

export const DivAlert = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    width: 100%;
`;

export const TextResult = styled.div`
    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #FFFFFF;
    @media(max-width: 375px){
        font-size: 14px;
    }
`;

export const TextValue = styled.div`
    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    color: #33C0AF;
    @media(max-width: 375px){
        font-size: 32px;
    }
`;

export const InputNumber = styled.input`
    border: none;
    outline: none;
    display: flex;
    background: transparent; 
    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    text-align: right;
    color: #A8BBBC;
    @media(max-width: 375px){
        text-align: right;
        font-size: 23px;
    }
`;

export const InputCustom = styled.input`
    border: none;
    outline: none;
    display: flex;
    background: transparent; 
    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    text-align: center;
    color: #00474B;
    @media(max-width: 375px){
        text-align: center;
        font-size: 23px;
        width: 100%;
        align-self: center;
    }
`;