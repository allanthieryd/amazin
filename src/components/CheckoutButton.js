// components/CheckoutButton.js
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function CheckoutButton({ items }) {
  const [loading, setLoading] = useState(false);

  const handleClick = async (event) => {
    event.preventDefault();
    setLoading(true);

    const stripe = await stripePromise;

    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items }),
    });

    const session = await response.json();

    if (response.ok) {
      const { error } = await stripe.redirectToCheckout({ sessionId: session.id });
      if (error) {
        console.error('Error:', error);
      }
    } else {
      console.error('Error:', session.error);
    }

    setLoading(false);
  };

  return (
    <button
      role="link"
      onClick={handleClick}
      disabled={loading}
      className={`bg-blue-500 text-white py-2 px-4 rounded ${loading ? 'opacity-50' : ''}`}
    >
      {loading ? 'Loading...' : 'Payer'}
    </button>
  );
}
