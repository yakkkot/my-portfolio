import React from 'react';
import styles from "./Experience.module.css"

import ReactJs from "../../Assets/Images/react.png"
import HTML from "../../Assets/Images/html.png"
import CSS from "../../Assets/Images/css.png"
import JavaScript from "../../Assets/Images/javascript.png"
import Tailwind from "../../Assets/Images/tailwind.png"
import TypeScript from "../../Assets/Images/Typescript.png"
import Next from "../../Assets/Images/next.png"
import Github from "../../Assets/Images/github.png"

import {Skill, Title, IconText, Wrapper, Project} from "../../components";
import cn from "classnames";
import {motion} from "framer-motion";



const Experience = ():JSX.Element => {

    return (

        <Wrapper id='Experience'>
            <motion.div className={styles.container}
                        initial={{opacity: 0, x: -350}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once:true}}
                        transition={{duration: 1}}>
                <Title>Experience</Title>
                <IconText icon={'experience'}>These are the technologies I've worked with (but that's not
                    all).</IconText>
                <Skill icon={HTML} title={'HTML'}/>
                <Skill icon={CSS} title={'CSS'}/>
                <Skill icon={JavaScript} title={'JavaScript'}/>
                <Skill icon={TypeScript} title={'TypeScript'}/>
                <Skill icon={ReactJs} title={'React js'}/>
                <Skill icon={Next} title={'Next.js'}/>
                <Skill icon={Tailwind} title={'Tailwind CSS'}/>
                <Skill icon={Github} title={'Github'}/>
            </motion.div>
        </Wrapper>

    );
};

export {Experience};