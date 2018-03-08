export class Coordinate {
  id: number;
  latitude: number;
  longitude: number;
  orderNumber: number;

  constructor(coordInfo: any) {
    this.id = coordInfo.id;
    this.latitude = coordInfo.latitude;
    this.longitude = coordInfo.longitude;
    this.orderNumber = coordInfo.orderNumber;
  }

}
