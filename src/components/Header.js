import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="Picture of Séan" /></a>
                    <h1><strong>I am Séan</strong>, freelance developer,<br/>
                    student at the Open University and<br />
                    member of a socially-engaged Buddhist movement.
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
