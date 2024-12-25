import { FC } from 'react';
import Image from 'next/image';
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import styles from './ExperienceCard.module.css';

interface ExperienceCardProps {
    logo: string;
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string[];
    achievements?: string[];
    isLeft?: boolean;
}

const ExperienceCard: FC<ExperienceCardProps> = ({
    logo,
    company,
    role,
    startDate,
    endDate,
    location,
    description,
    achievements,
    isLeft
}) => {
    return (
        <div className={`${styles.card} ${isLeft ? styles.left : styles.right}`}>
            <div className={styles.cardContent}>
                <div className={styles.logoSection}>
                    <Image
                        src={logo}
                        alt={company}
                        width={50}  
                        height={50} 
                        className={styles.logo}
                    />
                    <div className={styles.companyInfo}>
                        <h3 className={styles.company}>{company}</h3>
                        <h4 className={styles.role}>{role}</h4>
                    </div>
                </div>

                <div className={styles.details}>
                    <div className={styles.detailItem}>
                        <FaCalendarAlt className={styles.icon} />
                        <span>{startDate} - {endDate}</span>
                    </div>
                    <div className={styles.detailItem}>
                        <FaMapMarkerAlt className={styles.icon} />
                        <span>{location}</span>
                    </div>
                </div>

                <div className={styles.description}>
                    {description.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>

                {achievements && achievements.length > 0 && (
                    <div className={styles.achievements}>
                        <h5>Key Achievements:</h5>
                        <ul>
                            {achievements.map((achievement, index) => (
                                <li key={index}>{achievement}</li>
                            ))}
                        </ul>
                    </div>
                )}

            </div>
        </div>
    );
};

export default ExperienceCard;