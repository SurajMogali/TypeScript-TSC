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

class User{

    public _courseCount=1 
  
   
   //If you dont want to access the varaible outisde the class, make it private
    readonly city:string ="Jaipur"
    constructor(public email:string,public name:string,
        // userId:string
        )
        {
        

    }


    private deleteToken(){ 
        console.log("Token deleted");

    }


    get getAppleEmail():string{
        return 'apple${this.email}'

    }

    get courseCount():number{
        return this._courseCount

    }

    set courseCount(courseNum){
        if(courseNum<=1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount=courseNum

    }


}

class SubUser extends User{

    isFamily :boolean=true
    changeCourseCount(){
        this._courseCount=4

    }

    
}


//private - That class only
//protected - That class and child class which inherits it
//public - That class,child class and outside the classes aslo

const hitesh=new User("h@h.com","hitesh");





