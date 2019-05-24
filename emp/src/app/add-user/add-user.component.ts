import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModelComponent } from '../user-model/user-model.component';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @ViewChild('addUserForm') addUserForm: NgForm;

    user = {
      Username: 'anfdlk',
      Address: 'lkdjfsks',
      Phone_No: '798430'
    };

  //  endpoint = 'http://localhost:3000/signup';
   httpOptions;

  constructor(private http: HttpClient) {
     this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })


    };
    var userData = {
      // userName:this.addUserForm.value.userName
    };
    
    // console.log(product);
    
    
    // var userData = {
    //   userName:this.addUserForm.value.userName
    // };
    // this.userModel.addUser(userData);
   }

  ngOnInit() {
  }
  // onCreateUser(e) { 
  //   e.preventDefault();
  //   console.log(this.addUserForm.value.userName);
  //   var userData = {
  //     userName:this.addUserForm.value.userName
  //   };
  //   this.userModel.addUser(userData);
  // }

  callTheAPI(uname,add,phn){
    // console.log("uname : "+uname+" add "+add+" phn: "+phn);
  }

  onCreateUser(){
    console.log("user:",JSON.stringify(this.user));  
    try{
      this.http.post('/api', JSON.stringify(this.user), this.httpOptions)
        .subscribe(data=>{
          console.log(data);
          alert("saved!")
        })
      ;
    } catch(err){
      console.log(err)
    }
    
  }

}
