import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ConfirmationService, MessageService} from "primeng/api";
import {AuthorizationPageComponent} from "../authorization-page/authorization-page.component";
import {Observable} from "rxjs";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePassword: boolean = false;
  submited: boolean = false;
  resultPut: number = 0;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  @Input() authWindow = '';
  @Output() changeLoginDialog = new EventEmitter<boolean>();

  public changePasswordFrom: FormGroup = new FormGroup(
    {
      oldPassword: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required])
    }
  )

  async changePasswords(){
    console.debug(this.authWindow)
    if (this.changePasswordFrom.valid){
      console.debug(this.authWindow, this.changePasswordFrom.value.oldPassword, this.changePasswordFrom.value.newPassword)
      await this.checkValid(this.authWindow, this.changePasswordFrom.value.oldPassword, this.changePasswordFrom.value.newPassword)
      if (this.resultPut === 0){
        this.changePassword = false;
        this.submited = true;
        this.confirmationService.confirm({
          accept: () => {
            this.messageService.add({
              summary: "Unable to change password",
              detail: "Old password is incorrect."
            });
          }
        })

      }
      if (this.resultPut === 1){
        this.messageService.add({
          summary: "Complete",
          detail: "Password is change."
        });
      }
    }
  }

  async checkValid(emailAdd: string, oldPass: string, newPass: string){
    await this.putChangePassword(emailAdd, oldPass, newPass).subscribe(resultPut => this.resultPut = resultPut)
  }

  putChangePassword(emailAddr: string, oldPass: string, newPassword: string) : Observable<any>
  {
    return this.http.get("https://localhost:7236/" + "api/Alpha1es/" + emailAddr + "/" + oldPass + "/" + newPassword)
  }

  hideDialog() {
    this.changeLoginDialog.emit(true);
    this.changePassword = false;
    this.submited = false;
  }
  ngOnInit(): void {
  }

}
