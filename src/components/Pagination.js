import React, { useEffect, useState } from "react";
import axios from "axios";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const usersPerPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(response.data);
        setUsers(response.data);

        const total = Math.ceil(response.data.length / usersPerPage);
        setTotalPages(total);

        const startIndex = (currentPage - 1) * usersPerPage;
        const endIndex = startIndex + usersPerPage;
        setUsers(response.data.slice(startIndex, endIndex));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Call the asynchronous function directly
  }, [currentPage, usersPerPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="m-3 p-3 bg-green-400 w-6/12 my-10 mx-auto text-center">
      <h1 className="p-5 m-5 text-3xl">Client side pagination</h1>
      <h1 className="font-bold text-2xl">List of Users</h1>
      <ul className="m-3 p-3 bg-green-200">
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <p className="p-3 m-3">
        Page {currentPage} of {totalPages}
      </p>

      <button
        className="p-2 m-2 bg-blue-300 border hover:border-black"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous Page
      </button>
      <button
        className="ms-2 p-2 m-2 bg-blue-300 border hover:border-black"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next Page
      </button>
    </div>
  );
};

export default Pagination;
