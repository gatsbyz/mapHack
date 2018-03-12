package hello;

import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "coordinates")
@EntityListeners(AuditingEntityListener.class)
@Data
@NoArgsConstructor
public class Coordinate {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cheat_id", nullable = false, updatable = true, insertable = true)
	private Cheat cheat;
	
	private int orderNumber;
	
	private double latitude;
	private double longitude;

	@Override
	public String toString() {
		return super.toString();
	}

	@Override
	public int hashCode() {
		return super.hashCode();
	}

	@Override
	public boolean equals(Object coordinate) {
		return super.equals(coordinate);
	}
	
}