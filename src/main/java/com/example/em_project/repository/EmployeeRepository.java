package com.example.em_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.em_project.entity.EmployeeEntity;

// DB Entity and id type
@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity,Long> {
    //save,delete,findById,findall
    //define custom ones explicitly
}
