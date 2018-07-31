const export1= require('../models/export');

const export1Ctrl= {};

export1Ctrl.getExports = async (req, res) => {
    const forms = await formulario1.find();
    res.json(forms);
};

export1Ctrl.createExport = async (req, res) => {
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

export1Ctrl.getExport = async (req, res) => {
    const forms = await formulario1.findById(req.params.id);
    res.json(forms);
};

export1Ctrl.editExport = async (req, res) => {
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

export1Ctrl.deleteExport = async (req, res) => {
    await formulario1.findByIdAndRemove(req.params.id);
    res.json({
        status : 'forms deleted'
    });
};


module.exports= export1Ctrl;