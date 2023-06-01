import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import UpdateToy from '../UpdateToy/UpdateToy';

const MyToys = () => {
  const [myToysData, setMyToysData] = useState([]);
  const [selectedToy, setSelectedToy] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  useEffect(() => {
    const email = 'example@example.com';

    fetch(`http://localhost:5000/myToys/${email}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMyToysData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleUpdateClick = (toy) => {
    setSelectedToy(toy);
    setShowModal(true);
  };

  const handleToyUpdate = (updatedToyData) => {
    const { _id: toyId } = selectedToy;
    console.log(selectedToy);

    return fetch(`http://localhost:5000/updateToy/${toyId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedToyData),
    })
      .then((response) => {
        if (response.ok) {
          console.log(`Toy with ID ${toyId} updated successfully`);
          setMyToysData((prevData) =>
            prevData.map((toy) => {
              if (toy._id === toyId) {
                return { ...toy, ...updatedToyData };
              }
              return toy;
            })
          );
          toast.success('Toy updated successfully');
        } else {
          throw new Error('Failed to update toy');
        }
      })
      .catch((error) => {
        console.error('Failed to update toy:', error);
        throw error;
      });
  };

  const handleSort = (field) => {
    let sortedData = [...myToysData];

    if (field === 'price') {
      if (sortBy === 'price' && sortOrder === 'asc') {
        // Sort by price in descending order
        sortedData.sort((a, b) => b.price - a.price);
        setSortOrder('desc');
      } else {
        // Sort by price in ascending order
        sortedData.sort((a, b) => a.price - b.price);
        setSortOrder('asc');
      }
      setSortBy('price');
      setMyToysData(sortedData);
    }
  };

  const handleDelete = (toyId) => {
    fetch(`http://localhost:5000/myToys/${toyId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          console.log(`Toy with ID ${toyId} deleted successfully`);
          setMyToysData((prevData) => prevData.filter((item) => item._id !== toyId));
          toast.success('Toy deleted successfully');
        } else {
          throw new Error('Failed to delete toy');
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="p-4">
      <div>
        <h1 className="text-3xl mb-4 text-center font-bold">My Toys Information</h1>
      </div>
      <div>
        <div className="flex   border-indigo-500 rounded  justify-center py-10 mt-6">
          <button
            className={`py-1 px-4 rounded-md ${
              sortBy === 'price' && sortOrder === 'asc' ? 'bg-indigo-500 text-white' : ''
            } focus:outline-none`}
            onClick={() => handleSort('price')}
          >
            Ascending
          </button>
          <button
            className={`py-1 px-4  ${
              sortBy === 'price' && sortOrder === 'desc' ? 'bg-indigo-500 text-white' : ''
            } focus:outline-none`}
            onClick={() => handleSort('price')}
          >
            Descending
          </button>
        </div>
      </div>
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
                    onClick={() => handleUpdateClick(item)}
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
      {showModal && (
        <UpdateToy toy={selectedToy} onClose={() => setShowModal(false)} onUpdate={handleToyUpdate} />
      )}
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default MyToys;
