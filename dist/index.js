"use strict";
// class User{
//     email : string
//     private name:string
//    //If you dont want to access the varaible outisde the class, make it private
//     readonly city:string ="Jaipur"
//     constructor(email:string,name:string){
//         this.email=email;
//         this.name=name
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        //If you dont want to access the varaible outisde the class, make it private
        this.city = "Jaipur";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return 'apple${this.email}';
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
//private - That class only
//protected - That class and child class which inherits it
//public - That class,child class and outside the classes aslo
const hitesh = new User("h@h.com", "hitesh");
