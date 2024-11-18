function detectType(val:number|string | number){ 
    if(typeof val==="string"){
        return val.toLowerCase()

    }

    return val+3
}

function provideId(id:string | null){
    if(!id){
        console.log("Please provide ID");
        return 
    }
    id.toLowerCase()
}


interface User{
    name:string,
    email:string
}

interface Admin{
    name:string,
    email:string,
    isAdmin:boolean
}

//With the help of in, we can findout whether the property is there in that interface or not
function isAdminAccount(account : User | Admin){
    if("isAdmin" in account){
        return account.isAdmin

    }
}
 

//instanceof narrowing 

class Customer {
    isCreditAllowed(): boolean {
        // ...
        return true;
    }
}

class Supplier {
    isInShortList(): boolean {
        // ...
        return true;
    }
}

type BusinessPartner = Customer | Supplier;

function signContract(partner: BusinessPartner) : string {
    let message: string;
    if (partner instanceof Customer) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    }

    if (partner instanceof Supplier) {
        message = partner.isInShortList() ? 'Sign a new contract the supplier' : 'Need to evaluate further';
    }

    return message;
}



type Fish ={swim :()=>void};
type Bird ={fly:()=>void};


function isFish(pet:Fish | Bird) : pet is Fish{
    return (pet as Fish).swim !==undefined
}

function getFood(pet:Fish | Bird){
    if(isFish(pet)){
        pet
        return "fish food"
    }else{
        pet
        return "bird Food"
    }
}


interface Circle{
    kind:"circle"
    radius:number
}

interface Square{
    kind:"square"
    side:number
}

interface Rectangle{
    kind:"rectangle",
    length:number,
     width:number
}


type Shape = Circle | Square 

function getTrueShape(shape: Shape){
    if(shape.kind==="circle"){
        return Math.PI * shape.radius ** 2
    }

    return shape.side * shape.side

}


function getArea(shape:Shape){
    switch(shape.kind){
        case  "circle":
            return Math.PI * shape.radius ** 2

        case "square":
            return shape.side * shape.side

       

        default :
        const _defaultforshape:never =shape
        return _defaultforshape
        
    }
}
 