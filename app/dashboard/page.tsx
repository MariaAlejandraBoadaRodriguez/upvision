// page.tsx
"use client";

import Layout from './layout';
import { Project } from './types';

const projects: Project[] = [
  { id: 1, name: 'Proyecto 1', video: '/videos/1.mp4', description: 'Este es un breve resumen del Proyecto 1...' },
  { id: 2, name: 'Proyecto 2', video: '/videos/2.mp4', description: 'Este es un breve resumen del Proyecto 2...' },
  { id: 3, name: 'Proyecto 3', video: '/videos/3.mp4', description: 'Este es un breve resumen del Proyecto 3...' },
  { id: 4, name: 'Proyecto 4', video: '/videos/4.mp4', description: 'Este es un breve resumen del Proyecto 4...' },
  { id: 5, name: 'Proyecto 5', video: '/videos/5.mp4', description: 'Este es un breve resumen del Proyecto 5...' },
  { id: 6, name: 'Proyecto 6', video: '/videos/6.mp4', description: 'Este es un breve resumen del Proyecto 6...' },
  { id: 7, name: 'Proyecto 7', video: '/videos/7.mp4', description: 'Este es un breve resumen del Proyecto 7...' },
  { id: 8, name: 'Proyecto 8', video: '/videos/8.mp4', description: 'Este es un breve resumen del Proyecto 8...' },
  { id: 9, name: 'Proyecto 9', video: '/videos/9.mp4', description: 'Este es un breve resumen del Proyecto 9...' },
  { id: 10, name: 'Proyecto 10', video: '/videos/10.mp4', description: 'Este es un breve resumen del Proyecto 10...' },
];

export default function Dashboard() {
  console.log("Projects in Dashboard:", projects); // Verifica que `projects` esté definido
  return <Layout projects={projects} />;
}