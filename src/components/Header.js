import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="/index.html" className="image avatar"><img src={avatar} alt="Jacob Norwood" /></a>
                    <h1><strong>Jacob Norwood</strong><br />
                    Web Designer<br />
                    Kansas City</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
