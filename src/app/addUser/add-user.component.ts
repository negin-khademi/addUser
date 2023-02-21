import { Component, EventEmitter, OnInit, Output } from "@angular/core";

import { user } from './../app-interface';

@Component ({
  selector:'app-add-user',
  templateUrl:'./add-user.component.html'
})
export class AddUserComponent implements OnInit {
  constructor(){}

  ngOnInit(): void {}

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
  @Output() onAddUserClicked = new EventEmitter<user[]>()
  public addNewUser(userEmail:string,userPassword:string,userAddress:string,e:Event){
    e.preventDefault();
    let u:user ={
      email: userEmail,
      password : userPassword,
      address : userAddress
    };
    this.users.push(u);
    this.onAddUserClicked.emit(this.users)
  }
}
