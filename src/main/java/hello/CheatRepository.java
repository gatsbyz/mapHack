package hello;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface CheatRepository extends JpaRepository<Cheat, Long> {
	Cheat findById(long id);
}
