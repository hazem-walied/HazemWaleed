// app/education/page.tsx
import styles from './page.module.css';
import EducationCard from './../components/EducationCard';
import Navbar from './../components/Navbar';
import Footer from "./../components/Footer";

const educationData = [
    {
        logo: "/images/fcai.jpeg",
        institution: "Cairo University",
        major: "Major: Artificial Intelligence",
        gpa: "3.77/4.0",
        startDate: "October 2021",
        endDate: "June 2025",
        location: "Dokki, Giza, Egypt.",
    },
    // Add more education entries...
];

export default function Education() {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.background}>
                <div className={styles.gradientOrb}></div>
                <div className={styles.gradientOrb2}></div>
            </div>
            <main className={styles.main}>
                <div className={styles.headerContainer}>
                    <h1 className={styles.header}>
                        Educational Background
                        <span className={styles.headerAccent}>Academic Journey</span>
                    </h1>
                    <p className={styles.subheader}>
                        My academic path in Computer Science
                    </p>
                </div>

                <div className={styles.timeline}>
                    <div className={styles.timelineLine}></div>
                    <div className={styles.timelineContent}>
                        {educationData.map((education, index) => (
                            <div 
                                key={index} 
                                style={{"--index": index} as React.CSSProperties}
                            >
                                <EducationCard
                                    {...education}
                                    isLeft={index % 2 === 0}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}