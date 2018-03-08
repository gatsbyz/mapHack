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

@Entity
@Table(name = "coordinates")
@EntityListeners(AuditingEntityListener.class)
@Data
public class Coordinate {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cheat_id", nullable = false)
	private Cheat cheat;
	
	private int orderNumber;
	
	private double latitude;
	private double longitude;
	
}