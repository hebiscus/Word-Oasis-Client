import { buttonProps } from "../interfaces/interfaces";


function DefaultButton({children, btnType}: buttonProps) {
    return (
        <button className="def-button" type={btnType}>{children}</button>
    )
}

export default DefaultButton;