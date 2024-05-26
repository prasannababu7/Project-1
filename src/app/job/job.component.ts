import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../Model/job';
import { EmployerService } from '../Service/employer.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ApplicationComponent } from '../application/application.component';
import { JobDialogComponent } from '../job-dialog/job-dialog.component';
import { Application } from '../Model/application';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit{
  @Input() job!:Job;
  @Input() index!:number;
  panelOpenState=false;
  applications : Application[]=[];
  role = sessionStorage.getItem('role'); 
  createdOn:any;
  constructor(private employerService:EmployerService, public dialog: MatDialog) {

    
  }
  ngOnInit(){
    this.createdOn = new Date(this.job.createdOn.toLowerCase()) 

    if(this.role=='EMPLOYER'){
      console.log(this.job.id)
      this.employerService.getApplicationsByJobId(this.job.id).subscribe(
        (data) =>{
          this.applications=data;
          console.log(this.applications);
          
        },
        error =>{
          console.log(error);
        }

      );

    }

  }

  openApplicationDialog(){
    const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = false;
  dialogConfig.disableClose = false;
  dialogConfig.data = {
    jobId: this.job.id,
  
  }
  const dialogRef = this.dialog.open(ApplicationComponent, dialogConfig);
  }

  openJobUpdateDialog(){
    const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = false;
  dialogConfig.disableClose = false;
  dialogConfig.data = {
    value:"update",
    job: this.job
   
  }
  const dialogRef = this.dialog.open(JobDialogComponent, dialogConfig);

  }
  deleteJob(){
    console.log(this.job.id)
    this.employerService.deleteJob(this.job.id).subscribe(
      (data)=>{
        console.log(this.job.id)
        console.log(data),
        window.location.reload();

      },
      error=>{
        console.log(error);
      }

    )
  }

}
