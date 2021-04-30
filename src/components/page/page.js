import React from 'react';
import '../../css/main.css';

import GalleryContent from './pp/gallery/gallery';

import {Route} from 'react-router-dom';

const Page = () => {
    return (
        <div className='content'>
            <div className='row'>
                <div className='col-sm-3'>
                    <img src='/img/ava/ava.png' className='ava'/>
                </div>
                <div className='col-lg'>
                    <div className="nick pt-2">
                        Anu Chu
                    </div>

                    <div className="contacts">
                        <a href="tel:">Телефон:</a> 8 (952) 111-11-11<br/>
                        <a href="mailto:">E-mail:</a> meow@gmail.com
                    </div>
                    <div className="row">
                        <div className="col icon">
                            <a href=""><img src="/img/icon/git.png"/></a>
                            <a href=""><img className="pl-2" src="/img/icon/facebook.png"/></a>
                            <a href=""><img className="pl-2" src="/img/icon/vk.png"/></a>
                        </div>
                    </div>

                </div>
            </div>

            <Route exact path="/" component={GalleryContent}/>

            <span className="ovals">
<img src="/img/another/posle.png"/>
</span>
        </div>

    );
}

export default Page;