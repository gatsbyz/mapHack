import { Coordinate } from './coordinate';
export class Cheat {
  id: number;
  description: string;
  routeType: string[];
  coordinate: Coordinate[];
  createdAt: Date;
  updatedAt: Date;

  constructor(cheatInfo: any) {
    this.id = cheatInfo.id;
    this.description = cheatInfo.description;
    this.routeType = cheatInfo.routeType;
    this.coordinate = cheatInfo.coordinate;
    this.createdAt = cheatInfo.createdAt;
    this.updatedAt = cheatInfo.updatedAt;
  }

  private convertDate(dateJava) {
    const date: Date = new Date();
    console.log(dateJava);
    return date;
  }

}
