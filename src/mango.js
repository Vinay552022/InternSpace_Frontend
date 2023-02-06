
const mongoose=require('mongoose');
const url="mongodb+srv://Vinay552022:Python552022@cluster0.wsye7pi.mongodb.net/Project1?retryWrites=true&w=majority"
const connectionParams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}
mongoose.connect(url,connectionParams).then(()=>console.log("Connected to database"))
.catch((err)=>{
    console.log("Error conncting to database .\n ${err}");
})
const User=mongoose.model("users",{
    username:{type:String},
    email:{type:String},
    pswd:{type:String}
})
// User.create({
//     username:"vinay",
//     email:"vinayemail@",
//     pswd:"kkk"
// }).then(ans=>{console.log("Document inserted")})
// .catch(err=>{console.log("Error")})
User.find((error,docs)=>{
    if(!error){
        console.log("result :",docs);
    }
    else{
        console.log(err);
    }
    mongoose.disconnect();
    
})