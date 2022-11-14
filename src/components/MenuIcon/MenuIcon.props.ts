import React, {ReactNode} from "react";
import {MdKeyboardArrowUp as up} from "react-icons/md";
import {BiMenu as menu} from "react-icons/bi";
import {MdClose as close} from "react-icons/md";

export const icons = {
    up,
    menu,
    close
}

export type IconType = keyof typeof icons

export interface MenuIconProps extends React.HTMLAttributes<HTMLButtonElement>{
    icon: IconType;
    appearance: "primary" | "white";
}