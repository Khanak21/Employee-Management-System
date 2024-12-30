package com.example.em_project;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.em_project.model.Employee;

@Service
public interface EmployeeService {
    String createEmployee(Employee employee);
    List<Employee> readEmployees();
    boolean deleteEmployee(Long id);
    String updateEmployee(Long id,Employee employee);
    Employee readEmployee(Long id);


}
