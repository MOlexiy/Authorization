import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";
import {ChangePasswordComponent} from "../change-password/change-password.component";

@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.css']
})
export class AuthorizationPageComponent implements OnInit {

  loginDialog: boolean = false;
  submited: boolean = false;

  emailOrUsrId: string = "";
  password: string = "";
  temp: string = ""
  rezultApi!: [countEmail: number, lockAcount: number, nowLockAcount: number, invalidCred: number, tempPassword: number, loginSuccess: number]

  @ViewChild('changePassWindow') changePassWindow!: ChangePasswordComponent;

  public userLoginFrom: FormGroup = new FormGroup(
    {
      emailOrUsrId: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    }
  )

  constructor(
    private http: HttpClient,
    private messageService: MessageService
) { }

  async authorization(){
    if (this.userLoginFrom.valid){
      this.emailOrUsrId = this.userLoginFrom.value.emailOrUsrId;
      await this.checkAuthorization(this.userLoginFrom.value.emailOrUsrId, this.userLoginFrom.value.password);
      if (this.rezultApi[5] === 1){
        this.submited = true;
        this.loginDialog = false;
      }
      if (this.rezultApi[0] === 1){
        this.messageService.add({
          summary: "Unable to login",
          detail: "This email address is associated with more than one user account."
        });
      }
      if (this.rezultApi[1] === 1){
        this.messageService.add({
          summary: "Unable to login",
          detail: "This user account is either locked or inactive."
        });
      }
      if (this.rezultApi[2] === 1){
        this.messageService.add({
          summary: "Invalid credentials",
          detail: "This account is now locked after 5 unsuccessful login attempts"
        });
      }
      if (this.rezultApi[3] === 1){
        this.messageService.add({
          summary: "Unable to login",
          detail: "Invalid credentials."
        });
      }
      if (this.rezultApi[4] === 1){
        this.loginDialog = false;
        this.changePassWindow.changePassword = true;
        this.messageService.add({
          summary: "Unable to login",
          detail: "Please input a new password."
        });
      }
    }
  }

  async checkAuthorization(emailAdd: string, pass: string){
    await this.getAuthorizationData(emailAdd, pass).subscribe(m => this.rezultApi = m)
  }

  getAuthorizationData(emailAdd: string, pass: string):Observable<any>{
    return this.http.get("https://localhost:7236/" + "api/Alpha1es/" + emailAdd + "/" + pass)
  }

  hideDialog() {
    this.loginDialog = false;
    this.submited = false;
  }

  ngOnInit(): void {
  }
}
