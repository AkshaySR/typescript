class userDetails {
    private _userName : string;
    private _userAge : number = 50;
    private _userEmailID : string;
    private _userPhoneNumber : number;
    private _userLocation : string;

    constructor (userName : string , userAge : number, userEmailID : string , userPhoneNumber :number , userLocation :string){
        this._userName = userName;
        this._userAge =userAge;
        this._userEmailID =userEmailID;
        this._userLocation = userLocation;
        this._userPhoneNumber = userPhoneNumber;
    }

    printUserAge(){
        console.log(this._userAge);
    }

    private setUserLocation(userLocation: string){
        this._userLocation = userLocation;
        console.log(this._userLocation);
    }


    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }

    get userAge(): number {
        return this._userAge;
    }

    set userAge(value: number) {
        this._userAge = value;
    }

    get userEmailID(): string {
        return this._userEmailID;
    }

    set userEmailID(value: string) {
        this._userEmailID = value;
    }

    get userPhoneNumber(): number {
        return this._userPhoneNumber;
    }

    set userPhoneNumber(value: number) {
        this._userPhoneNumber = value;
    }

    get userLocation(): string {
        return this._userLocation;
    }

    set userLocation(value: string) {
        this._userLocation = value;
    }
}

const userDetails1 = new userDetails("Alex",25,"qwewqr@gmail.com",87436464,"USA");
console.log(userDetails1.userName);
userDetails1.printUserAge();

//Inheritance
class JackUserDetails extends userDetails {
    jackUserName : string = "jack";
    jackAge : number = 60;
    jackEmailID = "jack@gmail.com";
    jackLocation = "newYork";
    jackPhoneNumber =214324325;

    constructor(jackUserName :string, jackAge:number,jackEmailID :string,jackPhoneNumber :number,jackLocation:string){
        super(jackUserName,jackAge,jackEmailID,jackPhoneNumber,jackLocation);
    };
}

