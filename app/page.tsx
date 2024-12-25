"use client"

import { useRef } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaFileDownload, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from './page.module.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Typewriter from 'typewriter-effect';
import { Particles } from 'react-tsparticles';

const interests = [
    "NLP",
    "LLMs",
    "Deep Learning",
    "Machine Learning",
    "Data Analytics",
    "Data Science"
];

export default function Home() {
    const footerRef = useRef<HTMLDivElement>(null);

    const scrollToContact = () => {
        footerRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles.container}>
            {/* Animated Background */}
            <div className={styles.particlesContainer}>
                <Particles
                    options={{
                        particles: {
                            number: { value: 50 },
                            color: { value: "#60a5fa" },
                            links: {
                                color: "#60a5fa",
                                distance: 150,
                                enable: true,
                                opacity: 0.2,
                                width: 1
                            },
                            move: {
                                enable: true,
                                speed: 1
                            }
                        }
                    }}
                />
            </div>

            <Navbar />

            <main className={styles.main}>
                <section className={styles.hero}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className={styles.heroContent}
                    >
                        {/* Profile Image */}
                        <motion.div 
                            className={styles.profileImageContainer}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                        >
                            <Image
                                src="/images/hazem.JPEG"
                                alt="Hazem Waleed"
                                width={200}
                                height={200}
                                className={styles.profileImage}
                            />
                            <div className={styles.profileImageBorder}></div>
                        </motion.div>

                        <h1 className={styles.title}>
                            Hi, I'm <span className={styles.name}>Hazem Waleed</span>
                        </h1>
                        
                        <div className={styles.typewriterContainer}>
                            <span className={styles.interestedIn}>Interested in </span>
                            <Typewriter
                                options={{
                                    strings: interests,
                                    autoStart: true,
                                    loop: true,
                                    wrapperClassName: styles.typewriterText
                                }}
                            />
                        </div>

                        <p className={styles.description}>
                            I am a senior student at Faculty of Computers & Artificial Intelligence - Cairo University.
                            Looking forward to gain more knowledge and experience in Artificial Intelligence, Data Sceince & Software-industry.
                        </p>

                        {/* Action Buttons */}
                        <div className={styles.actions}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a href="/HazemWaleed_CV.pdf" download className={styles.downloadBtn}>
                                    <FaFileDownload className={styles.icon} />
                                    Download CV
                                </a>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <button onClick={scrollToContact} className={styles.contactBtn}>
                                    <FaEnvelope className={styles.icon} />
                                    Contact Me
                                </button>
                            </motion.div>
                        </div>

                        {/* Social Links */}
                        <div className={styles.social}>
                            <motion.a
                                href="https://github.com/hazem-walied"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5 }}
                                className={styles.socialLink}
                            >
                                <FaGithub />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/hazem-waleed-758a06246/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5 }}
                                className={styles.socialLink}
                            >
                                <FaLinkedin />
                            </motion.a>
                        </div>
                    </motion.div>
                </section>
            </main>

            <div ref={footerRef}>
                <Footer />
            </div>
        </div>
    );
}