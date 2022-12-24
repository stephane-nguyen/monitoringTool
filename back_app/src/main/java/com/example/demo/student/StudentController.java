package com.example.demo.student;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200/")
public class StudentController {
	@Autowired
	private StudentService studentService;
	
	@GetMapping(value = "/student")
	public ResponseEntity<List<Student>> getAllStudent(){
		return ResponseEntity.ok().body(studentService.getAllStudent());
	}
	
	@GetMapping(value = "/student/{id}")
	public @ResponseBody ResponseEntity<Student> getStudent(Integer id){
		return ResponseEntity.ok().body(studentService.getStudentById(id));
		
	}
	
	@PutMapping("student/{id}")
	public ResponseEntity<Student> updateStudent(Integer id, Student student){
//		Student st = new Student("tefdsqfsqst", "tesssfdsqf", "tata@gmail.com", "fdqfdsqfsdq");
				
		
		student.setIdStudent(id);
		return ResponseEntity.ok().body(this.studentService.updateStudent(student));
		
	}
	
	@PostMapping("/student")
	public ResponseEntity<Student> createStudent (Student s) {
		
		
		return ResponseEntity.ok().body(this.studentService.createStudent(s));

	}
	
	@DeleteMapping("/student/{id}")
	public HttpStatus deleteProduct(@PathVariable Integer id){
		this.studentService.deleteStudent(id);
		return HttpStatus.OK;
	}

}
