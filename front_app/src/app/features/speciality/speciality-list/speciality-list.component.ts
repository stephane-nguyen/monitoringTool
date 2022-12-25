import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Speciality } from 'src/app/shared/model/speciality.model';
import { SpecialityService } from 'src/app/shared/services/speciality.service';

@Component({
  selector: 'app-speciality-list',
  templateUrl: './speciality-list.component.html',
})
export class SpecialityListComponent implements OnInit {
  constructor(
    private specialityService: SpecialityService,
    private router: Router
  ) {}

  specialities: Observable<Speciality[]> | undefined;
  speciality?: Speciality;

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.specialities = this.specialityService.getSpecialityList();
  }

  deleteSpeciality(id: number) {
    this.specialityService.deleteSpecialityById(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }

  // updateSpeciality(id: number) {
  //   this.specialityService.updateSpeciality(this.speciality).subscribe(
  //     (data) => console.log(data),
  //     (error) => console.log(error)
  //   );
  //   this.speciality = new Speciality();
  //   this.gotoList();
  // }
  // onSubmit() {
  //   this.updateSpeciality();
  // }

  gotoList() {
    this.router.navigate(['/speciality']);
  }
}
