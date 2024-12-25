import styles from './page.module.css';
import ProjectCard from './../components/ProjectCard';
import Navbar from './../components/Navbar';
import Footer from "./../components/Footer";

const projects = [
    {
        title: "Machine Translation",
        description: "An English-to-Portuguese neural machine translation (NMT) model using (LSTM) networks with Attention (Part of the NLP Specialization).",
        imageUrl: "/images/machinetrans.jpg",
        githubUrl: "https://github.com/hazem-walied/NLP_Specialization/tree/master/NLP_Specialization/Course_4/Machine_Translation",
        technologies: [
            { name: "Tensorflow", color: "#61dafb" },
            { name: "LSTM with Attention", color: "#3178c6" },
        ]
    },
    {
        title: "Sentiment Analysis",
        description: "Utilizing Naive Bayes model for sentiment analysis task.",
        imageUrl: "/images/sentiment-analysis.jpg",
        githubUrl: "https://github.com/hazem-walied/NLP_Specialization/tree/master/NLP_Specialization/Course_1/Sentimant_Analysis",
        technologies: [
            { name: "nltk", color: "#61dafb" },
            { name: "Tensorflow", color: "#3178c6" },
            { name: "Naive Bayes", color: "#339933" }
        ]
    },
    {
        title: "Machine Learning Blueprints",
        description: "Implementations of various machine learning models built from the ground up, without using high-level machine learning libraries.",
        imageUrl: "/images/bp.webp",
        githubUrl: "https://github.com/hazem-walied/MachineLearning_Blueprints/tree/master",
        technologies: [
            { name: "Python", color: "#61dafb" },
            { name: "Numpy", color: "#3178c6" },
            { name: "Pandas", color: "#339933" }
        ]
    },
    
];

export default function Projects() {
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
                        Featured Projects
                        <span className={styles.headerAccent}>My Work</span>
                    </h1>
                    <p className={styles.subheader}>
                        A collection of projects that showcase my skills and passion for development
                    </p>
                </div>
                
                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}