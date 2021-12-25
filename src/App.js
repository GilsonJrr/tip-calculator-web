import React, {useState, useEffect} from 'react';

import Dolar from './Image/Dolar.png';
import Person from './Image/icon-person.png';
import LogoApp from './Image/Logo.png';

import { BackgroundApp, BackCalculator, Logo, BackResult, DivInput, InputValue, DviButton, DivAlert,
         Button, TextInput, TextResult, TextValue, DivResult, ButtonReset, InputNumber, TextAlert } from './Style/GlobalStyle';

function App() {

  const [selected, setSelected] = useState ('#0D686D');
  const [pressed, setPressed] = useState (0)
  const [alert, setAlert] = useState (false)

  const [bill, setBill] = useState (0);
  const [people, setPeople] = useState (0);

  const [tipAmount, setTipAmount] = useState (0);
  const [total, setTotal] = useState (0);

  const [buttons, setButtons ] = useState ([
    {id: 1, value: 5 , bgColor: '#00474B', selBgColor: '#33C0AF',},
    {id: 2, value: 10 , bgColor: '#00474B', selBgColor: '#33C0AF'},
    {id: 3, value: 15 , bgColor: '#00474B', selBgColor: '#33C0AF'},
    {id: 4, value: 25 , bgColor: '#00474B', selBgColor: '#33C0AF'},
    {id: 5, value: 50 , bgColor: '#00474B', selBgColor: '#33C0AF'},
    {id: 6, value: 'Custom', bgColor: '#EEF4F8', selBgColor: '#EEF4F8'},
  ]);

  function HandleBill (event){
    setBill(event.target.value)
  }

  function HandlePeople (event){
    setPeople(event.target.value)
    setAlert(false)
  }

  function HandleReset (){
    setBill(0);
    setPeople(0);
    setTotal(0);
    setTipAmount(0);
    setPressed(0);
    setAlert(false)
  }

  return (
    <BackgroundApp>

      <Logo>
        <img src={LogoApp}/>
      </Logo>

      <BackCalculator>

        <DivInput>
          <TextInput>Bill</TextInput>
          <InputValue onMouseOver={()=>alert('oee')}> 
            <img src={Dolar} style={{paddingLeft: 13}}/>
            <InputNumber value={bill} onChange={HandleBill} />
          </InputValue>

          <TextInput style={{marginTop: 57}} >Select Tip %</TextInput>
          
          <DviButton>
          {buttons.map((item) => {
            return(
              <div key={item.id}>
                <Buttons 
                  value={item.value}
                  id={item.id}
                  bgColor={item.bgColor}
                  selBgColor={item.selBgColor}
                  bill={bill}
                  people={people}
                  total={total}
                  tipAmount={tipAmount}
                  pressed={pressed}
                  setTotal={setTotal}
                  setTipAmount={setTipAmount}
                  setPressed={setPressed}
                  setAlert={setAlert}
                />
              </div>
            );
          })}
          </DviButton>
          
          <DivAlert>
            <TextInput style={{marginTop: 42}} >Number of People</TextInput>
            { alert && <TextAlert>Can't be zero</TextAlert> }
          </DivAlert>
        
          <InputValue> 
            <img src={Person} style={{paddingLeft: 13}}/>
            <InputNumber value={people} onChange={HandlePeople} />
          </InputValue>

        </DivInput>

        <BackResult>

          <DivResult>

            <div>
              <TextResult>Tip Amount</TextResult>
              <TextResult style={{fontSize: 14, color: '#689EA2'}}>/ person</TextResult> 
            </div>

            <TextValue>${tipAmount.toFixed(2)}</TextValue>
          </DivResult>

          <DivResult>    
            <div>
              <TextResult>Total</TextResult>
              <TextResult style={{fontSize: 14, color: '#689EA2'}}>/ person</TextResult> 
            </div>
            <TextValue>${total.toFixed(2)}</TextValue>
          </DivResult>

          <ButtonReset
            onClick={HandleReset} 
            style={{background: selected, cursor: 'pointer'}} 
            onMouseOver={ ()=> setSelected('#33C0AF') } 
            onMouseOut={ ()=> setSelected('#0D686D') }>
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

  function MouseOver () {
    setSelected(props.selBgColor);
    setNumbColor('#00474B');
  }

  function MouseOut () {
    setSelected(props.bgColor);
    setNumbColor('#FFFFFF');
  }

  function HandlePorcentage () {

    if(props.people > 0){
      props.setPressed(props.id)
    

    if(props.value == 'Custom'){
    }else{
      props.setTipAmount((props.value/100)*(props.bill/props.people))
      props.setTotal((props.bill/props.people)+((props.value/100)*(props.bill/props.people)))
    }
    }

    if(props.people == 0){
      props.setAlert(true)
    }else{
      props.setAlert(false)
    }

  }

  return(
      <div>
        { props.pressed === props.id ?
        <Button
          onClick={HandlePorcentage}
          style={{background: '#33C0AF', color: numbColor, cursor: 'pointer' }} >
              { props.value === 'Custom' ? props.value: props.value +'%' }
        </Button>
         :
        <Button
          onClick={HandlePorcentage}
          style={{background: selected, color: numbColor, cursor: 'pointer' }} 
          onMouseOver={MouseOver} 
          onMouseOut={MouseOut}>
              { props.value === 'Custom' ? props.value: props.value +'%' }
        </Button> }
      </div>
  );
}