import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">Amazin</h1>

        {/* Search bar */}
        <div className="flex items-center bg-gray-700 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search for products..."
            className="px-4 py-2 bg-gray-700 text-white focus:outline-none"
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="h-5 w-5 text-gray-400 mr-2" />
        </div>

        {/* Cart icon */}
        <div className="relative">
          <FontAwesomeIcon icon={faCartShopping} className="h-6 w-6 text-white cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full px-1">3</span>
        </div>
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={`https://via.placeholder.com/300?text=Product+${index + 1}`}
              alt={`Product ${index + 1}`}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Product {index + 1}</h2>
              <p className="text-gray-600">$29.99</p>
              <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-200">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
