import { Component } from '@angular/core';
import { user } from './app-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  users :user[] = [
    {
      email:'a@a.com',
      password:'123',
      address:'asdf'
    },
    {
      email:'b@b.com',
      password:'456',
      address:'qwqr'
    },
    {
      email:'c@c.com',
      password:'789',
      address:'zcvcv'
    }
  ]

  public addNewUser(userEmail:string,userPassword:string,userAddress:string,e:Event){
    e.preventDefault();
    let u:user ={
      email: userEmail,
      password : userPassword,
      address : userAddress
    };
    this.users.push(u)
  }


}

