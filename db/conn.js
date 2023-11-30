const {default :mongoose } = require("mongoose");
 mongoose.connect("mongodb+srv://kapil:8279a8PKwHyRWSKq@cluster0.l3geqbo.mongodb.net/?retryWrites=true&w=majority",{

    
    // return promise
}).then(()=>{
    console.log("connection is successful");
}).catch((e)=>{
    console.log("tumnse na ho payega");
})
