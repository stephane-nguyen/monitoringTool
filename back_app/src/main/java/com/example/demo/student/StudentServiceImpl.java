package com.example.demo.student;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class StudentServiceImpl implements StudentService {

	@Autowired
	private StudentRepository studentRepository;

	@Override
	public Student createStudent(Student student) {
		
		return this.studentRepository.save(student);
	}

	@Override
	public Student updateStudent(Student student) {
		Optional<Student> studentDb = this.studentRepository.findById(student.getIdStudent());
		
		Student studentUpdate = studentDb.get();
		
		System.out.println(student.toString());
		
		studentUpdate.setIdStudent(student.getIdStudent());
		studentUpdate.setFirstname(student.getFirstname());
		studentUpdate.setLastname(student.getLastname());
		studentUpdate.setEmail(student.getEmail());
		studentUpdate.setPassword(student.getPassword());
		studentRepository.save(studentUpdate);
		return studentUpdate;
	}

	@Override
	public List<Student> getAllStudent() {
		return this.studentRepository.findAll();
	}

	@Override
	public Student getStudentById(Integer studentId) {
		
		return this.studentRepository.findById(studentId).get();
		
	}

	@Override
	public void deleteStudent(Integer id) {
		this.studentRepository.deleteById(id);

	}

}
