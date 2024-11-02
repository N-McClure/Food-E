import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  // Function to Change the User's Profile Picture: 
  changePfp() {
    alert("Trying to change current profile picture.")
  }

  // Http stuff to retreive local Testing Data JSON:
  users!: any;
  userArray!: any[];

  constructor(private http: HttpClient){}

  getUserData() {
    let testDataFile = 'assets/data/testData/testUserData.json'

    this.http.get(testDataFile).subscribe((response) => {
      this.users = response;
      this.userArray = this.users.testUsers;
    });
  }

  ngOnInit() {
    this.getUserData();
  }

}
