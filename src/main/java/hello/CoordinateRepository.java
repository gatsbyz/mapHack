package hello;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface CoordinateRepository extends JpaRepository<Coordinate, Long>{

	Coordinate findById(long id);
	
}