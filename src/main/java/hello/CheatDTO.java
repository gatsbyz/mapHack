package hello;

import java.util.Set;

import lombok.Data;

@Data
public class CheatDTO {
	Cheat cheat;
	Set<Coordinate> coordinates;
}
