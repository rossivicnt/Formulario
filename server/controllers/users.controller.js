const User= require('../models/users');

const userCtrl= {};

userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

userCtrl.createUser = async (req, res) => {
    const user= new User ({
        firtsname: req.body.firtsname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        permiso: req.body.permiso
    });
    await user.save();
    res.json({
        status: 'user saved'
    })
};

userCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
};
userCtrl.editUser = async (req, res) => {
    const { id } = req.params;
    const user= {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        permiso: req.body.permiso
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