import React from 'react';

function AdminDashboard() {
  return (
    <div className="container">
      <table className="table table-bordered table-responsive">
        <thead className="thead-dark">
          <tr>
            <th className="col-lg-2">First Name</th>
            <th className="col-lg-2">Last Name</th>
            <th className="col-lg-3">Email</th>
            <th className="col-lg-2">Phone Number</th>
            <th className="col-lg-1">Date Read</th>
            <th className="col-lg-1">Previous Reading</th>
            <th className="col-lg-1">Current Reading</th>
            <th className="col-lg-1">Balance</th>
            <th className="col-lg-1">Payment Status</th>
            <th className="col-lg-1">Date Paid</th>
          </tr>
        </thead>
        <tbody>
          {/* Insert table rows here */}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
