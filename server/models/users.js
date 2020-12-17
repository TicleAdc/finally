var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userSchema= new Schema({
    email:{type:String,required:true},
    pass:{type:String,required:true,min:8,max:16},
    phone:{type:String,required:true},
    name:{type:String,required:true,min:1,max:10},
    buylist:[{
        type:Schema.Types.ObjectId,
        ref:'Goods'
    }],
    
});

module.exports=mongoose.model('User',userSchema);