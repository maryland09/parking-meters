import { Injectable } from '@angular/core';
import { IParking } from '../interfaces/parking.interface';
import { PARKING_DATA } from './data.constants';

@Injectable()
export class ParkingDataService {

  private readonly parkingList!: IParking[];

  constructor() {
    this.parkingList = PARKING_DATA;
  }

  getParkingList(): IParking[] {
    return this.filterByAddress(this.parkingList);
  }

  getParkingById(id: number): IParking | null {
    const parking = this.parkingList.find((item) => item.id === id);
    if (parking) {
      return {...parking};
    }
    return null;
  }

  updateParking(parking: IParking): void {
    const index = this.parkingList.findIndex((item) => item.id === parking.id);
    if (index !== -1) {
      this.parkingList[index] = parking;
    }
  }

  addParking(parking: IParking): void {
    this.parkingList.push(parking);
  }

  getNewParkingId(): number {
    return this.parkingList.length + 1;
  }

  private filterByAddress(parkings: IParking[]): IParking[] {
    if (!parkings) return [];
    return parkings.sort((a, b) => {
      if (a.address > b.address) {
        return 1;
      }
      if (a.address < b.address) {
        return -1;
      }
      return 0;
    });
  }

}
