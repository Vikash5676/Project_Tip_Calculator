import Select from "../Select/Select";
import BillInput from "../Input/BillInput";
import NameInput from "../Input/NameInput";
import Button from "../Button/Button";
import List from "../List/List";
import { useState } from "react";
import style from './TipCalculator.module.css'

const TipCalculator = () => {

    const [amount, setAmount] = useState('');
    const [name, setName] = useState('');
    const [list,setList] = useState([]);
    const [option,setOption] = useState([0]);
    const [count,setCount]= useState(0)
    const [tip,setTip] = useState([])
    const [listLength, setListLength] = useState(0)


    const changeNumber = (event) => {
        const billAmount = event.target.value;
        setAmount(billAmount);
    }

    const changeName = (event) => {
        const customerName = event.target.value;
        setName(customerName);

    }

    const changeOption = (event) => {
        const optionValue = event.target.value;
        setOption(optionValue);
        
    }

    const btnClick = () => {
        
        const totalTipValue = (parseFloat(amount)*parseFloat(option));
        const totalTip=[...tip];
        totalTip.push(totalTipValue)
        setTip(totalTip)
        const listInput = [...list];
        const listOut= name+' offering a tip of Rs '+totalTipValue+'.'; 
        listInput.push(listOut);
        setList(listInput);
        
        
    }
    console.log(tip)

    const calClick= () =>{
         
            
             var counts= eval(tip.join("+"));
            
            
            setCount(counts)
             setListLength(list.length)
        
    };

    return (
        <div className={style.parentContainer}>
            <div className={style.header}>
                <h1>Tip Calculator</h1>
                <h4>Build In React</h4>
            </div>
            <div className="bodyInputs">
                <h2>Enter your bill amount</h2>
                <BillInput
                    amountValue={amount}
                    changeNumber={changeNumber}
                />
                <div className={style.margin}>
                    <hr />
                </div>
                <div className={style.margin}>
                
                <span >
                    How was the service
                    <Select 
                        changeOption={changeOption}
                        />&ensp;
                    <NameInput
                        nameValue={name}
                        changeName={changeName}
                    />
                    <Button  btn="Add Customer" 
                        btnClick={btnClick}
                    />
                </span>
                </div>
            </div>
            <div className={style.bodyOutput}>
                <h3>Customer List</h3>
                <hr />
                <List 
                list={list}
                />
            </div>
            <button className={style.button} onClick={calClick}>Calculate Tip and Customer</button>


            <div >
                <hr/>
                <table rules="all">
                    <tr>
                        <th className={style.borderFirst}>Total Customer</th>
                        <th className={style.borderSecond}>Tip</th>
                    </tr>
                    <tr>
                        
                        <td className={style.borderFirst}>{listLength}</td>
                        <td className={style.borderSecond}>{count}</td>
                    </tr>
                    
                </table>
                </div>
            </div>
    );
};

export default TipCalculator;