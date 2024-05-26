export class LoginCredentials {

    constructor(
        public email: String,
        public password: String,

    ){
        this.email=email|| "";
        this.password=password || "";

    }
}
