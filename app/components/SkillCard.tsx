"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./SkillCard.module.css";

type SkillCardProps = {
  imageSrc: string; // Path to the image
  progress: number; // Final progress percentage (0-100)
  stars: number;  // Number of stars (0-5)
  title: string; 
};

const SkillCard: React.FC<SkillCardProps> = ({ imageSrc, progress, stars, title }) => {
  const [currentProgress, setCurrentProgress] = useState(0);
  const circumference = 2 * Math.PI * 55; // Updated from 45
  const strokeDashoffset =
    circumference - (currentProgress / 100) * circumference;

  useEffect(() => {
    // Increment progress gradually for animation
    const animation = setInterval(() => {
      setCurrentProgress((prev) => {
        if (prev >= progress) {
          clearInterval(animation); // Stop animation when target is reached
          return progress;
        }
        return prev + 1; // Increment progress
      });
    }, 10); // Adjust this value for speed

    return () => clearInterval(animation); // Cleanup interval on unmount
  }, [progress]);

  return (
    <div className={styles.card}>
      <div className={styles.progressCircle}>
      <svg width="130" height="130"> {/* Updated from 110 */}
          <circle
            cx="65"  
            cy="65"  
            r="55"  
            stroke="#000000"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="65"  
            cy="65" 
            r="55"   
            stroke="#32CD32"
            strokeWidth="10"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 0.5s linear",
            }}
          />
        </svg>
        <div className={styles.imageContainer}>
          <Image
            src={imageSrc}
            alt="Skill"
            width={70}
            height={70}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.stars}>
        {Array.from({ length: 5 }, (_, index) => (
          <span
            key={index}
            style={{ color: index < stars ? "#FFD700" : "#ccc" }}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;








