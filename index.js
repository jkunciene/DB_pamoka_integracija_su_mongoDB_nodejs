const express = require("express");
const mongoose = require("mongoose");
const app = express();

const User = require("./models/User");

const connectDB = async()=>{
    try {
        await mongoose.connect("irašyti savo prisijungimo string", 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("valioooo");
    
    } catch (err)
     {
        console.log("nesijungia");
    }
} 
connectDB();
app.get("/", async(req, res) =>{
    try {
        const user = new User({
            name: "įrašyti savo duomenis",
            email: "įrašyti savo duomenis",
            password: "įrašyti savo duomenis"            
        });
       const newUser = await user.save();
        res.send(
        "duomenys isaugoti"
            );
        
        res.json(newUser);

    } catch (error) {
        console.log(error.message);
    }
   
});
app.get("/user/:id", async(req, res) =>{
    try {
        
        const user = await User.findById(req.params.id);
        return res.json(user);

    } catch (error) {
        console.log(error.message);
    }
})
app.listen(3000, ()=>{
    console.log('Server started on port');
});

