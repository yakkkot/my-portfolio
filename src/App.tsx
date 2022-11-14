import React from 'react';

import {Container} from "./components"
import {About, Contact, Experience, Footer, Header, Home, Works} from "./page-components";

function App(): JSX.Element {
    // <div className={'snap-mandatory h-screen snap-y z-0 overflow-scroll scrollbar scrollbar-thumb-rounded-[40px] scrollbar-track-blue-900/70 scrollbar-thumb-[#aa3cb7]/80'}>

    return (
        <>
            <Header/>
            <Container>
                <Home/>
                <About/>
                <Experience/>
            </Container>
            <Works/>
            <Container>
                <Contact/>
            </Container>
            <Footer/>
        </>
    );
}

export default App;
