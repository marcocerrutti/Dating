import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;
  
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

//   getValues() {
//     this.http.get('http//:localhost:5000/api/values').subscribe(response => {
//       this.values = response;
//     }, error => { console.log(error); }
//   );
//  }

  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe({
      next: (response) => {this.values = response}, //what to do next
      error: error => { console.log(error); }, // this is what to do in case of an error
      complete: () => {
        console.log('request completed');
        console.log('extra statement');
      }
    });
  }
}
