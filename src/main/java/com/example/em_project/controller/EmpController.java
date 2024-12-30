package com.example.em_project.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.em_project.EmployeeService;
import com.example.em_project.model.Employee;

@CrossOrigin("http://localhost:3000") // Add this to connect with frontend
@RestController
public class EmpController {
    // Dependency injection -> done in constructor of empController for best practice
    @Autowired
    EmployeeService employeeService;
    // EmployeeService employeeService = new EmployeeServiceImpl();

    @GetMapping("employees")
    public List<Employee> getAllEmployees(){
        return employeeService.readEmployees();
    }

    @GetMapping("employees/{id}")
    public Employee readEmployee(@PathVariable Long id){
        return employeeService.readEmployee(id);
    }

    @PostMapping("employees")
    public String createEmployees(@RequestBody Employee emp){
        return employeeService.createEmployee(emp);
        
    }

    @DeleteMapping("employees/{id}")//Path variable to fetch form URL
    public String deleteEmployee(@PathVariable Long id){
        if(employeeService.deleteEmployee(id)){
            return "Deleted Successfully";
        }
        else{
            return "Not Found";
        }
    }

    @PutMapping("employees/{id}")
    public String updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        return employeeService.updateEmployee(id, employee);
    }

}
