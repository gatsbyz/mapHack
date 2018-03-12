
package hello;

import java.util.List;
import java.util.Set;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/cheat")
public class CheatController {

	@Autowired
	CheatRepository cheatRepository;

	@Autowired
	CoordinateRepository coordinateRepository;
	
	// Get All Notes
	@GetMapping("")
	public List<Cheat> getAllCheats() {
	    return cheatRepository.findAll();
	}
	
	// Create a new Note
	@PostMapping("")
	public Cheat createCheat(@Valid @RequestBody CheatDTO cheatDto) {
		Cheat cheat = cheatDto.getCheat();
		Set<Coordinate> coordinates = cheatDto.getCoordinates();
	    Cheat c = cheatRepository.save(cheat);
	    coordinates.forEach(coord -> {
	    		coord.setCheat(cheat);
	    		coordinateRepository.save(coord);
	    });
	    return c;
	}
	
	// Get a Single Note
	@GetMapping("/{id}")
	public ResponseEntity<Cheat> getCheatById(@PathVariable(value = "id") Long cheatId) {
		Cheat cheat = cheatRepository.findOne(cheatId);
	    if(cheat == null) {
	        return ResponseEntity.notFound().build();
	    }
	    return ResponseEntity.ok().body(cheat);
	}
	
	// Update a Note
	@PutMapping("/{id}")
	public ResponseEntity<Cheat> updateCheat(@PathVariable(value = "id") Long cheatId, 
	                                       @Valid @RequestBody Cheat cheatDetails) {
		Cheat cheat = cheatRepository.findOne(cheatId);
	    if(cheat == null) {
	        return ResponseEntity.notFound().build();
	    }
	    cheat.setCoordinate(cheatDetails.getCoordinate());
	    Cheat updatedCheat = cheatRepository.save(cheat);
	    return ResponseEntity.ok(updatedCheat);
	}
	
	// Delete a Note
	@DeleteMapping("/{id}")
	public ResponseEntity<Cheat> deleteCheat(@PathVariable(value = "id") Long noteId) {
		Cheat cheat = cheatRepository.findOne(noteId);
	    if(cheat == null) {
	        return ResponseEntity.notFound().build();
	    }

	    cheatRepository.delete(cheat);
	    return ResponseEntity.ok().build();
	}

}
