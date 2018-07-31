const formulario1= require('../models/formulario1');

const form1Ctrl= {};

form1Ctrl.getformularios1 = async (req, res) => {
    const forms = await formulario1.find();
    res.json(forms);
};

form1Ctrl.createformulario1 = async (req, res) => {
    const forms= new formulario1 ({
        firtsname: req.body.firtsname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        permiso: req.body.permiso
    });
    await forms.save();
    res.json({
        status: 'forms saved'
    })
};

form1Ctrl.getformulario1 = async (req, res) => {
    const forms = await formulario1.findById(req.params.id);
    res.json(forms);
};

form1Ctrl.editformulario1 = async (req, res) => {
    const { id } = req.params;
    const forms= {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        permiso: req.body.permiso
    }
    await formulario1.findByIdAndUpdate(id, {$set: forms}, {new: true});
    res.json({
        status : 'forms updated'
    });
};

form1Ctrl.deleteformulario1 = async (req, res) => {
    await formulario1.findByIdAndRemove(req.params.id);
    res.json({
        status : 'forms deleted'
    });
};


module.exports= form1Ctrl;