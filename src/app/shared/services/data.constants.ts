import { IParking } from '../interfaces/parking.interface';

export const PARKING_DATA: IParking[] = [
  {
    id: 1,
    address: '123 Main St',
    status: true,
    usages: 1,
  },
  {
    id: 2,
    address: '456 Main St',
    status: false,
    usages: 3,
  },
  {
    id: 3,
    address: '789 Main St',
    status: true,
    usages: 2,
  },
  {
    id: 4,
    address: '101 Main St',
    status: false,
    usages: 20,
  },
  {
    id: 5,
    address: '102 Main St',
    status: false,
    usages: 0,
  },
  {
    id: 6,
    address: '103 Main St',
    status: false,
    usages: 33,
  }
];
