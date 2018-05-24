var mongoose=require('mongoose');
var StudentSchema=new mongoose.Schema({
	fullname:String,
	address:String,
	class:String,
	phone: String,
});
module.exports=mongoose.model('Student',StudentSchema);