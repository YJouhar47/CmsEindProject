import * as React from 'react'
import Layout from '../components/layout';
import {form} from "../styles/contact.module.css"
const Contact = () => {
    return (
        <Layout>
            <section className={form}>
        <form name="contact" method="POST" data-netlify="true">
            <label>Your Name:</label>
            <input type="text" name="name" required={true} />
            <label>Your Email:</label>
            <input type="email" name="email" required={true} />
            <label>Message:</label>
            <textarea name="message" required={true}></textarea>
            <input type="hidden" name="form-name" value="contact" />
            <button type="submit">Send</button>
        </form>
      </section>
        </Layout>
    )
}
export default Contact;