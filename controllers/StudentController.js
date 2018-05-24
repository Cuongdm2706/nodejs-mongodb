var mongoose=require("mongoose");
var Student=mongoose.model("Student");
var studentController={};

//list danh sach hoc sinh
studentController.list=function(req,res){
	Student.find({}).exec(function(err,students){
		if(err){
			console.log("Error: ",err);
		}
		else{
			res.render("../views/students/main",{students: students});
		}
	});
};

//show detail hoc sinh
studentController.show=function(req,res){
	Student.findOne({_id:req.params.id}).exec(function(err,student){
		if(err){
			console.log("Error: ",err);
		}
		else{
			res.render("../views/students/show",{student:student});
		}
	});
};
//add hoc sinh
studentController.create=function(req,res){
	res.render("../views/students/create");
};

studentController.save=function(req,res){
	var student=new Student(req.body);

	student.save(function(err){
		if(err){
			console.log(err);
			res.render("../views/students/create");
		}else{
			console.log("Them thanh cong");
			res.redirect("/students/show/"+student._id);
		}
	});
}
//edit hoc sinh
studentController.edit=function(req,res){
	Student.findOne({_id:req.params.id}).exec(function(err,student){
		if(err){
			console.log("Error: ",err);
		}
		else{
			res.render("../views/students/edit",{student:student});
		}
	});
}

//update sau khi edit
studentController.update=function(req,res){
	Student.findByIdAndUpdate(req.params.id,{ $set:{name:req.body.fullname, address:req.body.address, class:req.body.class, phone:req.body.phone }},{new:true},function(err,student){
		if(err){
			console.log(err);
			res.render("../views/students/edit",{student: req.body});
		}
		res.redirect("/students/show/"+student._id);
	});
};
//delete hoc sinh
studentController.delete=function(req,res){
	Student.remove({_id:req.params.id},function(err){
		if(err){
			console.log(err);
		}else{
			console.log("Hoc sinh da duoc xoa");
			res.redirect("/students");
		}

	});
};
module.exports=studentController;