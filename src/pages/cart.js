// pages/cart.js
import CheckoutButton from '../components/CheckoutButton';

export default function Cart() {
  const items = [
    {
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'Produit 1',
          description: 'Description du Produit 1',
        },
        unit_amount: 2000, // prix en cents (soit $20.00)
      },
      quantity: 1,
    },
    {
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'Produit 2',
          description: 'Description du Produit 2',
        },
        unit_amount: 1500, // prix en cents (soit $15.00)
      },
      quantity: 2,
    },
    {
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'Produit 3',
          description: 'Description du Produit 3',
        },
        unit_amount: 1000, // prix en cents (soit $10.00)
      },
      quantity: 1,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-8">Votre panier</h1>
      <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6 space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <h2 className="text-xl font-medium">{item.price_data.product_data.name}</h2>
            <p className="text-gray-600">{item.price_data.product_data.description}</p>
            <p className="text-gray-700 font-semibold">
              Prix: ${(item.price_data.unit_amount / 100).toFixed(2)}
            </p>
            <p className="text-gray-600">Quantité: {item.quantity}</p>
          </div>
        ))}
        <div className="flex justify-center mt-6">
          <CheckoutButton items={items} />
        </div>
      </div>
    </div>
  );
}
