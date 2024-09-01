function global(){
    console.log(this);
    
}

// global();
// now in this function global this will indicate the object of its entire parent, which is window;

let obj = {
    name:"nayan",
}

obj.x=global;

console.log(obj.x);

//now when ever I declared the  global function as a value of object key "x" it exposing the entire parent which is Obj object 