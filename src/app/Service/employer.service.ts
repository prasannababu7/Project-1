import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../Model/job';
import { Application } from '../Model/application';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  base_url = "http://revhire-user-service:8082/";
  constructor(private http: HttpClient) {   }

  public getJob(Id:number):Observable <any>{
    
    return this.http.get<Job>(this.base_url+`job/${Id}`);
    
  }
  public updateJob(Id:Number, job:Job):Observable <any>{
    
    return this.http.put<Job>(this.base_url+`job/${Id}`, job);
    
  }
  public deleteJob(Id:Number):Observable <any>{
    
    return this.http.delete(this.base_url+`job/${Id}`, {responseType : 'text'});
    
  }
  public getJobsByUserId(Id:Number):Observable <any>{
    
    return this.http.get<Job[]>(this.base_url+`jobs/${Id}`);
    
  }
  public getApplicationsByJobId(Id:Number):Observable <any>{
    
    return this.http.get<Application[]>(this.base_url+`applications/job/${Id}`);
    
  }
  public createJob(job:Job):Observable <any>{
    
    return this.http.post<Job>(this.base_url+`job/create`,job);
    
  }



  
}
