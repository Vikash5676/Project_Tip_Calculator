const Select = ({changeOption}) => {
    return (
        <select name="button" id="" onChange={changeOption}>
                    <option  defaultValue={0} >Choose..</option>
                    <option value="0.2">Excellent</option>
                    <option value="0.1">Moderate</option>
                    <option value="0.05">Bad</option>
        </select>
    );
};

export default Select;