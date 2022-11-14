import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';

import styles from "./Form.module.css"
import cn from "classnames";
import {FieldError, useForm} from "react-hook-form";
import {Input} from "../Input/Input";
import {Textarea} from "../Textarea/Textarea";
import {IReviewForm} from "../../helpers/menu";

export interface IForm extends DetailedHTMLProps<InputHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
    error?: FieldError;
    setErrorModal: (n:boolean) => void;
    setShowModal: (n:boolean) => void
}

export const Form = ({setErrorModal,setShowModal,className, error, ...props}: IForm): JSX.Element => {


    const {register, reset, handleSubmit, formState: {errors, isValid}} = useForm<IReviewForm>();


    const submit = async (info: IReviewForm) => {
        try {
            await fetch('https://getform.io/f/5e50b214-79d2-40bf-83b8-200e78b6498f', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-16le'
                },
                body: JSON.stringify(info)
            })
            setShowModal(true);
            setErrorModal(false)
            reset();
            return 200
        } catch (e) {
            setErrorModal(true)
            setShowModal(true);
            reset();
            return 400
        }
    };
    return (
        <form onSubmit={handleSubmit(submit)} className={styles.form}>
            <Input placeholder={'Name'}
                   {...register('name', {
                       required: {value: true, message: 'Enter the name.'},
                       minLength: {value: 3, message: 'Enter the correct name.'},
                       maxLength: {value: 40, message: 'Enter the correct name.'}
                   })}
                   error={errors.name}
            />
            <Input placeholder={'Email'} {...register('email',
                {
                    required: {value: true, message: 'Enter the Email.'},
                    pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: 'Enter the correct email.'
                    },
                    minLength: {value: 3, message: 'Enter the correct Email.'},
                    maxLength: {value: 40, message: 'Enter the correct Email.'}
                })}
                   error={errors.email}
            />
            <Textarea placeholder={'Your message'} rows={9} {...register('message', {
                required: {value: true, message: 'Enter the message.'},
                minLength: {value: 3, message: 'Enter the correct message'}
            })}
                      error={errors.message}
            />
            <button className={cn(styles.button, {
                [styles.valid]: isValid,
            })}>Let's Cooperate
            </button>
        </form>
    );
};
