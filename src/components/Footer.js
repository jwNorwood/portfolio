import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                <ul className="labeled-icons">
                    <li>
                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                        Kansas City, Mo<br />
                        United States
                    </li>
                    <li>
                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                        <a href="mailto:jacobnorwood92@gmail.com">jacobnorwood92@gmail.com</a>
                    </li>
                </ul>
                </div>
            </div>
        )
    }
}

export default Footer
