import  { useEffect, useState } from 'react';

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/allInformation')
      .then((response) => response.json())
      .then((data) => {
        setToys(data);
      })
      .catch((error) => {
        console.error('Error fetching toy data:', error);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">All Toys</h2>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Seller Name</th>
            <th className="px-4 py-2">Sub-category</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Rating</th>
            <th className="px-4 py-2">Available Quantity</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <tr key={toy._id}>
              <td className="px-4 py-2">{toy.name}</td>
              <td className="px-4 py-2">{toy.sellerName}</td>
              <td className="px-4 py-2">{toy.subcategory}</td>
              <td className="px-4 py-2">{toy.price}</td>
              <td className="px-4 py-2">{toy.rating}</td>
              <td className="px-4 py-2">{toy.availableQuantity}</td>
              <td className="px-4 py-2">
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
