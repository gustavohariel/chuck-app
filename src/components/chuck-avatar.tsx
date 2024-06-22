import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export default function ChuckAvatar() {
  const images = ['/chuck-image.png', '/chuck-image2.png', '/chuck-image3.png'];

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  const randomImage = getRandomImage();

  return (
    <Avatar className="border">
      <AvatarImage src={randomImage} />
    </Avatar>
  );
}
