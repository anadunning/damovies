package com.dunningacademy.damovies.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dunningacademy.damovies.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
