import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './employeeTable.css';

const EmployeeTable = ({ employees }) => {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrer les employés en fonction du terme de recherche
  const filteredEmployees = employees.filter((employee) => {
    const userFields = [
      employee.firstName,
      employee.lastName,
      employee.startDate,
      employee.department,
      employee.dateOfBirth,
      employee.street,
      employee.city,
      employee.state,
      employee.zipCode
    ];
  
    const searchString = searchTerm.toLowerCase();
  
    // Vérifiez si l'une des valeurs des champs de l'utilisateur contient la chaîne de recherche
    return userFields.some((field) =>
      String(field).toLowerCase().includes(searchString)
    );
  });
  

  const pageCount = Math.ceil(filteredEmployees.length / pageSize);
  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedEmployees = filteredEmployees.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <div className='container-tables'>
        <div className="table-toolbar">
          <span>
            Show{' '}
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(0);
              }}
            >
              {[10, 20, 30].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
            {' entries'}
          </span>
          <input
            type="text"
            placeholder="Search by name..."
            className='input-search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {searchTerm !== '' && filteredEmployees.length === 0 ? (
          <table className="display">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Start Date</th>
                <th>Department</th>
                <th>Date of Birth</th>
                <th>Street</th>
                <th>City</th>
                <th>State</th>
                <th>Zip Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="9" className="no-match-found">
                  No match found
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <table className="display">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Start Date</th>
                <th>Department</th>
                <th>Date of Birth</th>
                <th>Street</th>
                <th>City</th>
                <th>State</th>
                <th>Zip Code</th>
              </tr>
            </thead>
            <tbody>
              {displayedEmployees.map((employee, index) => (
                <tr key={index}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.startDate}</td>
                  <td>{employee.department}</td>
                  <td>{employee.dateOfBirth}</td>
                  <td>{employee.street}</td>
                  <td>{employee.city}</td>
                  <td>{employee.state}</td>
                  <td>{employee.zipCode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 0}
          >
            {'<'}
          </button>
          <span>
            Page{' '}
            <strong>
              {currentPage + 1} of {pageCount}
            </strong>
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === pageCount - 1}
          >
            {'>'}
          </button>
        </div>
      </div>
      <Link to="/" className='link'>Home</Link>
    </div>
  );
  
  
  
};

export default EmployeeTable;
