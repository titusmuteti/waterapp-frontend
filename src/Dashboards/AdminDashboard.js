import React, { useEffect, useState } from 'react';
import { BiTrash, BiEdit } from 'react-icons/bi';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import './AdminDashboard.css';

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
      await fetch(`https://makawasco-backend.onrender.com/bill/${index}`, {
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
      <div className="table-container">
        <div className="table-wrapper"> 
          <table className="table table-bordered">
            <thead className="thead-dark sticky-top">
              <tr>
                <th className="table-header">#</th>
                <th className="table-header">Name</th>
                <th className="table-header">Email</th>
                <th className="table-header">Phone Number</th>
                <th className="table-header">Date Read</th>
                <th className="table-header">Previous Reading</th>
                <th className="table-header">Current Reading</th>
                <th className="table-header">Units Consumed</th>
                <th className="table-header">Balance</th>
                <th className="table-header">Total Amount due</th>
                <th className="table-header">Read By</th>
                <th className="table-header">Date Paid</th>
                <th className="table-header">Area</th>
                <th className="table-header">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentRecords.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                  <td>{index + 1}</td>
                  <td style={{ width: '20%', whiteSpace: 'nowrap' }}>
                    {item.client.first_name} {item.client.last_name}
                  </td>
                  <td>{item.client.email}</td>
                  <td>{item.client.phone_number}</td>
                  <td>{item.date_read}</td>
                  <td>{item.previous_reading}</td>
                  <td>{item.current_reading}</td>
                  <td>{item.current_reading - item.previous_reading}</td>
                  <td className='balance'>{item.balance}</td>
                  <td className='total'>{item.units_consumed * 3 + item.balance}</td>
                  <td>{item.employee.first_name} {item.employee.last_name}</td>
                  <td>{item.date_paid}</td>
                  <td>{item.employee.location}</td>
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
      </div>
      <div className="pagination">
        <div className="pagination-buttons">
          {currentPage > 1 && (
            <button onClick={handlePreviousPage} className="btn btn-primary">
              <BsArrowLeft />
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
              <BsArrowRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
