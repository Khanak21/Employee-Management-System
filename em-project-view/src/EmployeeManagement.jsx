import React, { useState, useEffect } from 'react'
import './EmployeeManagement.css';
import EmployeeTable from './components/EmployeeTable';
import EmployeeForm from './components/EmployeeForm';

const API_BASE_URL = "http://localhost:9090/employees";

export default function EmployeeManagement() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

  // Fetch all employees
  const fetchEmployees = async () => {
    try {
      const response = await fetch(API_BASE_URL);
      if (!response.ok) throw new Error('Failed to fetch employees');
      const data = await response.json();
      console.log(data);
      setEmployees(data);
    } catch (error) {
      console.error(error);
      alert('Error fetching employees');
    }
  };

  // Add a new employee
  const addEmployee = async (employee) => {
    try {
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employee),
      });
      if (!response.ok) throw new Error('Failed to add employee');
    //   const newEmployee = await response.json();
      setEmployees([...employees, employee]);
      alert('Employee added successfully');
    } catch (error) {
      console.error(error);
      alert('Error adding employee');
    }
  };

  // Update an existing employee
  const updateEmployee = async (updatedEmployee) => {
    if (!editingEmployee) return;
    try {
      const response = await fetch(`${API_BASE_URL}/${editingEmployee.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedEmployee),
      });
      if (!response.ok) throw new Error('Failed to update employee');
      setEmployees(employees.map(emp => (emp.id === editingEmployee.id ? updatedEmployee : emp)));
      setEditingEmployee(null);
      alert('Employee updated successfully');
    } catch (error) {
      console.error(error);
      alert('Error updating employee');
    }
  };

  // Delete an employee
  const deleteEmployee = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete employee');
      setEmployees(employees.filter(emp => emp.id !== id));
      alert('Employee deleted successfully');
    } catch (error) {
      console.error(error);
      alert('Error deleting employee');
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Employee Management System</h1>
      <div className="grid">
        <div>
          <h2>{editingEmployee ? 'Edit Employee' : 'Add New Employee'}</h2>
          <EmployeeForm
            employee={editingEmployee || undefined}
            onSubmit={editingEmployee ? updateEmployee : addEmployee}
          />
        </div>
        <div>
          <h2>Employee List</h2>
          <EmployeeTable
            employees={employees}
            onEdit={setEditingEmployee}
            onDelete={deleteEmployee}
          />
        </div>
      </div>
    </div>
  );
}
