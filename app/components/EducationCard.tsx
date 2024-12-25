import { FC } from 'react';
import Image from 'next/image';
import { FaCalendarAlt, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';
import styles from './EducationCard.module.css';

interface EducationCardProps {
    logo: string;
    institution: string;
    major: string;
    gpa: string;
    startDate: string;
    endDate: string;
    location: string;
    isLeft?: boolean;
}

const EducationCard: FC<EducationCardProps> = ({
    logo,
    institution,
    major,
    gpa,
    startDate,
    endDate,
    location,
    isLeft
}) => {
    return (
        <div className={`${styles.card} ${isLeft ? styles.left : styles.right}`}>
            <div className={styles.cardContent}>
                {/* Header with Logo and Institution */}
                <div className={styles.headerSection}>
                    <div className={styles.logoContainer}>
                        <Image
                            src={logo}
                            alt={institution}
                            width={50}
                            height={50}
                            className={styles.logo}
                        />
                    </div>
                    <div className={styles.titleContainer}>
                        <h3 className={styles.institution}>{institution}</h3>
                        <div className={styles.majorContainer}>
                            <FaGraduationCap className={styles.icon} />
                            <p className={styles.major}>{major}</p>
                        </div>
                    </div>
                </div>

                {/* Details Section */}
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

                {/* GPA */}
                <div className={styles.gpaContainer}>
                    <span className={styles.gpaLabel}>GPA:</span>
                    <span className={styles.gpaValue}>{gpa}</span>
                </div>
            </div>
        </div>
    );
};

export default EducationCard;