export class Job {
    id: Number;
  creatorId: Number;
  companyName: String;
  logoLink: String;
  createdOn: String;
  designation: String;
  location: String;
  description: String;
  skills: String[];
    constructor(
         id?:Number,
         creatorId?: Number,
         companyName?:String,
         logoLink?:String,
         createdOn?:String,
        designation?: String,
         location?: String,
         description?: String ,
         skills?: String[]
    ){

         this.id = id || 0,
         this.creatorId =  creatorId || 0;
         this.companyName = companyName || "";
         this.logoLink = logoLink || "";
         this.createdOn = createdOn || new Date().toUTCString();
         this.designation = designation || "";
         this.location = location || "";
         this.description =  description || "";
         this.skills = skills || [];
        

    }
}
