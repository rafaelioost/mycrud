const validations = require('../validations/userController');

const signup = async (req, res) => {
    const user = {...req.body};
    try{
        validations.userName(user.name)
        validations.userName(user.lastname)
        validations.userEmail(user.email)
        validations.userPassword(user.password)
        validations.iqualOrError(user.passconfirm)


    }catch(msg){
        return res.status(400).send(msg)
    }

    res.status(200).send('OK')
};


module.exports = { signup }