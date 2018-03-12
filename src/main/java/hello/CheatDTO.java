package hello;

import java.util.Set;

import lombok.Data;

@Data
public class CheatDTO {
	Cheat cheat;
	Set<Coordinate> coordinates;

	@Override
	public String toString() {
		return super.toString();
	}

	@Override
	public int hashCode() {
		return super.hashCode();
	}

	@Override
	public boolean equals(Object cheatDto) {
		return super.equals(cheatDto);
	}
}
