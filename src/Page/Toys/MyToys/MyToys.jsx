import { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

const MyToys = () => {
  const [myToysData, setMyToysData] = useState([]);

  useEffect(() => {
    const email = 'example@example.com'; // Replace with the desired email

    fetch(`http://localhost:5000/myToys/${email}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMyToysData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleUpdate = (toyId) => {
    // Handle update logic here
    console.log(`Updating toy with ID: ${toyId}`);
  };

  const handleDelete = (toyId) => {
    // Handle delete logic here
    console.log(`Deleting toy with ID: ${toyId}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">My Toys Information</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-center">Toy Name</th>
              <th className="p-2 text-center">Sub-category</th>
              <th className="p-2 text-center">Price</th>
              <th className="p-2 text-center">Available Quantity</th>
              <th className="p-2 text-center">SellerName</th>
              <th className="p-2 text-center">Update</th>
              <th className="p-2 mr-2 text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {myToysData.map((item, index) => (
              <tr key={index}>
                <td className="p-2 text-center">{item.toyName}</td>
                <td className="p-2 text-center">{item.subCategory}</td>
                <td className="p-2 text-center">${item.price}</td>
                <td className="p-2 text-center">{item.availableQuantity}</td>
                <td className="p-2 text-center">{item.sellerName}</td>
                <td className="p-2 text-center">
                  <button
                    className="text-sm bg-black text-white rounded-md py-2 px-3 mb-2"
                    onClick={() => handleUpdate(item._id)}
                  >
                    Update
                  </button>
                </td>
                <td className="p-2 text-center">
                  <button
                    className="text-sm bg-black text-white rounded-md py-2 px-3 mb-2"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
