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

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "coordinates")
@EntityListeners(AuditingEntityListener.class)
@JsonIdentityInfo(generator=ObjectIdGenerators.UUIDGenerator.class, property="@id")
@EqualsAndHashCode(exclude = "cheat", callSuper = false)
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
	
}