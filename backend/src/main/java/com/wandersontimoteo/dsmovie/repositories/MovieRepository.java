package com.wandersontimoteo.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wandersontimoteo.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
