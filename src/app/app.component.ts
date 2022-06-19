import {Component, ViewChild} from '@angular/core';
import {AuthorizationPageComponent} from "./authorization-page/authorization-page.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AUTHORIZATION';

  @ViewChild('authWindow') authWindow!: AuthorizationPageComponent;

  openNew(){
    this.authWindow.loginDialog = true;
  }
}
