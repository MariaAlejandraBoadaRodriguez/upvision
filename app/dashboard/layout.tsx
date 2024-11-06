// layout.tsx
import '../globals.css'; // Importa los estilos globales
import Header from './header';
import Footer from './footer';
import Content from './content';
import styles from './layout.module.css';
import { Project } from './types';

interface LayoutProps {
  projects: Project[];
}

export default function Layout({ projects }: LayoutProps) {
  console.log("Projects in Layout:", projects); // Verifica que `projects` esté definido
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.content}>
        <Content projects={projects} />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
