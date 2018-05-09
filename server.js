var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://varshini:varshini@ds046067.mlab.com:46067/newcrud');


var Voter = mongoose.model('voter', mongoose.Schema({
	name:{
        type: String,
        required: true
    },
	fname:{
        type: String,
        required: true
    },
	dob:{
        type: String,
        required: true
    },
	address:{
        type: String,
        required: true
    },
	wno:{
        type: Number,
        required: true
    },
	vid:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    phno:{
        type: Number,
        required: true
    }
}));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/voter', function(req, res){
	Voter.find(function(err, voters){
		if(err)
			res.send(err);
		res.json(voters);
	});
});

app.get('/api/voter/:id', function(req, res){
	Voter.findOne({_id:req.params.id}, function(err, voter){
		if(err)
			res.send(err);
		res.json(voter);
	});
});
app.post('/api/voter', function(req, res){
	Voter.create( req.body, function(err, voter){
		if(err)
			res.send(err);
		res.json(voter);
	});
});

app.delete('/api/voter/:id', function(req, res){
	Voter.findOneAndRemove({_id:req.params.id}, function(err, voter){
		if(err)
			res.send(err);
		res.json(voter);
	});
});
app.put('/api/voter/:id', function(req, res){
	var query = {
		name:req.body.name,
		fname:req.body.fname,
		dob:req.body.dob,
		address:req.body.address,
		wno:req.body.wno,
		vid:req.body.vid,
        gender:req.body.gender,
		phno:req.body.phno
	};
	Voter.findOneAndUpdate({_id:req.params.id}, query, function(err, voter){
		if(err)
			res.send(err);
		res.json(voter);
	});
});
app.listen(process.env.PORT||3000, function(){
	console.log('server is running on port 3000..');
});
