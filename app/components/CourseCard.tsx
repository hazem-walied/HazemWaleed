import { FaCertificate, FaClock } from 'react-icons/fa';
import styles from './CourseCard.module.css';
import Image from 'next/image';

interface CourseCardProps {
    title: string;
    platform: {
        name: string;
        logo: string;
    };
    certificateUrl: string;
    completionDate: string;
    duration: string;
    skills: string[];
}

const CourseCard = ({ 
    title, 
    platform, 
    certificateUrl, 
    completionDate,
    duration,
    skills 
}: CourseCardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                    {/* Header Section with Logo and Title */}
                    <div className={styles.headerSection}>
                        <div className={styles.logoContainer}>
                            <Image
                                src={platform.logo}
                                alt={platform.name}
                                width={120}
                                height={120}
                                className={styles.logo}
                            />
                        </div>
                        <div className={styles.titleContainer}>
                            <h3 className={styles.title}>{title}</h3>
                            <p className={styles.institution}>{platform.name}</p>
                        </div>
                    </div>

                    {/* Duration */}
                    <div className={styles.duration}>
                        <FaClock size={14} />
                        <span>{duration}</span>
                    </div>

                    {/* Skills */}
                    <div className={styles.skillsContainer}>
                        {skills.map((skill, index) => (
                            <span key={index} className={styles.skill}>
                                {skill}
                            </span>
                        ))}
                    </div>

                    {/* Completion Date */}
                    <div className={styles.dateSection}>
                        Completed: {completionDate}
                    </div>
                </div>

                <div className={styles.cardBack}>
                    <a 
                        href={certificateUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.certificateLink}
                    >
                        <FaCertificate size={40} />
                        <span>View Certificate</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;