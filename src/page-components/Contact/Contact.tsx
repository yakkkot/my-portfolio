import React, {useState} from 'react';

import styles from "./Contact.module.css"
import {Form, IconText, Modal, Title, Wrapper} from "../../components";

import {motion} from 'framer-motion'

export const Contact = (): JSX.Element => {

    const [errorModal,setErrorModal] = useState<boolean>(false)
    const [showModal,setShowModal] = useState<boolean>(false)

    return (
        <>
            <Wrapper id='Contact' className={'overflow-x-hidden grid'}>
                <motion.div
                    initial={{opacity: 0, x: -300}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 1}}
                    viewport={{once:true}}

                    className={styles.container}>
                    <Title>Contact</Title>

                    <IconText icon={'contact'}>
                        Submit the form below or shoot me an email - k0tjeee777@gmail.com
                    </IconText>
                    <Form setShowModal={setShowModal} setErrorModal={setErrorModal}/>
                </motion.div>
            </Wrapper>
            {errorModal ?
                <Modal showModal={showModal} setShowModal={setShowModal} type={'error'}>
                    Sorry, an error occurred, please try again later.
                </Modal>
                :
                <Modal showModal={showModal} setShowModal={setShowModal} type={'success'}>
                    Thanks for your interest, I will reply to you shortly.
                </Modal>
            }
        </>
    );
};
