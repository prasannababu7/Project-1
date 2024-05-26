import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Job } from '../Model/job';
import { EmployerService } from '../Service/employer.service';

@Component({
  selector: 'app-job-dialog',
  templateUrl: './job-dialog.component.html',
  styleUrls: ['./job-dialog.component.css']
})
export class JobDialogComponent {
  skills:any;
  success :any;
  job: Job = new Job();
  isCreateMode: boolean;
  constructor(
    public dialogRef: MatDialogRef<JobDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private employerService: EmployerService
  ) {
    this.isCreateMode = data.value === 'create';
    this.job = data.job || new Job();
  }



  save() {
    this.job.skills = this.skills.split(',');
    if (this.isCreateMode) {
      this.createJob();
    } else {
      this.updateJob();
    }
  }

  private createJob() {
    
    this.job.creatorId=parseInt(sessionStorage.getItem('userId')!)
    this.job.createdOn= new Date().toUTCString() 
    console.log(this.job)
    this.employerService.createJob(this.job).subscribe(
      (data) => {
        this.job = data;
        console.log(this.job);
        this.success = true;
        this.dialogRef.close();
      },
      (error) => {
        console.log(error);
        this.success = false;
        this.dialogRef.close();
      }
    );
  }

  private updateJob() {
    this.employerService.updateJob(this.job.id, this.job).subscribe(
      (updatedData) => {
        console.log(updatedData);
        this.job = updatedData;
        this.success = true;
        this.dialogRef.close();
      },
      (error) => {
        console.log(error);
        this.success = false;
      }
    );
  }
  close(){
    this.dialogRef.close();
    window.location.reload()
  }

}
