import React, { useEffect, useState } from 'react';
import { BiTrash, BiEdit } from 'react-icons/bi';
import './AdminDashboard.css'

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
      const response = await fetch('https://makawasco-backend.onrender.com/bills');
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
              <th style={{ width: '10%', whiteSpace: 'nowrap' }}>Name</th>
              <th style={{ width: '15%', whiteSpace: 'nowrap' }}>Email</th>
              <th style={{ width: '10%', whiteSpace: 'nowrap' }}>Phone Number</th>
              <th style={{ width: '10%', whiteSpace: 'nowrap' }}>Date Read</th>
              <th style={{ width: '5%', whiteSpace: 'nowrap' }}>Previous Reading</th>
              <th style={{ width: '5%', whiteSpace: 'nowrap' }}>Current Reading</th>
              <th style={{ width: '10%', whiteSpace: 'nowrap' }}>Read By</th>
              <th style={{ width: '5%', whiteSpace: 'nowrap' }}>Balance</th>
              <th style={{ width: '10%', whiteSpace: 'nowrap' }}>Payment Status</th>
              <th style={{ width: '10%', whiteSpace: 'nowrap' }}>Date Paid</th>
              <th style={{ width: '10%', whiteSpace: 'nowrap' }}>Actions</th>

            </tr>
          </thead>
          <tbody>
            {currentRecords.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{item.client.first_name}  {item.client.last_name}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{item.client.email}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{item.client.phone_number}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{item.date_read}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{item.previous_reading}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{item.current_reading}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{item.read_by}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{item.balance}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{item.payment_status}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{item.date_paid}</td>
                <td>
                  <div className="action-icons">
                    <button onClick={() => handleDelete(index)} className="btn btn-danger">
                      <BiTrash />
                      <span>Delete</span>
                    </button>
                    <button className="btn btn-primary">
                      <BiEdit />
                      <span>Edit</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <div className="pagination-buttons">
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
    </div>
  );
}

export default AdminDashboard;
