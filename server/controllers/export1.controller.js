const export1= require('../models/export');

const export1Ctrl= {};

export1Ctrl.getExports = async (req, res) => {
    const forms = await export1.find();
    res.json(forms);
};

export1Ctrl.createExport = async (req, res) => {
    const forms= new export1 ({
        usuario: req.body.usuario,
        date: req.body.date,
        file: req.body.file,
        formulario: req.body.formulario
    });
    await forms.save();
    res.json({
        status: 'forms saved'
    })
};

export1Ctrl.getExport = async (req, res) => {
    const forms = await export1.findById(req.params.id);
    res.json(forms);
};

export1Ctrl.editExport = async (req, res) => {
    const { id } = req.params;
    const forms= {
        usuario: req.body.usuario,
        date: req.body.date,
        file: req.body.file,
        formulario: req.body.formulario
    }
    await export1.findByIdAndUpdate(id, {$set: forms}, {new: true});
    res.json({
        status : 'forms updated'
    });
};

export1Ctrl.deleteExport = async (req, res) => {
    await export1.findByIdAndRemove(req.params.id);
    res.json({
        status : 'forms deleted'
    });
};


module.exports= export1Ctrl;