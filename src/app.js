import React, {useEffect, useState} from 'react';
import Page from "./components/page/page";
import './css/main.css';
import Header from "./components/page/header/header";
import ScrollToTop from "./components/page/pp/scroll/scroll-to-top";
import Footer from "./components/page/footer/footer";


const App = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(async () => {
        await new Promise((resolve, reject) => setTimeout(() => {
            resolve(() => {
                return false
            });
        }, 1000)).then(res => setLoading(res))
    }, [])

    // const foo = () => {
    //     const f = document.getElementById('foo');
    //     document.addEventListener('click', ev => {
    //         f.style.transform = 'translateY(' + (ev.clientY - 25) + 'px)';
    //         f.style.transform += 'translateX(' + (ev.clientX - 25) + 'px)';
    //     }, false);
    // }

    return (
        <div className='back '>
            {isLoading && (
                <div className='loading-center'>
                    <div className='loading'>
                        <img src='/img/loading/fox-log.png'/>
                    </div>
                </div>
            )}
            {!isLoading && (
                <div className='app'>
                    <Header/>
                    <div className='container page'>
                        <div className=''>
                            <Page/>
                        </div>
                    </div>
                    <ScrollToTop/>
                    <Footer/>
                </div>
            )}

        </div>
    );
}
export default App;