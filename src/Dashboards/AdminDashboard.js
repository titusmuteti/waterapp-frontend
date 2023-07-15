import React, { useEffect, useState } from 'react';
import { BiTrash } from 'react-icons/bi';

function AdminDashboard() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  useEffect(() => {
    // Fetch data from the backend API
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Make the API request
      const response = await fetch('https://makawasco-backend.onrender.com/clients');
      const jsonData = await response.json();
      // Update the data state with the received data
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (index) => {
    try {
      // Make the delete request to the backend API
      await fetch(`https://makawasco-backend.onrender.com/clients/${index}`, {
        method: 'DELETE',
      });
      // Update the data state by filtering out the deleted record
      const updatedData = data.filter((item, i) => i !== index);
      setData(updatedData);
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the indexes of the records to be displayed on the current page
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / recordsPerPage);

  return (
    <div className="container">
      <div>
        <table className="table table-bordered">
          <thead className="thead-dark sticky-top">
            <tr>
              <th>#</th>
              <th style={{ width: '150px' }}>First Name</th>
              <th style={{ width: '150px' }}>Last Name</th>
              <th style={{ width: '250px' }}>Email</th>
              <th style={{ width: '200px' }}>Phone Number</th>
              <th style={{ width: '100px' }}>Date Read</th>
              <th style={{ width: '100px' }}>Previous Reading</th>
              <th style={{ width: '100px' }}>Current Reading</th>
              <th style={{ width: '250px' }}>Read By</th>
              <th style={{ width: '100px' }}>Balance</th>
              <th style={{ width: '100px' }}>Payment Status</th>
              <th style={{ width: '100px' }}>Date Paid</th>
              <th style={{ width: '100px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone_number}</td>
                <td>{item.date_read}</td>
                <td>{item.previous_reading}</td>
                <td>{item.current_reading}</td>
                <td>{item.balance}</td>
                <td>{item.payment_status}</td>
                <td>
                  {item.date_paid}
                  <button onClick={() => handleDelete(index)} className="btn btn-danger ml-2">
                    <BiTrash />
                    <span className="ml-1">Delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        {currentPage > 1 && (
          <button onClick={handlePreviousPage} className="btn btn-primary">
            Previous
          </button>
        )}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`btn ${currentPage === index + 1 ? 'btn-primary' : 'btn-secondary'}`}
          >
            {index + 1}
          </button>
        ))}
        {currentRecords.length === recordsPerPage && (
          <button onClick={handleNextPage} className="btn btn-primary">
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
  