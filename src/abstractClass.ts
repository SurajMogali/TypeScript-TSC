abstract class TakePhoto{

    constructor(
        cameraMode:string,
        public filter:string

    ){}

   abstract getSapia():void 

   getReelTime():number{

    //some complex calculation
    return 8

   }



    

}


class  Instagram2 extends TakePhoto{

    constructor(public cameraMode:string,public filter:string,public burst:number){
        super(cameraMode,filter)
    }

     getSapia():void {

        console.log("Sepia");
    
       }


       


    


}

//You can always create the object of the class which is inherited from the abstract class
const hc =new Instagram2("test","Test",3)


hc.getReelTime 






// class Instagram extends TakePhoto{

// }