import {DetailedHTMLProps, ForwardedRef, forwardRef, TextareaHTMLAttributes} from 'react';

import styles from "./Textarea.module.css"
import cn from "classnames";
import {FieldError} from "react-hook-form";
import {BiErrorCircle} from "react-icons/bi";

export interface ITextareaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    error?: FieldError;
}

export const Textarea = forwardRef(({ error, className, ...props }: ITextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {

    return (
        <div className={cn(styles.textareaWrapper, className,'relative')}>
			<textarea className={cn(styles.textarea,
                "p-2 w-full bg-[#ccd6f5] text-black rounded-xl",
                {
                    [styles.error]: error,
            })} ref={ref} {...props} />
            {error &&
                <span
                    className={cn(styles.errorMessage, 'text-red-500 text-[14px] flex gap-1 items-center absolute ')}>
                <BiErrorCircle size={22}/>
                    {error.message}
                </span>
            }
        </div>
    );
});