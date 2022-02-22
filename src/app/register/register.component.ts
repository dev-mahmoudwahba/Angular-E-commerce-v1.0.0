
import { RegisterService } from './register.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../Shared Classes/user';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  topics =["Facebook","Twitter","Google"]
  usermodule:User=new User("","","");
  repeatedPass:string;
  pass:string;
  message:string= ""

  constructor(private register:RegisterService) {
    this.repeatedPass = '';
    this.pass = '';

   }

  ngOnInit(): void {
  }
  Confirm(event:any){
    this.repeatedPass = event.target.value;

  }
  Pass(event:any){
    this.pass = event.target.value;

  }

  Submit(){
    console.log(this)
    console.log(this.usermodule);
    localStorage.setItem('email', this.usermodule.email );
    localStorage.setItem('password', this.usermodule.password );
    this.register.register(this.usermodule).subscribe(res=>
    {
      console.log(res);
    },
    error=>
    {
      console.log(error);

    })
  }

  aftersubmit(){
    this.message = "registerion done"
  }

}




