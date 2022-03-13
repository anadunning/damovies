package com.dunningacademy.damovies.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dunningacademy.damovies.entities.Score;
import com.dunningacademy.damovies.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
