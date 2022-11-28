import React from 'react';

import styles from "./Home.module.css"
import MyPhoto from "../../Assets/Images/myfoto.jpeg"
import {Link} from "react-scroll";
import {Cursor,useTypewriter} from "react-simple-typewriter";
import {Wrapper} from "../../components";
import cn from "classnames";
import {motion} from "framer-motion"

const Home = (): JSX.Element => {

    const [text, setText] = useTypewriter({
        words: [
            "Hello, my name is Yaroslav Kot",
            "<h1>Kot, but not a cat</h1>",
            "React-Next-js-developer.tsx"
        ],
        loop: true,
        delaySpeed: 2200,
    })

    return (

        <Wrapper id='Home' className={'relative'}>
            <motion.div className={cn(styles.container, '')}
                        initial={{opacity: 0, x: -350}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once:true}}
                        transition={{duration: 1}}>
                <img className={styles.photo} src={MyPhoto} alt={'MyPhoto'}/>

                <h1 className={`${styles.typeWriter} font-bold text-center z-10`}>
                    <span>{text}</span>
                    <Cursor cursorColor={'#bf42ce'}/>
                </h1>
                <Link to={'Works'} smooth={true} duration={500}>
                    <button className={styles.button}>
                        View Pet Projects
                    </button>

                </Link>

            </motion.div>
        </Wrapper>
    );
};

export {Home};