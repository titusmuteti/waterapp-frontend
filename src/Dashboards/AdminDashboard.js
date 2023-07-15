import React, { useEffect, useState } from 'react';
import { BiTrash } from 'react-icons/bi';

function AdminDashboard() {
  const [data, setData] = useState([]);

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
            {data.map((item, index) => (
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
    </div>
  );
}

export default AdminDashboard;