const modelfile = require('../model/model')

exports.matching = (request,response) => {

    console.log(request.body.name);
    console.log(request.body.email);
    console.log(request.body.message);

    const checking = new modelfile({
        name: request.body.name,
        email: request.body.email,
        message: request.body.message,
    })
    console.log(checking);
    checking.save().then(()=>{
        response.redirect('/tq')
    })

}