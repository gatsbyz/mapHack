package hello;

public enum RouteType {
	DRIVING("DRIVING"),
	WALKING("WALKING"),
	TRANSIT("TRANSIT"),
	BICYCLING("BICYCLING");
	
	private String description;
	
	RouteType(String description) {
		this.description = description;
	}
	
	public String getDescription() {
		return this.description;
	}
}
