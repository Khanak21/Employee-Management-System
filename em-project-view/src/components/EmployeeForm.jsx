import React, { useState, useEffect } from 'react'
import '../EmployeeManagement.css';
const EmployeeForm = ({ employee, onSubmit }) => {
  const [name, setName] = useState(employee?.name || '');
  const [phone, setPhone] = useState(employee?.phone || '');
  const [email, setEmail] = useState(employee?.email || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !email) {
      alert('All fields are required');
      return;
    }
    onSubmit({ name, phone, email });
    setName('');
    setPhone('');
    setEmail('');
  };

  useEffect(() => {
    if (employee) {
      setName(employee.name);
      setPhone(employee.phone);
      setEmail(employee.email);
    }
  }, [employee]);

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-field"
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="input-field"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-field"
      />
      <button type="submit" className="button">{employee ? 'Update Employee' : 'Add Employee'}</button>
    </form>
  );
};
export default EmployeeForm