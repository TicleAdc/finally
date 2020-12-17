var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var goodsSchema= new Schema({
    name:{type:String,required:true},
    price:{type:String,required:true},
    pic:{type:String,required:true},
    type:{
        type:String,
        enum: ['魔兽世界', '守望先锋', '风暴英雄', '星际争霸2','星际争霸','魔兽争霸3重制版','炉石传说','暴雪','暗黑破坏神3'],
        required:true},
    describe:{type:String},
    findtype:{
        type:String,
        enum: ['wow', 'ow', 'hos', 'sc2','sc','wc3','hs','db3'],
        },
        computePrice:{type:Number,required:true},
    detailWords:{type:String,required:true},
    detailBkPic:{type:String,required:true},
    detailBrand:{type:String},
    detailLittleBrand:{type:String,required:true},   
});

module.exports=mongoose.model('Goods',goodsSchema);