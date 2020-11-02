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
                    <ul className="icons">
                        <li>
                        <a href="https://www.linkedin.com/in/jwnorwood/" className="icon fa-linkedin" target="_blank" rel="noopener noreferrer">
                            <span className="label">Linkedin</span>
                        </a>
                        </li>
                        <li>
                        <a href="https://github.com/jwnorwood" className="icon fa-github" target="_blank" rel="noopener noreferrer">
                            <span className="label">Github</span>
                        </a>
                        </li>
                        <li>
                        <a href="https://www.behance.net/jacobnorwood3" className="icon fa-behance" target="_blank" rel="noopener noreferrer">
                            <span className="label">Behance</span>
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
