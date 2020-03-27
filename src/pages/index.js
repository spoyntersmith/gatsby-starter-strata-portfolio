import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', source: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '2', source: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '3', source: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '4', source: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '5', source: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '6', source: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Séan Poynter-Smith"
        const siteDescription = "Personal site for a Web Developer in Windsor, UK"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    {/* <section id="one">
                        <header className="major">
                            <h2>Ipsum lorem dolor aliquam ante commodo<br />
                            magna sed accumsan arcu neque.</h2>
                        </header>
                        <p>Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.</p>
                        <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description }) => ({
                            source,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul>
                    </section> */}

                    <section id="three">
                        <h2>Get in touch</h2>
                        <div className="row">
                        <div className="8u 12u$(small)">
                        <div className="row uniform 50%">
                        <!-- A little help for the Netlify post-processing bots -->
                        <form name="contact" netlify netlify-honeypot="bot-field" hidden>
                        <input type="text" name="name" />
                        <input type="email" name="email" />
                        <textarea name="message"></textarea>
                        </form>

                        <div id="root"></div>

                        <script type="text/babel">

                        const encode = (data) => {
                            return Object.keys(data)
                                .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
                                .join("&");
                        }

                        class ContactForm extends React.Component {
                            constructor(props) {
                            super(props);
                            this.state = { name: "", email: "", message: "" };
                            }

                            /* Here’s the juicy bit for posting the form submission */

                            handleSubmit = e => {
                            fetch("/", {
                                method: "POST",
                                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                                body: encode({ "form-name": "contact", ...this.state })
                            })
                                .then(() => alert("Success!"))
                                .catch(error => alert(error));

                            e.preventDefault();
                            };

                            handleChange = e => this.setState({ [e.target.name]: e.target.value });

                            render() {
                            const { name, email, message } = this.state;
                            return (
                                <form onSubmit={this.handleSubmit}>
                                <div className="6u 12u$(xsmall)"><input type="text" name="name" value={name} onChange={this.handleChange} /></div>
                                <div className="6u 12u$(xsmall)"><input type="email" name="email" value={email} onChange={this.handleChange} /></div>
                                <div className="12u"><textarea name="message" value={message} onChange={this.handleChange} rows="4"/></div>
                                <p>
                                    <button type="submit">Send</button>
                                </p>
                                </form>
                            );
                            }
                        }

                        ReactDOM.render(<ContactForm />, document.getElementById("root"));

                        </script>
                            </div></div>

                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Location</span></h3>
                                        Windsor, UK
                                    </li>
                                    {/* <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        000-000-0000
                                    </li> */}
                                    {/* <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">hello@untitled.tld</a>
                                    </li> */}
                                </ul>
                            </div>

                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex