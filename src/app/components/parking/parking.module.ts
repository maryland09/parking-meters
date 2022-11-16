import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkingComponent } from './parking.component';
import { RouterModule, Routes } from '@angular/router';
import { ParkingDataService } from '../../shared/services/parking-data.service';
import {MatCardModule} from '@angular/material/card';
import { ParkingDetailsComponent } from './parking-details/parking-details.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ParkingComponent,
  },
  {
    path: ':id',
    component: ParkingDetailsComponent,
  }
];


@NgModule({
  declarations: [
    ParkingComponent,
    ParkingDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
  ],
  providers: [ParkingDataService],
})
export class ParkingModule {
}
