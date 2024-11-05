// pages/login.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    // Remplacez par votre logique de connexion
    if (email && password) {
      login(); // Met à jour l'état d'authentification
      router.push('/'); // Redirige vers la page d'accueil
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white shadow-lg rounded-lg p-8" onSubmit={handleLogin}>
        <h2 className="text-2xl font-semibold mb-4">Connexion</h2>
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
          Se connecter
        </button>
        <p className="mt-4 text-center">
          Vous n&apos;avez pas de compte ?{' '}
          <a href="/signup" className="text-blue-500 hover:underline">
            Créer un nouveau compte
          </a>
        </p>
      </form>
    </div>
  );
}
