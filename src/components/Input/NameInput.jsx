const NameInput = ({nameValue,changeName}) => {
    return (
        <input type="text" value={nameValue} onChange={changeName}/>
    );
};

export default NameInput;