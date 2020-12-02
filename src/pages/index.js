import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.png'
import thumb02 from '../assets/images/thumbs/02.png'
import thumb03 from '../assets/images/thumbs/03.png'
import thumb04 from '../assets/images/thumbs/04.png'
import thumb05 from '../assets/images/thumbs/05.png'
import thumb06 from '../assets/images/thumbs/06.png'
import thumb07 from '../assets/images/thumbs/07.png'
import thumb08 from '../assets/images/thumbs/08.png'

import full01 from '../assets/images/fulls/01.png'
import full02 from '../assets/images/fulls/02.png'
import full03 from '../assets/images/fulls/03.png'
import full04 from '../assets/images/fulls/04.png'
import full05 from '../assets/images/fulls/05.png'
import full06 from '../assets/images/fulls/06.png'
import full07 from '../assets/images/fulls/07.png'
import full08 from '../assets/images/fulls/08.png'

const DEFAULT_IMAGES = [
  
    { id: '1', source: full01, thumbnail: thumb01, caption: 'Platinum Landing Page', description: ''},
    { id: '2', source: full02, thumbnail: thumb02, caption: 'Platinum Email Template', description: ''},
    { id: '3', source: full03, thumbnail: thumb03, caption: 'Citibank Newsletter Landing Page', description: ''},
    { id: '4', source: full04, thumbnail: thumb04, caption: 'Citibank Newsletter Article', description: ''},
    { id: '5', source: full05, thumbnail: thumb05, caption: 'thesummit.events', description: 'An events webpage advertising a conference and taking signups for atteendees and sponsors', link:'http://thesummit.events/'},
    { id: '6', source: full06, thumbnail: thumb06, caption: 'Topflite Finacial Landing Page', description: ''},
    { id: '7', source: full07, thumbnail: thumb07, caption: 'Columbia Daily Tribune', description: 'I worked on a website redesign as part of a team and worked on developing new features'},
    { id: '8', source: full08, thumbnail: thumb08, caption: 'The Move Columbia', description: 'I worked on the design and development of The Move Columbia, a lifestyle focused website.'}
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Jacob Norwood - Kansas City Web Designer"
        const siteDescription = "Web design that works! Creating custom, modern, and engaging websites that help grow your online presence and drive engagement."

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                        <html lang="en" />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>I design engaging websites with a balance between creativity and functionality</h2>
                        </header>
                        <p>I am a Web / UX Designer located in Kansas City. I am interested in data driven design, accessibility, and user-centered design.</p>
                        <p>I have previously worked for small businesses, fortune 500s, nonprofits, and media companies working on emails, landing pages, and web applications.</p>
                        <ul className="actions">
                            <li><a href="https://docs.google.com/document/d/1oLZZzUmuvWXBLcc0CNI71mW8MUYzVRhVbHT7T6K8Dv8/edit?usp=sharing" className="button" target="_blank" rel="noopener noreferrer">My Resume</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description, link }) => ({
                            source,
                            thumbnail,
                            caption,
                            description,
                            link
                        }))} />
                    </section>

                    <section id="three">
                    <h2>What I can do</h2>
                    <ul>
                      <li>Web Design</li>
                      <li>Web Development</li>
                      <li>Web Analytics</li>
                    </ul>
                        <h2>Lets Work Together</h2>
                        <p>Need help on a website or extra help on your latest marketing campaign? Lets talk and see how I can help!</p>
                        <div className="row">
                            <div className="12u">
                                <form name="contact" method="POST" data-netlify="true">
                                    <input type="hidden" name="form-name" value="contact" />
                                        <div className="row uniform 50%">
                                          <div className="6u 12u$(xsmall)">
                                            <label>Name
                                              <input type="text" name="name" id="name" placeholder="Jacob Norwood" />
                                            </label>
                                          </div>
                                          <div className="6u 12u$(xsmall)">
                                            <label>E-mail
                                              <input type="email" name="email" id="email" placeholder="name@mail.com" />
                                              </label>
                                          </div>
                                          <div class="hidden">
                                            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                                          </div>
                                          <div className="12u">
                                            <label>Message
                                              <textarea name="message" id="message" placeholder="How can I help?" rows="4"></textarea>
                                            </label>
                                          </div>
                                        </div>
                                        <div className="12u">
                                          <input type="submit" value="Send Message" />
                                        </div>

                                </form>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex
