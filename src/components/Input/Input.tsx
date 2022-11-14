import {DetailedHTMLProps, ForwardedRef, forwardRef, InputHTMLAttributes} from 'react';

import styles from "./Input.module.css"
import cn from "classnames";
import {FieldError} from "react-hook-form";
import {BiErrorCircle} from "react-icons/bi";

export interface IInput extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    error?: FieldError;
}

export const Input = forwardRef(({ className, error, ...props }: IInput, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {

    return (
        <div className={cn(className, styles.inputWrapper, 'relative')}>
            <input className={cn(styles.input,
                "p-2 w-full bg-[#ccd6f5] text-black rounded-xl",
                {
                    [styles.error]: error
                })} ref={ref} {...props} />
            {error &&
                <span
                    className={cn(styles.errorMessage, 'text-red-500 text-[14px] flex gap-1 items-center absolute mt-[6px]')}>
                <BiErrorCircle size={22}/>
                    {error.message}
                </span>
            }
        </div>
    );
});
