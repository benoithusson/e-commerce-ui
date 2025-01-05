// Ajouter use client pour indiquer que c'est un composant côté serveur
"use client";
import styles from './HeroSection.module.scss';
import { useState, useEffect } from 'react';
import Button from '../Button/Button';

// Dans un composant, si j'essaye de mettre des données dans mon composant avec fetch, la requête fetch peux retourner une réponse null ou vide
// C'est parce que j'essaye d'accéder aux data mais data elles sont null ou undefined à ce moment-là car elles ne sont pas encore chargées et cela génère une erreur 
// J'essaye donc d'afficher quelque chose qui est null ce qui bloque l'app et affiche l'erreur.
// Je dois donc gérer le loading time des données
// IMPORTANT
// Sans cette gestion du loading, les données que l'on chercher à récupérer n’ont pas le temps de se charger
// Et on essaye d’afficher quelque chose qui est « null » et c'est ce qui provoque l’erreur et le bloquage
// Il faut donc prévoir un cas pour gérer le petit laps de temps ou l’on a pas encore les données 


export default function HeroSection () {

  const [data, setData] = useState(null);
  // loading est à true car les données sont en cours de récupération
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/data.json')
      .then((response) => {
        if(!response.ok) {
          throw new Error ('ERROR');
        }
        return response.json()
      })
      .then((data) => {
        // On récupére les données
        setData(data.hero_section[0]);
        // Une fois les données récupérées, le chargement est terminé = on met setLoading à false
        setLoading(false);
      })
      .catch((error) => {
        // catch() génére un objet error qui contient une propriété `message`
        setError(error.message);
        // En cas d'erreur, le chargement est aussi terminé = on met setLoading à false
        setLoading(false);
        console.error('Error loading JSON data:', error);
      });
    }, []);

    // Si loading = true, les données sont en train de charger et je display un message
    if (loading) {
      return <div>Loading...</div>;
    }
    
    // Si error = je display un message d'error
    if (error) {
      return <div>Error: {error}</div>;
    }

  return (
    <section className={styles['hero-section-container']}>
      <div className={styles['hero-section-text']}>
        <h1>{data.text}</h1>
        <Button 
          label={"Shop now"}
          onClick={() => console.log("Hello")}
        />
      </div>
    </section>
  );
};