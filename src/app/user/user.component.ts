import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { RandomUser } from '../models/random-user.model';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName: string;
  userAge: number;
  userEmail: string;
  userGender: string;
  users: Array<User>;
  genders;
  bgColor = "";
  bgUnder18 = "lightblue";
  bgUnder65 = "orangered";
  bgOver65 = "crimson";

  constructor(private service: UserService) { 
    this.userName = "";
    this.userAge = 1;
    this.userEmail = "";
    this.userGender = "";
    this.users = [new User("Mary Jane", 12, "maryJ@yahoo.com", "Female")];
    this.genders = service.getGenders();
  }

  addUser(): void {
    if(this.validateName() && this.validateName() && this.validateAge() && this.validateGender()) {
      this.setBackground();
      this.users.push(new User(this.userName, this.userAge, this.userEmail, this.userGender));
    } 
  }

  ngOnInit(): void {
  }

  validateEmail(): boolean {
    return this.userEmail !== "" && this.userName.includes("@");
  }

  validateName(): boolean {
    return this.userName !== "";
  }

  validateAge(): boolean {
    return this.userAge > 0;
  }
  
  validateGender(): boolean {
    return this.userGender === "Male" || this.userGender === "Female" || this.userGender === "Other";
  }

  setBackground(): void {
    if(this.userAge < 18) {this.bgColor = "lightblue";}
    else if(this.userAge > 18 && this.userAge < 65) {this.bgColor = this.bgUnder65;}
    else if(this.userAge > 65) {this.bgColor = this.bgOver65;}
  }

  addRandomUser() {
    this.service.getRandomUser().subscribe(result => {
      const randomUser: RandomUser = result;
      const name: string = randomUser.results[0].name.first + " " + randomUser.results[0].name.last;
      const age: number = randomUser.results[0].dob.age;
      const email: string = randomUser.results[0].email;
      const gender: string = randomUser.results[0].gender;
      this.users.push(new User(name, age, email, gender))
    })
    
  }

}

