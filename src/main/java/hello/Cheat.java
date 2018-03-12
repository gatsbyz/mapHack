package hello;

import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.Data;

@Entity
@Table(name = "cheats")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = { "createdAt", "updatedAt" }, allowGetters = true)
@JsonIdentityInfo(generator=ObjectIdGenerators.UUIDGenerator.class, property="@id")
@Data
public class Cheat {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String description;

	@NotEmpty
	@ElementCollection(targetClass = RouteType.class)
	@Enumerated(EnumType.STRING)
	private Set<RouteType> routeType;

	@ElementCollection(targetClass = Coordinate.class)
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "cheat")
	@OrderBy("orderNumber")
	private List<Coordinate> coordinate;

	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date createdAt;

	@Column(nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@LastModifiedDate
	private Date updatedAt;

}
