export class Cheat {
  id: number;
  description: string;
  startPointLat: number;
  startPointLong: number;
  endPointLat: number;
  endPointLong: number;
  routeType: string[];
  createdAt: Date;
  updatedAt: Date;

  constructor(cheatInfo: any) {
    this.id = cheatInfo.id;
    this.description = cheatInfo.description;
    this.startPointLat = cheatInfo.startPointLat;
    this.startPointLong = cheatInfo.startPointLong;
    this.endPointLat = cheatInfo.endPointLat;
    this.endPointLong = cheatInfo.endPointLong;
    this.routeType = cheatInfo.routeType;
    this.createdAt = cheatInfo.createdAt;
    this.updatedAt = cheatInfo.updatedAt;
  }

  private convertDate(dateJava) {
    const date: Date = new Date();
    console.log(dateJava);
    return date;
  }

}
