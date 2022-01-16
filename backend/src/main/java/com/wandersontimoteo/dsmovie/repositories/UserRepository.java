package com.wandersontimoteo.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wandersontimoteo.dsmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String email);
}
