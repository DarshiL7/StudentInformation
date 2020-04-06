import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }
  studentFormGroup: FormGroup;
  ngOnInit() {
    this.studentFormGroup = this.formBuilder.group({
      studentName: ['', Validators.required],
      studentMobile: ['', Validators.required],
      studentEmail: ['', Validators.required],
      feeStatus: ['', Validators.required],
      courseName: ['', Validators.required]

    })
  }

  onSubmit() {
    this.httpClient.post("https://localhost:44388/counter/api/Students", {
      StudentName: this.studentFormGroup.value.studentName,
      StudentMobile: this.studentFormGroup.value.studentMobile,
      StudentEmail: this.studentFormGroup.value.studentEmail,
      FeeStatus: this.studentFormGroup.value.feeStatus,
      CourseName: this.studentFormGroup.value.courseName



    }).subscribe(t => {
      console.log(t);

    });
  }
}
