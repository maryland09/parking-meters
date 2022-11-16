import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IParking } from '../../../shared/interfaces/parking.interface';
import { ParkingDataService } from '../../../shared/services/parking-data.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parking-details',
  templateUrl: './parking-details.component.html',
  styleUrls: ['./parking-details.component.sass']
})
export class ParkingDetailsComponent implements OnInit {

  parkingId!: number;

  parking!: IParking | null;

  parkingForm!: FormGroup;
  idControl!: FormControl;
  addressControl!: FormControl;
  statusControl!: FormControl;
  usagesControl!: FormControl;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dataService: ParkingDataService,
              private formBuilder: FormBuilder) {

    this.parkingId = +this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    if (this.parkingId) {
      this.parking = this.dataService.getParkingById(this.parkingId);
    }
    this.createForm();
  }

  createForm(): void {
    this.idControl = new FormControl(this.parkingId);
    this.addressControl = new FormControl(this.parking?.address || null, [Validators.required]);
    this.statusControl = new FormControl(this.parking?.status || false);
    this.usagesControl = new FormControl(this.parking?.usages || 0);

    this.parkingForm = this.formBuilder.group({
      id: this.idControl,
      address: this.addressControl,
      status: this.statusControl,
      usages: this.usagesControl,
    });
  }

  changedStatus(status: any): void {
    if (status.checked) {
      this.usagesControl.setValue(+this.usagesControl.value + 1);
    }
  }

  submit() {
    if (this.parkingForm.valid) {
      const parking: IParking = {
        id: this.parkingId,
        address: this.addressControl.value,
        status: this.statusControl.value,
        usages: this.usagesControl.value
      }
      this.parking ? this.dataService.updateParking(parking) : this.dataService.addParking(parking);
      this.gotoParkingList();
    }
  }

  gotoParkingList(): void {
    this.router.navigateByUrl('/');
  }

}
