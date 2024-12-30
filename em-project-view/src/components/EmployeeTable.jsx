import React, { useState, useEffect } from 'react'
import '../EmployeeManagement.css';
const EmployeeTable = ({ employees, onEdit, onDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td>
              <button onClick={() => onEdit(employee)} className="button edit-button">Edit</button>
              <button onClick={() => onDelete(employee.id)} className="button delete-button">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default EmployeeTable