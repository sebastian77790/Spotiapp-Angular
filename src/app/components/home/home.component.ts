import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  //countries: any[] = [];

  constructor() {//private http: HttpClient
    // this.http.get('https://restcountries.eu/rest/v2/lang/es')
    //   .subscribe((res: any) => {
    //     this.countries = res;
    //     console.log(res);
    //   })
  }

  ngOnInit() {
  }

}
