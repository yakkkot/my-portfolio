import {DetailedHTMLProps, ForwardedRef, forwardRef, HTMLAttributes, ReactNode, useState} from 'react';

import styles from "./Modal.module.css"
import cn from "classnames";
import {IoIosClose} from "react-icons/io";
import { MouseEvent } from 'react';
import {IconText} from "../IconText/IconText";

export interface IModal extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    type?: 'error' | 'success';
    showModal:boolean
    setShowModal: (modal: boolean) => void
}

export const Modal = forwardRef(({showModal=false,setShowModal, type='success', children,className, ...props }: IModal, ref: ForwardedRef<HTMLInputElement>): JSX.Element | null=> {

    // const [showModal,setShowModal] = useState<boolean>(true)

    const closeModal = (e: MouseEvent) => e.stopPropagation();
    const click = () => setShowModal(false);


    if(!showModal) return null


    return (
        <div className={cn(className, styles.container)} onClick={click}>
            <div className={cn(styles.block, 'text-gray-900 relative')}
                 onClick={closeModal}
            >
                <IoIosClose onClick={click} size={30} className={styles.closeIcon}/>
                <div className="flex items-center gap-2">
                    {type === 'success'
                        ? <IconText color={'green'} icon={"success"}>Thank you!</IconText>
                        : <IconText color={'red'} icon={"error"}>Ooooops.</IconText>
                    }
                </div>
                <hr className={styles.hr}/>
                <div>
                    {children}
                </div>
                <hr className={styles.hr}/>

                <button onClick={click} className={styles.button}>
                    Close
                </button>
            </div>
        </div>
    );
});
