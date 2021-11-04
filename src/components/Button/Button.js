import './Button.css';

const Button = (buttonName) => {

    const clickHandler = () => {
       alert(buttonName.buttonName);
    }

    return (
        <button className={'button'} onClick={clickHandler}>
            {buttonName.buttonName}

        </button>
    );
}
export default Button;