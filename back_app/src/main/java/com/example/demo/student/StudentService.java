package com.example.demo.student;

import java.util.List;

public interface StudentService {
	Student createStudent(Student student);

	Student updateStudent(Student student);

	List<Student> getAllStudent();

	Student getStudentById(Integer i);

	void deleteStudent(Integer id);
}
