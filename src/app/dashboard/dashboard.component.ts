import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JobseekerService } from '../Service/jobseeker.service';
import { EmployerService } from '../Service/employer.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { JobDialogComponent } from '../job-dialog/job-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  @ViewChild('searchbar')
  searchbar!: ElementRef;
  jobs:any;
  searchText ='';
  constructor(private jobseekerService:JobseekerService, private employerService:EmployerService,public dialog: MatDialog){}
  ngOnInit(): void {

    if(this.role=='EMPLOYER'){

      this.employerService.getJobsByUserId(parseInt(sessionStorage.getItem('userId')!)).subscribe(
        (data)=>{
          this.jobs = data;
          console.log(this.jobs);
        },
        error =>{
          console.log(error);

        }
      )

    }
    else{

      this.jobseekerService.getAllJobs().subscribe(
        (data)=>{
          this.jobs = data;
          console.log(this.jobs);
        },
        error =>{
          console.log(error);

        }
      )

    }
    
  }
  role = sessionStorage.getItem('role');

  toggleSearch: boolean = false;
  

  openSearch() {
    this.toggleSearch = true;
    this.searchbar.nativeElement.focus();
  }
  searchClose() {
    this.searchText = '';
    this.toggleSearch = false;
  }

  createJob(){
    const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = false;
  dialogConfig.disableClose = false;
  dialogConfig.data = {
    value:"create"
   
  }
  const dialogRef = this.dialog.open(JobDialogComponent, dialogConfig);

  }

}
