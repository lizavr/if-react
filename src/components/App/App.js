import React from 'react';

import './App.css';


import {Container} from '../Container';
import {Title} from '../Title';
import {data} from './data';
import {CardHomesGuests} from '../CardHomesGuests';

function App() {
  return (
    <section className="homes homes__loves">
      <Container>
        <Title> Homes guests loves</Title>
        <div className="places">
          {data.map((item) => (
            <CardHomesGuests key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default App;
