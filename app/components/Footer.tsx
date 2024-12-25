"use client"

// components/Footer.tsx
import { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Footer.module.css';
import { FaPaperPlane, FaHeart, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formRef.current) {
            try {
                const result = await emailjs.sendForm(
                    'service_jwdf3iq',
                    'template_d1jcygh',
                    formRef.current,
                    'pGpcvw0jdGI1gLCao' // Replace with your EmailJS public key
                );

                console.log('SUCCESS!', result.text);
                alert('Message sent successfully!');
                formRef.current.reset();
            } catch (error) {
                console.error('FAILED...', error);
                alert('Failed to send message. Please try again.');
            }
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Contact Section */}
                <div className={styles.contactSection}>
                    <h2 className={styles.title}>Contact Me</h2>
                    <p className={styles.subtitle}>
                        Feel free to reach out! I'll get back to you as soon as possible.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formGrid}>
                            <div className={styles.inputGroup}>
                                <input
                                    type="text"
                                    name="full_name"
                                    placeholder="Full Name"
                                    required
                                    className={styles.input}
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    className={styles.input}
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <input
                                    type="tel"
                                    name="phone_number"
                                    placeholder="Phone Number"
                                    className={styles.input}
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    required
                                    className={styles.input}
                                />
                            </div>
                        </div>

                        <div className={styles.inputGroup}>
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                required
                                className={`${styles.input} ${styles.textarea}`}
                            ></textarea>
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            <FaPaperPlane className={styles.icon} />
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Copyright Section */}
                <div className={styles.copyright}>
                    <p>
                        © Hazem Waleed | v1.2 | 2024 | Made With <FaHeart className={styles.heartIcon} />
                    </p>
                </div>

                {/* Social Links Section */}
                <div className={styles.socialLinks}>
                    <a 
                        href="https://github.com/hazem-walied" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                    >
                        <FaGithub className={styles.socialIcon} />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/hazem-waleed-758a06246/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                    >
                        <FaLinkedin className={styles.socialIcon} />
                    </a>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;