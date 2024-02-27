import React, {MouseEventHandler} from "react";

export interface CustomButtonProps {
    title : String;
    containerStyles? : String;
    btnType :"button" | "submit"
    handleClick ?:
        MouseEventHandler<HTMLButtonElement>;
}

export interface  SearchManuFacturerProps{
    manufacturer : String;
    setManuFacturer : (manufacturer:String) => void;
}