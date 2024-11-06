// content.tsx
"use client";

import { useState } from 'react';
import styles from './layout.module.css';
import { Project } from './types';

interface ContentProps {
  projects: Project[];
}

const Content = ({ projects }: ContentProps) => {
  console.log("Projects in Content:", projects);
  const [flipped, setFlipped] = useState<{ [key: number]: boolean }>({});

  const handleFlip = (projectId: number) => {
    setFlipped((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  return (
    <div className={styles.projectGrid}>
      {projects.map((project) => (
        <div key={project.id} className={`${styles.projectCard} ${flipped[project.id] ? styles.flipped : ''}`}>
          <div className={styles.projectCardInner} onClick={() => handleFlip(project.id)}>
            {/* Front Side */}
            <div className={styles.projectCardFront}>
              <h3>{project.name}</h3>
              <video width="100%" height="100%" controls>
                <source src={project.video} type="video/mp4" />
                Tu navegador no soporta videos.
              </video>
            </div>
            {/* Back Side */}
            <div className={styles.projectCardBack}>
              <p>{project.description}</p>
              <button onClick={() => handleFlip(project.id)}>Volver</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
