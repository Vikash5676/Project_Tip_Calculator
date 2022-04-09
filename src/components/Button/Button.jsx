const Button = ({btn,btnClick}) => {
    return (
        <button onClick={btnClick}  >{btn}</button>
    );
};

export default Button;