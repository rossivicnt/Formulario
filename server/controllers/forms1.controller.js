const formulario1= require('../models/formulario1');

const form1Ctrl= {};

form1Ctrl.getformularios1 = async (req, res) => {
    const forms = await formulario1.find();
    res.json(forms);
};

form1Ctrl.createformulario1 = async (req, res) => {
    const forms= new formulario1 ({
        NombrePaciente: req.body.NombrePaciente,
        Rut: req.body.Rut,
        Solicitud: req.body.Solicitud,
        Poliza: req.body.Poliza,
        Diagnostico: req.body.Diagnostico,
        fechaDiagnostico: req.body.fechaDiagnostico,
        Metodo: req.body.Metodo,
        fechaPeso: req.body.fechaPeso,
        Farmacos: req.body.Farmacos,
        Tiempo: req.body.Tiempo,
        Peso: req.body.Peso,
        Talla: req.body.Talla,
        IMC: req.body.IMC,
        Tratamiento: req.body.Tratamiento
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
        NombrePaciente: req.body.NombrePaciente,
        Rut: req.body.Rut,
        Solicitud: req.body.Solicitud,
        Poliza: req.body.Poliza,
        Diagnostico: req.body.Diagnostico,
        fechaDiagnostico: req.body.fechaDiagnostico,
        Metodo: req.body.Metodo,
        fechaPeso: req.body.fechaPeso,
        Farmacos: req.body.Farmacos,
        Tiempo: req.body.Tiempo,
        Peso: req.body.Peso,
        Talla: req.body.Talla,
        IMC: req.body.IMC,
        Tratamiento: req.body.Tratamiento
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