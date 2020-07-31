const userModel = require('../model/user');
const questionModel = require('../model/question');
const scoreModel = require('../model/score');
const scoremodel = require('../model/score');

let score = 0;

exports.SignUp = (req, res) => { 
    const user = new userModel({
          email: req.body.email 
    });
    
    user.save()
    .then(data => {
        res.send(data);
    })

};

exports.questionApi = async  (req, res) => { 


    let questionData =await questionModel.findOne({quesno :  req.body.quesno1});
    
    res.send({questionNo:questionData.quesno,question:questionData.question,options:questionData.options})

   

};

exports.addingQuestionApi = (req, res) => { 
    body = req.body;
    const questionData = new questionModel({
        quesno: body.quesno,
        question: body.question,
    options: body.options,
    correct: body.correct

  });
  
  questionData.save()
  .then(data => {
      res.send(data);
  })


   

};


exports.submitAnswerApi = async  (req, res) => { 
     let answer  = req.body.answer
     quesno = req.body.quesno
     email = req.body.email

    let result =await questionModel.findOne({quesno : quesno});
    if(answer == result.options[result.correct].answer )
    {
        score = score + 100;
        if(quesno==1){
            const scoreData = new scoreModel({
                email: email,
                score: score
          });
          scoreData.save();


        }
        
      
     scoredetails= await scoreModel.findOneAndUpdate({email:email,score: score})
        questionData = await questionModel.findOne({quesno:++quesno})
        if(quesno==6)
        {
            res.send({Score:score})
        }
        res.send({Answer_of_previous_question:true,questionNo:questionData.quesno,question:questionData.question,options:questionData.options})
        
    }
    else{
        questionData = await questionModel.findOne({quesno:++quesno})
        if(quesno==6)
        {
            res.send({Score:score})
        }
        res.send({Answer_of_previous_question:false,questionNo:questionData.quesno,question:questionData.question,options:questionData.options})
    }

   

};
