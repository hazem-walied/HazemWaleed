"use client"

import Link from 'next/link';
import styles from './Navbar.module.css';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.main} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.title}>
                <Link href="/">
                    <h1>Hazem <span>Waleed</span></h1>
                </Link>
            </div>
            
            <button 
                className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
                <ul>
                    <li>
                        <Link href="/" className={pathname === '/' ? styles.active : ''}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/experience" className={pathname === '/experience' ? styles.active : ''}>
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link href="/education" className={pathname === '/education' ? styles.active : ''}>
                            Education
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" className={pathname === '/projects' ? styles.active : ''}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/courses" className={pathname === '/courses' ? styles.active : ''}>
                            Courses
                        </Link>
                    </li>
                    <li>
                        <Link href="/skills" className={pathname === '/skills' ? styles.active : ''}>
                            Skills
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;