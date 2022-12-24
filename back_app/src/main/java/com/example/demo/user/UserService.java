package com.example.demo.user;

import java.util.List;

public interface UserService {
	User createUser(User User);

	User updateUser(User User);

	List<User> getAllUser();

	User getUserById(Integer i);

	void deleteUser(Integer id);
}
