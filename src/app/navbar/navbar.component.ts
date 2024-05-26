import { Component, ElementRef, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { JobseekerService } from '../Service/jobseeker.service';
import { EmployerService } from '../Service/employer.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('searchbar')
  searchbar!: ElementRef;
  jobs:any;
  searchText:any;
  constructor(private jobseekerService:JobseekerService, private employerService:EmployerService,public dialog: MatDialog, private router:Router){
    const storedSearchText = sessionStorage.getItem('searchText');
    if (storedSearchText) {
      this.searchText = storedSearchText;
    }
  }

  // Update session storage whenever searchText changes
  updateSessionStorage(searchText: string) {
    sessionStorage.setItem('searchText', searchText);
  
  }
  isDarkMode = false;
  role = sessionStorage.getItem('role');
  logout(){
    sessionStorage.clear();
    this.router.navigateByUrl("/");
    
  }
  darkMode=false
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    sessionStorage.setItem('darkMode', this.darkMode.toString());
  }

  toggleSearch: boolean = false;
  openSearch() {
    this.toggleSearch = true;
    this.searchbar.nativeElement.focus();
  }
  searchClose() {
    this.searchText = '';
    this.toggleSearch = false;
  }
  

}
function toggleDarkMode() {
  throw new Error('Function not implemented.');
}

