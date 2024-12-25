import styles from './page.module.css';
import SkillCard from "../components/SkillCard";
import Navbar from '../components/Navbar';
import Footer from "./../components/Footer";

export default function Skills() {
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
                        Technical Expertise
                        <span className={styles.headerAccent}>Skills & Capabilities</span>
                    </h1>
                    <p className={styles.subheader}>
                        Crafting digital solutions with cutting-edge technologies
                    </p>
                </div>
                
                <div className={styles.skillsContainer}>
                    <div className={styles.skillsGrid}>
                    <SkillCard
                            imageSrc="/images/py.png" 
                            progress={100} 
                            stars={5}
                            title="Python" 
                        />
                        <SkillCard
                            imageSrc="/images/cpp.png"
                            progress={100} 
                            stars={5}
                            title="C++"  
                        />
                        <SkillCard
                            imageSrc="/images/pytorch.webp"
                            progress={80} 
                            stars={4}
                            title="PyTorch"  
                        />
                        <SkillCard
                            imageSrc="/images/tf.png" 
                            progress={80} 
                            stars={4}
                            title="TensorFlow"  
                        />
                        <SkillCard
                            imageSrc="/images/hf.png"
                            progress={80} 
                            stars={4}
                            title="Hugging-face"  
                        />
                        <SkillCard
                            imageSrc="/images/langchain.png"
                            progress={80} 
                            stars={4}
                            title="Langchain"  
                        />
                        <SkillCard
                            imageSrc="/images/np.png"
                            progress={100} 
                            stars={5}
                            title="Numpy"  
                        />
                        <SkillCard
                            imageSrc="/images/sklearn.png"
                            progress={80} 
                            stars={4}
                            title="Scikit-learn"  
                        />
                        <SkillCard
                            imageSrc="/images/pd.png"
                            progress={80} 
                            stars={4}
                            title="Pandas"  
                        />
                        <SkillCard
                            imageSrc="/images/sql.png"
                            progress={80} 
                            stars={4}
                            title="SQL"  
                        />
                        <SkillCard
                            imageSrc="/images/java.png"
                            progress={100} 
                            stars={5}
                            title="Java"  
                        />
                        <SkillCard
                            imageSrc="/images/c.png"
                            progress={80} 
                            stars={4}
                            title="C"  
                        />
                         <SkillCard
                            imageSrc="/images/react.webp"
                            progress={80} 
                            stars={4}
                            title="React.js" 
                        />
                        <SkillCard
                            imageSrc="/images/js.png"
                            progress={80} 
                            stars={4}
                            title="Java-script" 
                        />
                        <SkillCard
                            imageSrc="/images/html.png"
                            progress={100} 
                            stars={5}
                            title="HTML5"  
                        />
                        <SkillCard
                            imageSrc="/images/css.png"
                            progress={100} 
                            stars={5}
                            title="CSS" 
                        />
                        <SkillCard
                            imageSrc="/images/csharp.png"
                            progress={60} 
                            stars={3}
                            title="C#"  
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}