package com.example.em_project.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data //gives getter setter for all
@AllArgsConstructor
@NoArgsConstructor
public class Employee {
   private Long id;
   private String name;
   private String phone;
   private String email;

}
