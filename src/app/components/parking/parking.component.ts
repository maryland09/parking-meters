import { Component, OnInit } from '@angular/core';
import { ParkingDataService } from '../../shared/services/parking-data.service';
import { IParking } from '../../shared/interfaces/parking.interface';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.sass']
})
export class ParkingComponent implements OnInit {

  constructor(private dataService: ParkingDataService,
              private _formBuilder: FormBuilder) {
  }

  public parkingData!: IParking[];

  ngOnInit() {
    this.parkingData = this.dataService.getParkingList();
  }

  getNewId(): number {
    return this.dataService.getNewParkingId()
  }

}
