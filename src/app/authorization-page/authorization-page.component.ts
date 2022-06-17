import {Component, Inject, OnInit} from '@angular/core';
import {Http} from "@angular/http"
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map} from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.css']
})
export class AuthorizationPageComponent implements OnInit {
  myAppUrl: string = ""
  value1: string = "";
  value2: string = "";
  Alert1: boolean = true;
  Alert2: boolean = true;
  Alert3: boolean = true;
  Alert4: boolean = true;
  Alert5: boolean = true;
  temp: string = ""
  rezultApi!: {countEmail: number, lockAcount: number, nowLockAcount: number, invalidCred: number, tempPassword: number, loginSuccess: number}

  // constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
  //   this.myAppUrl = baseUrl;
  // }
  constructor(private http: HttpClient) { }

  authorization(){
    // this.rezultApi = this.checkAuthorization();
    this.Alert2 = !this.Alert2;
    this.checkAuthorization();
  }

  checkAuthorization(){
    console.debug("1")
    return this.http.get("http://localhost:9000/" + "api/Aplpha1s/check/" + this.value1 + "/" + this.value2)
      .pipe(map(res => console.debug("2"))),
      catchError(err => of (err))
  }

  ngOnInit(): void {
  }
}
