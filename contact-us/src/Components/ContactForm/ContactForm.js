import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../ComponentHeader/Button/Button';

const ContactForm = () => {
    return(
        <section classname = {styles.container}>
            <div className= {styles.contactForm}>
                <Button/>
            </div>
            <div className= {styles.contactImage}></div>
        </section>
    )
}

export default ContactForm;