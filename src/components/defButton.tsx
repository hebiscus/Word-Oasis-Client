import { buttonProps } from "../interfaces/interfaces";


function DefaultButton({children, btnType}: buttonProps) {
    return (
        <>
        {btnType 
            ? <button className="def-button" type={btnType}>{children}</button>
            : <button className="def-button">{children}</button>
        }
        </>
    )
}

export default DefaultButton;