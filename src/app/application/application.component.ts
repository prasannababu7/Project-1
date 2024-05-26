import { Component, Inject } from '@angular/core';
import { Application } from '../Model/application';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Data } from '@angular/router';
import { JobseekerService } from '../Service/jobseeker.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
  
})
export class ApplicationComponent {
  constructor(
    public dialogRef: MatDialogRef<Application>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private jobseekerService: JobseekerService
  ) {}
  application:Application = new Application(0,parseInt(sessionStorage.getItem('userId')!),this.data.jobId,new Date().toUTCString(),"");

  apply(){
    this.application.jobId=this.data.jobId;
    this.application.userId=parseInt(sessionStorage.getItem('userId')!);
    this.application.appliedOn=new Date().toISOString();
    console.log(this.application)
    this.jobseekerService.applyForJob(this.application).subscribe(
      (data) => {
        console.log(data),
        this.dialogRef.close();
      },
      error=>{
        console.log(error)


      }

    );
    this.dialogRef.close();


  }
  close(){
    this.dialogRef.close();
  }

}
