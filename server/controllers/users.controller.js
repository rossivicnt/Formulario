const User= require('../models/users');

const userCtrl= {};

userCtrl.getUser = async (req, res) => {
    const email= {
        email: req.params.email
    }
    const user = await User.find(email).sort({$natural:-1}).limit(1);
    res.json(user);
};

userCtrl.editUser = async (req, res) => {
    const { id } = req.params;
    const user= {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        permiso: req.body.permiso,
        creation_dt: Date.now()
    }
    await User.findByIdAndUpdate(id, {$set: user}, {new: true});
    res.json({
        status : 'user updated'
    });
};

userCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({
        status : 'user deleted'
    });
};


module.exports= userCtrl;