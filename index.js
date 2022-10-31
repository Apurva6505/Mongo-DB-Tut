const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Sample",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("Connected to MongoDB Successfully!!");
}).catch((err)=>{
    console.log(err);
})

const student = new mongoose.Schema({
    name:String,
    workout:Boolean,
    height:Number
})

const Student = new mongoose.model("Student",student);

const adder = async ()=>{

    // const ss = await Student.create({name:"anu",workout:false,height:5});

    // const ss = new Student({
    //     name:"Appu",
    //     workout:true,
    //     height:6
    // })
    
    // await ss.save();

    // const ss = await Student.create({
    //     name:"APPU",
    //     workout:true,
    //     height:6
    // });

    // const ss = await Student.find();
    const ss = await Student.find({height:{$eq:6}});
    console.log(ss);
}

adder();

// Refer MongoDB Documentation
