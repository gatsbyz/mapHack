
package hello;

import java.util.List;

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
	
	// Get All Notes
	@GetMapping("")
	public List<Cheat> getAllCheats() {
	    return cheatRepository.findAll();
	}
	
	// Create a new Note
	@PostMapping("")
	public Cheat createCheat(@Valid @RequestBody Cheat cheat) {
	    return cheatRepository.save(cheat);
	}
	
	// Get a Single Note
	@GetMapping("/{id}")
	public ResponseEntity<Cheat> getNoteById(@PathVariable(value = "id") Long cheatId) {
		Cheat cheat = cheatRepository.findOne(cheatId);
	    if(cheat == null) {
	        return ResponseEntity.notFound().build();
	    }
	    return ResponseEntity.ok().body(cheat);
	}
	
	// Update a Note
	@PutMapping("/{id}")
	public ResponseEntity<Cheat> updateNote(@PathVariable(value = "id") Long cheatId, 
	                                       @Valid @RequestBody Cheat cheatDetails) {
		Cheat cheat = cheatRepository.findOne(cheatId);
	    if(cheat == null) {
	        return ResponseEntity.notFound().build();
	    }
	    cheat.setStartPointLat(cheatDetails.getStartPointLat());
	    cheat.setEndPointLat(cheatDetails.getEndPointLat());
	    cheat.setStartPointLong(cheatDetails.getEndPointLong());
	    cheat.setEndPointLong(cheatDetails.getEndPointLong());
	    Cheat updatedNote = cheatRepository.save(cheat);
	    return ResponseEntity.ok(updatedNote);
	}
	
	// Delete a Note
	@DeleteMapping("/{id}")
	public ResponseEntity<Cheat> deleteNote(@PathVariable(value = "id") Long noteId) {
		Cheat cheat = cheatRepository.findOne(noteId);
	    if(cheat == null) {
	        return ResponseEntity.notFound().build();
	    }

	    cheatRepository.delete(cheat);
	    return ResponseEntity.ok().build();
	}

}
