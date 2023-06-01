import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch('https://educational-and-learning-server-sahadathassain.vercel.app/allData')
            .then((response) => response.json())
            .then((data) => {
                setToys(data);
            })
            .catch((error) => {
                console.error('Error fetching toy data:', error);
            });
    }, []);
    const handleSearch = () => {
        fetch(`https://educational-and-learning-server-sahadathassain.vercel.app/alltoyByText/${searchText}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setToys(data);
          });
      };

    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">All Toys</h2>
            <div className=" text-center gap-2 m-5">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="p-3 border-solid rounded border-blue-600 "
            placeholder='Search by toy name'
          />{" "}
          <button className='bg-green-400 p-3 hover:bg-green-600 text-white px-4 py-2 rounded' onClick={handleSearch}>Search</button>
        </div>
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
                <tbody className=' '>
                    {toys.map((toy) => (
                        <tr className='mx-9' key={toy._id}>
                            <td className=" px-4 py-2 text-center">{toy.toyName}</td>
                            <td className=" px-4 py-2 text-center">{toy.sellerName}</td>
                            <td className=" px-4 py-2 text-center">{toy.subCategory}</td>
                            <td className=" px-4 py-2 text-center">{toy.price}</td>
                            <td className=" px-4 py-2 text-center ">{toy.toyRating}</td>
                            <td className=" px-4 py-2 text-center ">{toy.availableQuantity}</td>
                            <td className=" px-4 py-2 text-center">
                                <Link to={`/viewdetails/${toy._id}`}>
                                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded" >
                                   
                                        View Details
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;
