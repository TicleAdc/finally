var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userSchema= new Schema({
    userId:{type:String,required:true},
    password:{type:String,required:true,min:8,max:16},
    phone:{type:String,required:true},
    name:{type:String,required:true,min:1,max:10},
    borrowlist:[{
        type:Schema.Types.ObjectId,
        ref:'books'
    }],
    
});

module.exports=mongoose.model('User',userSchema);