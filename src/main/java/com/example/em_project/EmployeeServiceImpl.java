package com.example.em_project;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.em_project.entity.EmployeeEntity;
import com.example.em_project.model.Employee;
import com.example.em_project.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService{

    //Inject employee repository
    @Autowired
    private EmployeeRepository employeeRepository;
    @Override
    public String createEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employee, employeeEntity);
        employeeRepository.save(employeeEntity);
        // employees.add(employee);
        return "Saved successfully";
    }

    @Override
    public List<Employee> readEmployees() {
        List<EmployeeEntity> empList = employeeRepository.findAll();
        List<Employee> employees = new ArrayList();
        for(EmployeeEntity employeeEntity: empList){
            Employee emp = new Employee();
            emp.setName(employeeEntity.getName());
            emp.setEmail(employeeEntity.getEmail());
            emp.setId(employeeEntity.getId());
            emp.setPhone(employeeEntity.getPhone());

            employees.add(emp);
        }
        return employees;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        if (employeeRepository.existsById(id)) {
            // If it exists, delete the employee by ID
            employeeRepository.deleteById(id);
            return true; // Return true indicating successful deletion
        } else {
            // If it doesn't exist, return false or throw an exception
            return false;
        }
    }

    @Override
    public String updateEmployee(Long id, Employee employee) {
        EmployeeEntity emp = employeeRepository.findById(id).get();
        emp.setName(employee.getName());
        emp.setEmail(employee.getEmail());
        emp.setPhone(employee.getPhone());
        employeeRepository.save(emp);
        return "Updated successfully";
    }

    @Override
    public Employee readEmployee(Long id) {
        EmployeeEntity emp = employeeRepository.findById(id).get();
        Employee employee = new Employee();
        BeanUtils.copyProperties(emp,employee);
        return employee;
        
    }





}
