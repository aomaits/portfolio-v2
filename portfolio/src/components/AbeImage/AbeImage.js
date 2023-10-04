import React from 'react';
import AbePhoto from '../../assets/Abe.jpg'
import '../AbeImage/AbeImage.css'

export default function AbeImage() {
  return (
    <div class="photoHolder">
      <img class="abePhoto" src={AbePhoto} alt="Abe Omaits smiling, in business-casual attire"></img>
    </div>
  );
}