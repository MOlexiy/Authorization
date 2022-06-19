import {Component,  OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';

@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.css']
})
export class AuthorizationPageComponent implements OnInit {
  value1: string = "";
  value2: string = "";
  Alert1: boolean = true;
  Alert2: boolean = true;
  Alert3: boolean = true;
  Alert4: boolean = true;
  Alert5: boolean = true;
  temp: string = ""
  rezultApi!: {countEmail: number, lockAcount: number, nowLockAcount: number, invalidCred: number, tempPassword: number, loginSuccess: number}

  constructor(private http: HttpClient) { }

  authorization(){
    this.Alert2 = !this.Alert2;
    this.checkAuthorization();
  }

  checkAuthorization(){
    this.getAuthorizationData().subscribe(m => this.rezultApi = m)
    console.debug(this.rezultApi)
  }

  getAuthorizationData():Observable<any>{
    return this.http.get("http://localhost:5236/" + "api/Alpha1es/" + this.value1 + "/" + this.value2)
  }

  ngOnInit(): void {
  }
}
