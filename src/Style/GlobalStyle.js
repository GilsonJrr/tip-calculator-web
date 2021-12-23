import styled from 'styled-components';

export const BackgroundApp = styled.div`
    background: #C5E4E7;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.div`
    position: absolute;
    top: 136px;
`;

export const BackCalculator = styled.div`
    //web
    width: 920px;
    height: 480px;
    //mobile
    background: #FFFFFF;
    border-radius: 25px;
    display: flex;
`;

export const BackResult = styled.div`
    width: 50%;
    height: 420px;
    background: #00474B;
    border-radius: 15px;
    margin: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
`;

export const DivInput = styled.div`
    display: flex;
    margin: 40px;
    flex-direction: column;
    width: 50%;
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

    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: #FFFFFF;
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
`;

export const TextInput = styled.div`
    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #406566;
    margin-bottom: 4px;
`;

export const TextResult = styled.div`
    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #FFFFFF;
`;

export const TextValue = styled.div`
    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    color: #33C0AF;
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
`;