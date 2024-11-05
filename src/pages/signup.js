// pages/signup.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = (e) => {
    e.preventDefault();
    // Remplacez par votre logique d'inscription
    if (email && password) {
      // Simulation d'une inscription réussie
      alert('Compte créé avec succès !');
      router.push('/login'); // Redirige vers la page de connexion
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white shadow-lg rounded-lg p-8" onSubmit={handleSignup}>
        <h2 className="text-2xl font-semibold mb-4">Créer un nouveau compte</h2>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border rounded w-full py-2 px-3"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="password">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            className="border rounded w-full py-2 px-3"
            placeholder="Votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          S&apos;inscrire
        </button>
      </form>
    </div>
  );
}
