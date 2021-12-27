import styled from 'styled-components';

export const BackgroundApp = styled.div`
    background: #C5E4E7;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(max-width: 600px){
        height: 100%;
    }
`;

export const Logo = styled.div`
    margin-top: 12%;
    height: 8%;
    padding-bottom: 2%;
    @media(max-width: 600px){
        position: relative;
        margin-top: 15%;
    }
`;

export const BackCalculator = styled.div`
    //web
    max-width: 920px;
    min-width: 920px;
    height: 60%;
    max-height: 480px;
    min-height: 480px;
    background: #FFFFFF;
    border-radius: 25px;
    display: flex;
    margin-bottom: 20%;
    justify-content: space-evenly;
    //mobile
    @media(max-width: 600px){
        margin-top: 30px;
        max-width: 100%;
        min-width: 100%;
        width: 100%;
        height: 90%;
        max-height: 90%;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 0px;
    }
`;

export const BackResult = styled.div`
    width: 49%;
    margin: 30px;
    background: #00474B;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    @media(max-width: 600px){
        width: 88%;
        height: 250px;
        margin: 0px;
    }
`;

export const DivInput = styled.div`
    width: 49%;
    margin: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media(max-width: 600px){
        width: 100%;
        height: 50%;
        padding-top: 0px;
        padding-bottom: 30px;
        padding-left: 0px;
        margin: 0px;
    }
`;

export const DivResult = styled.div`
    display: flex; 
    flex-direction: row;
    width: 307px;
    justify-content: space-between;
    height: 71px; 
    align-items: center;
    //margin-top: 26px; 
    //margin-bottom: 26px;
    @media(max-width: 600px){
        width: 85%;
    }
`;

export const DviSections = styled.div`
    display: flex;
    flex-direction: column;
    @media(max-width: 600px){
        margin-top: 25px;
        margin-bottom: 1px;
    }
`;

export const InputValue = styled.div`
    display: flex;
    width: 100%;
    height: 45px;
    background: #EEF4F8;
    border-radius: 5px;
    
    align-items: center;
    justify-content: center;
    align-content: center;
    padding-right: 1px;
    padding-left: 1px;
    @media(max-width: 600px){
        width: 86%;
        align-self: center;
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
    width: 90%;
    color: ${props => (props.value > 0 ? `#00474B` : `#A8BBBC`)};
    @media(max-width: 600px){
        //text-align: right;
        font-size: 23px;
    }
`;

export const Button = styled.button`
    border: none;
    outline: none;
    width: 114px;
    height: 48px;
    background: #00474B;
    border-radius: 5px;
    margin: 8px;
    align-items: center;
    justify-content: center;
    align-self: center;

    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: #FFFFFF ;
    text-align: center;

    @media(max-width: 600px){
        width: 155px;
        margin-right: 5px;
        margin-left: 5px;
    }
`;

export const DviButton = styled.div`
    display: flex;
    flex-wrap: wrap; 
    width: 100%;
    justify-content: flex-start;
    @media(max-width: 600px){
        width: 100%;
        justify-content: center;
    }
`;

export const ButtonReset = styled.button`
    border: none;
    outline: none;
    width: 307px;
    height: 46px;
    background: ${props => (props.reset == false ? '#0D686D' : '#33C0AF')};
    border-radius: 5px;
    
    //margin-top: 100px;

    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #00474B;
    @media(max-width: 600px){
        width: 85%;
        margin-bottom: 15px;
    }
`;

export const TextInput = styled.div`
    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #406566;
    margin-bottom: 10px;
    //margin-bottom: 4px;
    @media(max-width: 600px){
        padding-left: 25px;
    }
`;

export const TextAlert = styled.div`
    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #D89385;
    @media(max-width: 600px){
        font-size: 12px;
        padding-right: 25px;
    }
`;

export const DivAlert = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    width: 375px;
`;

export const TextResult = styled.div`
    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #FFFFFF;
    @media(max-width: 600px){
        font-size: 14px;
    }
`;

export const TextValue = styled.div`
    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    color: #33C0AF;
    @media(max-width: 600px){
        font-size: 32px;
    }
`;

export const InputCustom = styled.input`
    border: none;
    outline: none;
    width: 100px;
    background: transparent; 
    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    font-size: 23px;
    color: #00474B;
    @media(max-width: 600px){
        font-size: 23px;
        width: 100px;
    }
`;