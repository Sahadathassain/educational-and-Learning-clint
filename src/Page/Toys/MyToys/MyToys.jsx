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
    // Prompt the user for updated information
    const updatedPrice = prompt('Enter the updated price:');
    const updatedQuantity = prompt('Enter the updated available quantity:');
    const updatedRating = prompt('Enter the updated rating:');

    // Create the updated toy object
    const updatedToy = {
      price: parseFloat(updatedPrice),
      availableQuantity: parseInt(updatedQuantity),
      rating: parseInt(updatedRating),
    };

    // Send the updated toy object to the server
    fetch(`http://localhost:5000/myToys/${toyId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedToy),
    })
      .then((response) => {
        if (response.ok) {
          console.log(`Toy with ID ${toyId} updated successfully`);
          // Update the toy in the state
          setMyToysData((prevData) =>
            prevData.map((toy) => {
              if (toy._id === toyId) {
                return { ...toy, ...updatedToy };
              }
              return toy;
            })
          );
        } else {
          throw new Error('Failed to update toy');
        }
      })
      .catch((error) => console.error(error));
  };

  const handleDelete = (toyId) => {
    fetch(`http://localhost:5000/myToys/${toyId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          console.log(`Toy with ID ${toyId} deleted successfully`);
          // Remove the deleted item from the state
          setMyToysData((prevData) => prevData.filter((item) => item._id !== toyId));
        } else {
          throw new Error('Failed to delete toy');
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4 text-center font-bold mb">My Toys Information</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-center">Toy Name</th>
              <th className="p-2 text-center">Sub-category</th>
              <th className="p-2 text-center">Price</th>
              <th className="p-2 text-center">Available Quantity</th>
              <th className="p-2 text-center">Rating</th>
              <th className="p-2 text-center">Update</th>
              <th className="p-2 mr-2 text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {myToysData.map((item) => (
              <tr key={item._id}>
                <td className="p-2 text-center">{item.toyName}</td>
                <td className="p-2 text-center">{item.subCategory}</td>
                <td className="p-2 text-center">${item.price}</td>
                <td className="p-2 text-center">{item.availableQuantity}</td>
                <td className="p-2 text-center">{item.toyRating}</td>
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
