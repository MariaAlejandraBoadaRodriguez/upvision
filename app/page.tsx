"use client";

import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import styles from './home.module.css';

export default function Home() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleIngresar = () => {
    // Añade la clase de animación al contenedor
    if (containerRef.current) {
      containerRef.current.classList.add(styles.slideUp);
    }
    // Esperar a que termine la animación y luego redirigir
    setTimeout(() => {
      router.push('/dashboard');
    }, 800); // Espera de 800ms para sincronizar con la duración de la animación
  };

  return (
    <div
      ref={containerRef}
      className={styles.container}
    >
      <h1 className="text-4xl font-bold">Upvision</h1>
      <p className="text-lg mt-4 text-center">
        Plataforma para conectar emprendedores con patrocinadores y facilitar la financiación de proyectos innovadores en Colombia.
      </p>
      <button
        onClick={handleIngresar}
        className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition"
      >
        Ingresar
      </button>
    </div>
  );
}
