module.exports = service;


function service(app, Health, Job, rndstring){

  app.post('/addHealth', async(req,res)=>{
    var new_health = new Health(req.body);
    new_health.token = rndstring.generate(23);
    try{
      var result = await new_health.save();
    }catch(e){
      if(e instanceof user_duplicate) return res.status(409).json({message:"already exist"});
      if(e instanceof ValidationError) return res.status(400).json({message: e.message});
      if(e instanceof paramsError) return res.status(400).json({message: e.message});
    }
    return res.status(200).json({token : result.token});
  })
  
  app.post('/addJob', async(req, res)=>{
    var new_job = new Job(req.body);
    new_job.token = rndstring.generate(23);
    try{
      var result = await new_job.save();
    }catch(e){
      if(e instanceof user_duplicate) return res.status(409).json({message:"already exist"});
      if(e instanceof ValidationError) return res.status(400).json({message: e.message});
      if(e instanceof paramsError) return res.status(400).json({message: e.message});
    }
    return res.status(200).json({token : result.token});
  })

  .post('/getHealthList', async(req,res)=>{    
    let result = await Health.find({token : req.body.token}).sort({ docNum : -1 });
    let list = [];
    for (var i=0; result[i] != null; i++) {
        let json = {
            name : result[i].name,
            percent : result[i].percent,
            count : result[i].count
        }
        list.push(json)
    }
    return res.status(200).json({list : list})
  })

  .post('/getJobList', async(req,res)=>{    
    let result = await Job.find({token : req.body.token}).sort({ docNum : -1 });
    let list = [];
    for (var i=0; result[i] != null; i++) {
        let json = {
            name : result[i].name,
            percent : result[i].percent,
            count : result[i].count
        }
        list.push(json)
    }
    return res.status(200).json({list : list})
  })


}
