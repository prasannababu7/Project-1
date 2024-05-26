import { Component } from '@angular/core';
import { GeneralService } from '../Service/general.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  attemptedLogin = false;
  message :any;


  formData:any = {
    email:"",
    password: ""
  }

  constructor( private userService : GeneralService, private router:Router){}
  ngOnInit(): void {
  }
  

  onSubmit() {
    this.userService.loginUser(this.formData).subscribe(

      (data)=>{
        
         console.log(data);
         this.attemptedLogin=true;
         this.message = "Login Successfull";
         this.router.navigateByUrl("/dashboard"), sessionStorage.setItem('userId', data.id),sessionStorage.setItem('userName', data.firstName), sessionStorage.setItem('role', data.role);
    },
      err => {
  
        this.message="Email or Password is wrong";
        console.log(err.message);
        this.attemptedLogin=true;
        
      }
      
      );
    console.log(this.formData);

  }

}
