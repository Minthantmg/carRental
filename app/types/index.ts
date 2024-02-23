import {MouseEventHandler} from "react";

export interface CustomButtonProps {
    title : String;
    containerStyles? : String;
    btnType :"button" | "submit"
    handleClick ?:
        MouseEventHandler<HTMLButtonElement>;
}