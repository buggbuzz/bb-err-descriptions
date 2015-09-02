var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');


router.use(bodyParser.urlencoded({ extend: true }))


router.use(methodOverride(function(req, res){
    if(req.body && typeof req.body === 'object' && '_method' in req.body)
    {
        //look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}))
    

router.route('/')
   
    //Get all descriptions
    .get(function(req, res, next)
    {
        mongoose.model('Description').find({}, function(err, blobs){
            if(err){
                return console.error(err);
            }else{
                //respond to both HTML and JSON
                res.format({
                    //render index.jade
                    html: function(){
                        res.render('descriptions/index',{
                                title: 'All collected descriptions',
                                "descriptions" : descriptions
                        });
                    },
                    
                    //JSON response to show all descriptions
                    jso: function(){
                        res.json(infophotos);
                    }
                });
            }
        });
    })
    
    
    //Add a new description
    .post(function(req, 
    


    
           