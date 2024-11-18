const score:Array<number> =[]
const names: Array<string>=[]

function identityOne(val :boolean | number):boolean | number{

    return val

}

function identityTwo(val:any) :any{
    return val;

}


//You are locking the variable value 
function identity3<Type>(val:Type):Type{
    return val;

}


//identity3("3") 


function identity4<T>(val:T):T{
    return val;

}

interface Bottle{
    // brand:string,
    // type:number
}

identity4<Bottle>({})

function getSearchProducts<T>(products:T[]):T{
    const myIndex=3
    return products[myIndex]

}  

const getMoreSearchProducts= <T>(products:T[]):T => {
    //do some database operations
    const myIndex=4
    return products[myIndex]

} 


interface Database{
    connection:string,
    username:string,
    password:string
}

function anotherFunction<T,U extends Database>(valOne:T,valTwo:U):object{
    return{
        valOne,
        valTwo
    }

}


// anotherFunction(3,{})


interface Quiz{
    name:string,
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string
}


class Sellable<T>{
    public cart:T[]=[]

    addToCart(products:T){
        this.cart.push(products)

    }
}


 

 


