// import { useState } from 'react';


// const MyToys = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     // Perform search logic here
//   };

//   const handleDelete = () => {
//     // Delete job logic here
//   };

//   // Dummy data for jobs
//   const jobs = [
//     { id: 1, title: 'Job 1', category: 'Category 1', vacancy: 5, salary: '$5000' },
//     { id: 2, title: 'Job 2', category: 'Category 2', vacancy: 3, salary: '$6000' },
//     { id: 3, title: 'Job 3', category: 'Category 3', vacancy: 2, salary: '$7000' },
//   ];

//   return (
//     <div className="my-jobs-container">
//       <h1 className="text-center p-4">ALL My Jobs</h1>
//       <div className="search-box p-2 text-center">
//         <input
//           type="text"
//           className="p-1"
//           value={searchTerm}
//           onChange={handleSearch}
//           placeholder="Search"
//         />
//         <button>Search</button>
//       </div>
//       <Table striped bordered hover className="container">
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Title</th>
//             <th>Category</th>
//             <th>Vacancy</th>
//             <th>Salary</th>
//             <th>Edit</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {jobs.map((job) => (
//             <tr key={job.id}>
//               <td>{job.id}</td>
//               <td>{job.title}</td>
//               <td>{job.category}</td>
//               <td>{job.vacancy}</td>
//               <td>{job.salary}</td>
//               <td>
//                 <button>Edit</button>
//               </td>
//               <td>
//                 <button onClick={() => handleDelete(job.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default MyToys;
