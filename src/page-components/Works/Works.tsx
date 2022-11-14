import React from 'react';

import styles from "./Works.module.css"
import {Container, IconText, Project, Title, Wrapper} from "../../components";
import cn from "classnames";
import {motion} from "framer-motion"

import {data} from "../../helpers/menu";


const Works = ():JSX.Element => {

    return (
        <div className={'relative h-screen'}>
            <Container id='Works'>
                <Wrapper className={'flex items-center justify-center'}>
                    <motion.div
                        initial={{opacity: 0, x: 300}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 1}}
                        className={styles.container}>
                        <Title>Works</Title>
                        <IconText icon={'works'}>Check out some of my Pet Projects.</IconText>
                        <div
                            className={'w-full relative flex  overflow-x-scroll scrollbar  scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-blue-900/70 scrollbar-thumb-[#aa3cb7]/80 snap-x snap-mandatory z-20'}>
                            {data.map((x) => (
                                <Project key={x.id} project={x}/>
                            ))}
                        </div>
                    </motion.div>
                </Wrapper>
            </Container>
            <div className={'w-full absolute top-[25%] bg-[#bf42ce]/10 h-[50%] -skew-y-12'}/>
        </div>
    );
};

export {Works};