import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {


  constructor(private httpClient: HttpClient) { }

  student: string[];

  ngOnInit() {
    this.httpClient.get("https://localhost:44388/api/Students").subscribe(t => {
      this.student = t as string[];
      console.log(this.student);
    });
  }
}
