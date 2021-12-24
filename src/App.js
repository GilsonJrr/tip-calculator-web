import React, {useState} from 'react';

import Dolar from './Image/Dolar.png';
import Person from './Image/icon-person.png';
import LogoApp from './Image/Logo.png';

import { BackgroundApp, BackCalculator, Logo, BackResult, DivInput, InputValue, DviButton,
         Button, TextInput, TextResult, TextValue, DivResult, ButtonReset, InputNumber } from './Style/GlobalStyle';

function App() {

  const [selected, setSelected] = useState ('#0D686D');
  const [bill, setBill] = useState ('0');
  const [buttons, setButtons ] = useState ([
    {id: 1, value: '5%', bgColor: '#00474B', selBgColor: '#33C0AF',},
    {id: 2, value: '10%', bgColor: '#00474B', selBgColor: '#33C0AF'},
    {id: 3, value: '15%', bgColor: '#00474B', selBgColor: '#33C0AF'},
    {id: 4, value: '25%', bgColor: '#00474B', selBgColor: '#33C0AF'},
    {id: 5, value: '50%', bgColor: '#00474B', selBgColor: '#33C0AF'},
    {id: 6, value: 'Custom', bgColor: '#EEF4F8', selBgColor: '#EEF4F8'},
  ]);

  return (
    <BackgroundApp>

      <Logo>
        <img src={LogoApp}/>
      </Logo>

      <BackCalculator>

        <DivInput>
          <TextInput>Bill</TextInput>
          <InputValue> 
            <img src={Dolar} style={{paddingLeft: 13}}/>
            <InputNumber value={bill} onChange={()=> setBill(bill)} />
          </InputValue>

          <TextInput style={{marginTop: 57}} >Select Tip %</TextInput>
          
          <DviButton>
          {buttons.map((item) => {
            return(
              <div key={item.id}>
                <Buttons 
                  value={item.value}
                  bgColor={item.bgColor}
                  selBgColor={item.selBgColor}
                />
              </div>
            );
          })}
          </DviButton>
          
          <TextInput style={{marginTop: 42}} >Number of People</TextInput>
          <InputValue> 
            <img src={Person} style={{paddingLeft: 13}}/>
            <InputNumber value={bill} onChange={()=> setBill(bill)} />
          </InputValue>

        </DivInput>
          
          <BackResult>

            <DivResult>    
              <div>
                <TextResult>Tip Amount</TextResult>
                <TextResult style={{fontSize: 14, color: '#689EA2'}}>/ person</TextResult> 
              </div>
              <TextValue>$0.00</TextValue>
            </DivResult>

            <DivResult>    
              <div>
                <TextResult>Total</TextResult>
                <TextResult style={{fontSize: 14, color: '#689EA2'}}>/ person</TextResult> 
              </div>
              <TextValue>$0.00</TextValue>
            </DivResult>

            <ButtonReset style={{background: selected, cursor: 'pointer' }} onMouseOver={ ()=> setSelected('#33C0AF') } onMouseOut={ ()=> setSelected('#0D686D') }>
              Reset
            </ButtonReset>

          </BackResult>

      </BackCalculator>

    </BackgroundApp>
  );
}

export default App;


export function Buttons (props) {
  
  const [selected, setSelected] = useState (props.bgColor)
  const [numbColor, setNumbColor] = useState ('#FFFFFF')

  function MouseOver (){
    setSelected(props.selBgColor);
    setNumbColor('#00474B');
  }

  function MouseOut (){
    setSelected(props.bgColor);
    setNumbColor('#FFFFFF');
  }

  return(
    
      <Button style={{background: selected, color: numbColor, cursor: 'pointer' }} onMouseOver={MouseOver} onMouseOut={MouseOut}>
            {props.value}
      </Button>
    
  );
}