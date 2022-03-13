package com.dunningacademy.damovies.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dunningacademy.damovies.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByEmail(String email);
}
