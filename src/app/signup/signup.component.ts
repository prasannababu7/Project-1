import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../Service/general.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  titles = ["Dr", "Mr", "Miss", "Ms"];
  genders = ["F", "M", "O"];
  roles = ["JOBSEEKER", "EMPLOYER"]
  message = "";
  isRegistered :any;

  formData: any = {
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    password: '',
    dob: '',
    role: '',
    designation: '',
    address: '',
    gender: ''
  };

  constructor( private userService : GeneralService){}
  ngOnInit(): void {
  }
  

  onSubmit() {
    this.userService.registerUser(this.formData).subscribe(

      (data)=>{
        
         console.log(data);
         this.isRegistered=true;
         this.message = "Registration Successfull";
    },
      err => {
  
        this.message="Unable to register";
        console.log(err.message);
        this.isRegistered=true;
        
      }
      
      );
    console.log(this.formData);

  }


}
