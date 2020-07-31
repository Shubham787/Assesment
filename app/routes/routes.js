module.exports = (app) => {
    const Assesment = require('../controller/controller');

    app.post('/signUp', Assesment.SignUp)

    app.get('/questionApi',Assesment.questionApi)

    app.post('/addingQuestionApi',Assesment.addingQuestionApi)
    
    app.post('/submitApi',Assesment.submitAnswerApi)

   
}