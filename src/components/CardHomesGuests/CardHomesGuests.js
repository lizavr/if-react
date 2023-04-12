/* eslint-disable react/prop-types */
import React from 'react';


import './CardHomesGuests.css';

export const CardHomesGuests = ({imageUrl, name, city, country}) => (
  <div className="place__card">
    <img className="card__img" src={imageUrl} alt={name}/>
    <div className="card__title">{name}</div>
    <div className="card__place">{city}, {country}</div>
  </div>

);

