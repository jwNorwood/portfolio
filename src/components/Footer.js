import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="labeled-icons">
                        <li>
                            <span className="icon fa-home h3"><span className="label">Address</span></span>
                            Kansas City, Mo<br />
                            United States
                        </li>
                        <li>
                            <span className="icon fa-envelope-o h3"><span className="label">Email</span></span>
                            <a href="mailto:jacobnorwood92@gmail.com">jacobnorwood92@gmail.com</a>
                        </li>
                    </ul>
                    <ul className="icons">
                        <li>
                        <a href="https://www.linkedin.com/in/jwnorwood/" title="Linkedin" className="icon fa-linkedin" target="_blank" rel="noopener noreferrer">
                            <span className="label">Linkedin</span>
                        </a>
                        </li>
                        <li>
                        <a href="https://github.com/jwnorwood" title="Github" className="icon fa-github" target="_blank" rel="noopener noreferrer">
                            <span className="label">Github</span>
                        </a>
                        </li>
                        <li>
                        <a href="https://www.behance.net/jacobnorwood3" title="Behance" className="icon fa-behance" target="_blank" rel="noopener noreferrer">
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
