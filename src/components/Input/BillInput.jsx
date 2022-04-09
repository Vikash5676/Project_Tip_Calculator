const BillInput = ({amountValue, changeNumber}) => {
    return (
        <input type="number" vaue={amountValue} onChange={changeNumber}/>
    );
};

export default BillInput;