package com.example.demo.student;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "student")
public class Student implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column(name = "idStudent")
	private Integer idStudent;
	private String firstname;
	private String lastname;
	private String email;
	private String password;
	
	public Student() {
		super();
	}

	public Student(String firstname, String lastname, String email, String password) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
	}
	
	public Integer getIdStudent() {
		return this.idStudent;
	}

	public void setIdStudent(Integer idStudent) {
		this.idStudent = idStudent;
	}


	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Student [idStudent=" + idStudent + ", firstname=" + firstname + ", lastname=" + lastname + ", email="
				+ email + ", password=" + password + "]";
	}
	
	
	
}
