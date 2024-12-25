import styles from './page.module.css';
import CourseCard from './../components/CourseCard';
import Navbar from './../components/Navbar';
import Footer from "./../components/Footer";

const courses = [
    {
        title: "Natural Language Processing Specialization",
        platform: {
            name: "Deeplearning.ai",
            logo: "/images/dlai2.png"
        },
        certificateUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/HDSMSVW49C92",
        completionDate: "July 2024",
        duration: "110 hours",
        skills: ["NLP with Classification and Vector Spaces", "Probabilistic Models", "Sequence Models","Attention Models" ]
    },
    {
        title: "Natural Language Processing with Attention Models",
        platform: {
            name: "Coursera",
            logo: "/images/coursera.png"
        },
        certificateUrl: "https://www.coursera.org/account/accomplishments/certificate/AZTGAYKZY4ZU",
        completionDate: "July 2024",
        duration: "26 hours",
        skills: ["T5+BERT Models", "Neural Machine Translation", "Question Answering","Attention Models","Text Summarization" ]
    },
    {
        title: "Natural Language Processing with Sequence Models",
        platform: {
            name: "Coursera",
            logo: "/images/coursera.png"
        },
        certificateUrl: "https://www.coursera.org/account/accomplishments/certificate/BKTEZ5B8XSMA",
        completionDate: "July 2024",
        duration: "21 hours",
        skills: ["Word Embedding", "Siamese Networks", "Sentiment with Neural Nets","Natural Language Generation","Named-Entity Recognition" ]
    },
    {
        title: "Natural Language Processing with Probabilistic Models",
        platform: {
            name: "Coursera",
            logo: "/images/coursera.png"
        },
        certificateUrl: "https://www.coursera.org/account/accomplishments/certificate/EJSJMJZHRVHX",
        completionDate: "June 2024",
        duration: "30 hours",
        skills: ["N-gram Language Models", "Autocorrect", "Parts-of-Speech Tagging","Word2vec"]
    },
    {
        title: "Natural Language Processing with Classification & Vector Spaces",
        platform: {
            name: "Coursera",
            logo: "/images/coursera.png"
        },
        certificateUrl: "https://www.coursera.org/account/accomplishments/certificate/CAZJG74LHSX2",
        completionDate: "June 2024",
        duration: "33 hours",
        skills: ["Machine Translation", "Locality-Sensitive Hashing", "Sentiment Analysis","Word Embeddings","Vector Space Models"]
    },
    {
        title: "Deep Learning Specialization",
        platform: {
            name: "Deeplearning.ai",
            logo: "/images/dlai2.png"
        },
        certificateUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/N9X5GZQUKQCG",
        completionDate: "June 2024",
        duration: "125 hours",
        skills: ["Neural Networks and Deep Learning", "Hyperparameter Tuning, Regularization and Optimization", "Convolutional Neural Networks","Sequence Models"]
    },
    {
        title: "Sequence Models",
        platform: {
            name: "Coursera",
            logo: "/images/coursera.png"
        },
        certificateUrl: "https://www.coursera.org/account/accomplishments/certificate/YPN2CRD3RFMY",
        completionDate: "June 2024",
        duration: "37 hours",
        skills: ["Gated Recurrent Unit (GRU)", "Recurrent Neural Network", "Natural Language Processing","Long Short Term Memory (LSTM)","Attention Models"]
    },
    {
        title: "Convolutional Neural Networks",
        platform: {
            name: "Coursera",
            logo: "/images/coursera.png"
        },
        certificateUrl: "https://www.coursera.org/account/accomplishments/certificate/6G3ZK2F3X85M",
        completionDate: "April 2024",
        duration: "35 hours",
        skills: ["Convolutional Neural Network", "Deep Learning", "Tensorflow","Facial Recognition System","Object Detection and Segmentation"]
    },
    {
        title: "Structuring Machine Learning Projects",
        platform: {
            name: "Coursera",
            logo: "/images/coursera.png"
        },
        certificateUrl: "https://www.coursera.org/account/accomplishments/certificate/G8CGEPL4PPPQ",
        completionDate: "March 2024",
        duration: "6 hours",
        skills: ["Machine Learning", "Deep Learning", "Multi-Task Learning","Inductive Transfer","Decision-Making"]
    },
    {
        title: "Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization",
        platform: {
            name: "Coursera",
            logo: "/images/coursera.png"
        },
        certificateUrl: "https://www.coursera.org/account/accomplishments/certificate/9D4JJ8MBQP9K",
        completionDate: "March 2024",
        duration: "23 hours",
        skills: ["Optimization Algorithms", "Practical Aspects of Deep Learning", "Hyperparameter tuning","Mathematical Optimization"]
    },
    {
        title: "Machine Learning With Python",
        platform: {
            name: "IBM",
            logo: "/images/ibm.png"
        },
        certificateUrl: "https://www.coursera.org/account/accomplishments/certificate/PTG7UNC6NPLJ",
        completionDate: "October 2023",
        duration: "13 hours",
        skills: ["Machine Learning", "Regression", "Hierarchical Clustering", "Classification","SciPy and scikit-learn"]
    },
    {
        title: "Machine Learning Specialization",
        platform: {
            name: "Deeplearning.ai",
            logo: "/images/dlai2.png"
        },
        certificateUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/G49E2K9DM6VE",
        completionDate: "September 2023",
        duration: "94 hours",
        skills: ["Regression and Classification", "Advanced Learning Algorithms", "Recommenders and Reinforcement Learning"]
    },
    {
        title: "Unsupervised Learning, Recommendars, Reimforcement Learning",
        platform: {
            name: "Coursera",
            logo: "/images/coursera.png"
        },
        certificateUrl: "https://www.coursera.org/account/accomplishments/certificate/SRZDZJM6HWZS",
        completionDate: "September 2023",
        duration: "27 hours",
        skills: ["Unsupervised Learning", "Anomaly Detection", "Reinforcement Learning","Collaborative Filtering","Recommender Systems"]
    },
    {
        title: "Advanced Learning Algorithms",
        platform: {
            name: "Coursera",
            logo: "/images/coursera.png"
        },
        certificateUrl: "https://www.coursera.org/account/accomplishments/certificate/ERJVK9Q22G7T",
        completionDate: "August 2023",
        duration: "34 hours",
        skills: ["Tensorflow", "Advice for Model Development", "Artificial Neural Network","Xgboost","Tree Ensembles"]
    },
    {
        title: "Supervised Machine Learning: Regression and Classification",
        platform: {
            name: "Coursera",
            logo: "/images/coursera.png"
        },
        certificateUrl: "https://www.coursera.org/account/accomplishments/certificate/JK25T8XHZUZA",
        completionDate: "July 2023",
        duration: "33 hours",
        skills: ["Linear Regression", "Gradient Descent", "Regularization to Avoid Overfitting","Logistic Regression for Classification"]
    },
    
];

export default function Courses() {
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
                        Learning Journey
                        <span className={styles.headerAccent}>Courses & Certifications</span>
                    </h1>
                    <p className={styles.subheader}>
                        A collection of courses that have shaped my technical expertise
                    </p>
                </div>
                
                <div className={styles.coursesGrid}>
                    {courses.map((course, index) => (
                        <CourseCard key={index} {...course} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}