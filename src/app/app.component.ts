import { Component } from '@angular/core';
import { user } from './app-interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appUser:user[] = []
  public userAdded(userArray : user[]){
    this.appUser = userArray;
  }

}

