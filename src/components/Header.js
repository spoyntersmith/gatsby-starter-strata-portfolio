import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.webp'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <button className="image avatar"><img src={avatar} alt="Séan Poynter-Smith"/></button>
                    <h1><strong>Hi 😀, I am Séan</strong></h1>
                    <p>Laravel, WordPress and WooCommerce Developer,<br/>
                        currently studying at Open University and<br/>
                        member of a socially-engaged Buddhist movement.</p>
                </div>
                <Footer/>
            </header>
        )
    }
}

export default Header
