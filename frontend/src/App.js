import React, { useState } from 'react';
import './App.css';
import api from './services/api'


function App() {
  const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await api.post('/sessions', { email });
     
  }


  return (
    <div className="container">
      <img src="" alt=""/>

      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para a sua empresa.
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail *</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}  />

          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
