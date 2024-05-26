export class User {
    constructor(
        public id: number,
        public firstName: String,
        public lastName: String,
        public title: String,
        public contactNumber :String,
        public email: String,
        public password: String,
        public dob: String,
        public role: String,
        public designation: String,
        public address: String,
        public gender:String

    ){
        this.id = id || 0;
        this.firstName = firstName || "";
        this.lastName = lastName || ""; 
        this.title =  title || "";
        this.contactNumber =  contactNumber || "";
        this.email = email || "";
        this.password =  password || "";
        this.dob =  dob || "";
        this.role =  role || "";
        this.designation =  designation || "";
        this.address =  address || "";
        this.gender =  gender || "";

    }
}
