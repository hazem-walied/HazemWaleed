import styles from './page.module.css';
import ExperienceCard from './../components/ExperienceCard';
import Navbar from './../components/Navbar';
import Footer from "./../components/Footer";

const experiences = [
    {
        logo: "/images/4sale.webp",
        company: "4SALE International co.",
        role: "AI/ML Engineering Internship",
        startDate: "July 2025",
        endDate: "September 2025",
        location: "Zamalek, Egypt — Hybrid",
        description: [
            "International company specializing in e-commerce and digital solutions",
        ],
        achievements: [
            "Designed and implemented machine learning systems for user analytics and engagement tracking.",
            "Conducted data exploration, cleaning, and feature extraction from warehouse data for predictive scoring.",
            "Collaborated with DevOps to integrate AI services into production systems.",
            "Ensured code reliability and scalability using documentation, version control, and performance testing."
        ]
    },
    {
        logo: "/images/fluidai.jpeg",
        company: "Fluid AI Medical",
        role: "Technical Solutions Associate",
        startDate: "July 2024",
        endDate: "September 2024",
        location: "Remote, Kitchener | ON | Canada",
        description: [
            "Medical Company for Data Driven Patient Recovery Utilising AI",
        ],
        achievements: [
            "I engaged in various tasks, primarily focusing on Natural Language Processing (NLP), model training, and chatbot development.",
            "I contributed to key projects aimed at enhancing AI-driven solutions within the company."
        ]
    },
    {
        logo: "/images/scci.png",
        company: "SCCI",
        role: "Participant",
        startDate: "November 2023",
        endDate: "May 2024",
        location: "Giza, Egypt",
        description: [
            "Student Activity",
        ],
        achievements: [
            "Workshop: AppSplash (Andoid development with Android Studio).",
            "Ended with Best Participant in the closing conference."
        ]
    },
    {
        logo: "/images/mec.jpg",
        company: "MEC Academy",
        role: "Teaching Assistant",
        startDate: "May 2022",
        endDate: "September 2022",
        location: "Giza, Egypt",
        description: [
            "MEC Academy specializes in providing Diplomas and Courses for Programming, Web Development, Android, Flutter, and AI & Machine Learning.",
        ],
        achievements: [
            "I was helping students to learn and understand the basic concepts of an Intro to software-engineering course."
        ]
    },
    // Add more experiences...
];

export default function Experience() {
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
                        Professional Journey
                        <span className={styles.headerAccent}>Experience & Activities</span>
                    </h1>
                    <p className={styles.subheader}>
                        A timeline of my professional growth and contributions
                    </p>
                </div>

                <div className={styles.timeline}>
                    <div className={styles.timelineLine}></div>
                    <div className={styles.timelineContent}>
                        {experiences.map((experience, index) => (
                            <div 
                                key={index} 
                                style={{"--index": index} as React.CSSProperties}
                            >
                                <ExperienceCard
                                    {...experience}
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