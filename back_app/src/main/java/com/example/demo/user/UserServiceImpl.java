package com.example.demo.user;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public User createUser(User user) {
		
		return this.userRepository.save(user);
	}

	@Override
	public User updateUser(User user) {
		Optional<User> userDb = this.userRepository.findById(user.getIdUser());
		
		User userUpdate = userDb.get();
		
		System.out.println(user.toString());
		
		userUpdate.setIdUser(user.getIdUser());
		userUpdate.setFirstname(user.getFirstname());
		userUpdate.setLastname(user.getLastname());
		userUpdate.setEmail(user.getEmail());
		userUpdate.setPassword(user.getPassword());
		userRepository.save(userUpdate);
		return userUpdate;
	}

	@Override
	public List<User> getAllUser() {
		return this.userRepository.findAll();
	}

	@Override
	public User getUserById(Integer userId) {
		
		return this.userRepository.findById(userId).get();
		
	}

	@Override
	public void deleteUser(Integer id) {
		this.userRepository.deleteById(id);

	}

}
