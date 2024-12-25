import { FaGithub } from 'react-icons/fa';
import styles from './ProjectCard.module.css';
import Image from 'next/image';

interface Technology {
    name: string;
    color: string;
}

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    githubUrl: string;
    technologies: Technology[];
}

const ProjectCard = ({ title, description, imageUrl, githubUrl, technologies }: ProjectCardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className={styles.image}
                />
                <div className={styles.overlay}>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                        <FaGithub size={40} />
                        <span>View on GitHub</span>
                    </a>
                </div>
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <div className={styles.technologies}>
                    {technologies.map((tech, index) => (
                        <span 
                            key={index} 
                            className={styles.tech}
                            style={{ backgroundColor: `${tech.color}20`, color: tech.color }}
                        >
                            {tech.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;