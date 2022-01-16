package com.wandersontimoteo.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wandersontimoteo.dsmovie.entities.Score;
import com.wandersontimoteo.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
