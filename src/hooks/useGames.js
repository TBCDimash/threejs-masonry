import { useState, useEffect } from 'react';

export function useGames(maxSize) {
  const [games, setGames] = useState([]);
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  useEffect(() => {
    (async () => {
      const card1 = new Array(20).fill({
        url: './img1.jpg',
        link: 'https://www.google.com/',
      });
      const card2 = new Array(20).fill({
        url: './img2.jpg',
        link: 'https://www.google.com/',
      });
      const card3 = new Array(20).fill({
        url: './img3.jpg',
        link: 'https://www.google.com/',
      });
      const card4 = new Array(20).fill({
        url: './img4.jpg',
        link: 'https://www.google.com/',
      });
      const card5 = new Array(20).fill({
        url: './img5.png',
        link: 'https://www.google.com/',
      });
      const cards = [...card1, ...card2, ...card3, ...card4, ...card5];
      shuffle(cards);
      const firstHalf = cards.slice(0, 54);
      const secondHalf = cards.slice(54, 98);
      const sprite = [
        {
          link: 'https://www.google.com/',
          url: './sprite.png',
          huge: true,
        },
      ];
      setGames([...firstHalf, ...sprite, ...secondHalf]);
    })();
  }, [maxSize, setGames]);

  return games;
}
