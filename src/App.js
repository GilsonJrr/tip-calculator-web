import React, {useState, useEffect} from 'react';

import Dolar from './Image/Dolar.png';
import Person from './Image/icon-person.png';
import LogoApp from './Image/Logo.png';

import { BackgroundApp, BackCalculator, Logo, BackResult, DivInput, InputValue, DviButton, DivAlert, InputCustom,
         Button, TextInput, TextResult, TextValue, DivResult, ButtonReset, InputNumber, TextAlert, DviSections } from './Style/GlobalStyle';

function App() {

  const [selected, setSelected] = useState ('#0D686D');
  const [pressed, setPressed] = useState (0)
  const [alert, setAlert] = useState (false)
  
  const [custom, setCustom] = useState ('Custom')

  const [bill, setBill] = useState (0);
  const [people, setPeople] = useState (0);

  const [tipAmount, setTipAmount] = useState (0);
  const [total, setTotal] = useState (0);

  const [billSty, setBillSty] = useState ({});
  const [billHover, setBillHover] = useState (false);

  const [reset,setReset] = useState(false);

  const [peopleSty, setPeopleSty] = useState ({});

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
    setReset(true)
  }

  function HandlePeople (event){
    setPeople(event.target.value)
    setAlert(false)
    setReset(true)
  }

  function HandleReset (){
    setBill(0);
    setPeople(0);
    setTotal(0);
    setTipAmount(0);
    setPressed(0);
    setAlert(false)
    setReset(false)
    setCustom('Custom')
    setBillSty({cursor: 'pointer'})
    setPeopleSty({cursor: 'pointer'})
  }

  function HandleClear (){
    if(bill != ''){
      setBillSty({cursor: 'pointer'})
    }
    if(people != ''){
      setPeopleSty({cursor: 'pointer'})
    }
  }
  
  function ChangeBill (){
    setBillSty({border: 2.5, borderColor: '#33C0AF', borderStyle: 'solid', cursor: 'pointer'})
    setPeopleSty({cursor: 'pointer'})
    setBill('')
  }

  function ChangePeople (){
    setPeopleSty({border: 2.5, borderColor: '#33C0AF', borderStyle: 'solid', cursor: 'pointer'})
    setBillSty({cursor: 'pointer'})
    setPeople('')
    setAlert(false)
  }

  return (
    <BackgroundApp>

      <Logo>
        <img src={LogoApp}/>
      </Logo>

      <BackCalculator onMouseOver={HandleClear}>

        <DivInput>

          <DviSections>
            <TextInput>Bill</TextInput>
            <InputValue style={billSty}> 
              <img src={Dolar} />
              <InputNumber name='bill' type='text' value={bill} onChange={HandleBill} onFocus={ChangeBill}/>
            </InputValue>
          </DviSections>

          <DviSections>
            <TextInput>Select Tip %</TextInput>
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
                    setPeopleSty={setPeopleSty}
                    custom={custom}
                    setCustom={setCustom}
                  />
                </div>
              );
            })}
            </DviButton>
          </DviSections>
          
          <DviSections>
            <DivAlert>
              <TextInput>Number of People</TextInput>
              { alert && <TextAlert>Can't be zero</TextAlert> }
            </DivAlert>
          
            <InputValue style={peopleSty} > 
              <img src={Person} />
              <InputNumber value={people} onChange={HandlePeople} onFocus={ChangePeople}/>
            </InputValue>
          </DviSections>

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
            style={{cursor: 'pointer'}} 
            onMouseOver={ ()=> setSelected('#33C0AF') } 
            onMouseOut={ ()=> setSelected('#0D686D') }
            reset={reset}
          >
            RESET
          </ButtonReset>

        </BackResult>

      </BackCalculator>

    </BackgroundApp>
  );
}

export default App;

//TODO: resolver os botoes de porcentagem(ficar selecionado e voltar ao padr'ao quando reset)

export function Buttons (props) {
  
  const [selected, setSelected] = useState (props.bgColor)
  const [disabled, setDisabled] = useState (true)

  const [selectedColor, setSelectedColor] = useState ('#00474B')
  
  const [numbColor, setNumbColor] = useState ('#FFFFFF')

  useEffect(() => {

    if(props.custom > 0){
      props.setTipAmount((props.custom/100)*(props.bill/props.people))
      props.setTotal((props.bill/props.people)+((props.custom/100)*(props.bill/props.people)))
      props.setPressed(0)
    }

    if(props.people > 0 && props.bill > 0){
      setDisabled(false)
    }

  });

  function MouseOver () {
    setSelected(props.selBgColor);
    setNumbColor('#00474B');
  }

  function MouseOut () {
    setSelected(props.bgColor);
    setNumbColor('#FFFFFF');
  }


  function HandleCustom (event){

    if(props.people > 0){
      props.setCustom(event.target.value)
    }

    if(props.people == 0){
      props.setAlert(true)
      props.setPeopleSty({border: 2.5, borderColor: '#D89385', borderStyle: 'solid',})
    }else{
      props.setAlert(false)
    }
    
  }

  function ChangeCustom (){
    if(props.people > 0){
      props.setCustom('')
    }
  }

  function HandlePorcentage () {

    if(props.people > 0){
      props.setPressed(props.id)
      props.setTipAmount((props.value/100)*(props.bill/props.people))
      props.setTotal((props.bill/props.people)+((props.value/100)*(props.bill/props.people)))
      props.setCustom('Custom')
    }
    
    if(props.people == 0){
      props.setAlert(true)
      props.setPeopleSty({border: 2.5, borderColor: '#D89385', borderStyle: 'solid',})
    }else{
      props.setAlert(false)
    }

  }

  return(
      <div>
        { props.value > 0 && props.pressed != props.id &&
        <Button
          onClick={HandlePorcentage}
          style={{background: '#00474B', cursor: 'pointer' }} 
          onMouseOver={MouseOver} 
          onMouseOut={MouseOut}>
              {props.value}%
        </Button> }

        { props.value > 0 && props.pressed === props.id &&
        <Button
          style={{background: '#33C0AF', color: numbColor, cursor: 'pointer' }}>
              {props.value}%
        </Button> }

        { props.value === 'Custom' && 
        <Button style={{background: props.bgColor}}>
              <InputCustom name='bill' type='text' value={props.custom} onChange={HandleCustom} onFocus={ChangeCustom} disabled={disabled}/>
        </Button>}
      </div>
  );
}