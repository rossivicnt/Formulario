const formulario2= require('../models/formulario2');

const form2Ctrl= {};

form2Ctrl.getformularios2 = async (req, res) => {
    const forms = await formulario2.find();
    res.json(forms);
};

form2Ctrl.createformulario2 = async (req, res) => {
    const forms= new formulario2 ({
        NombrePaciente: req.body.NombrePaciente,
        Rut: req.body.Rut,
        Solicitud: req.body.Solicitud,
        Poliza: req.body.Poliza,
        Diagnostico: req.body.Diagnostico,
        fechaDiagnostico: req.body.fechaDiagnostico,
        Metodo: req.body.Metodo,
        sintomas: req.body.sintomas,
        Tiempo: req.body.Tiempo,
        Peso: req.body.Peso,
        Tratamiento: req.body.Tratamiento,
        patologia: req.body.patologia,
        med_deriv : req.body.med_deriv,
        nom_medico: req.body.nom_medico,
        insNroCol: req.body.insNroCol,
        tlfn: req.body.tlfn,
        fecha_informe: req.body.fecha_informe
    });
    await forms.save();
    res.json({
        status: 'forms saved'
    })
};

form2Ctrl.getform2 = async (req, res) => {
    console.log(req.params.id);
    const forms = await formulario2.findById(req.params.id);
    res.json(forms);
};

form2Ctrl.getformulario2 = async (req, res) => {
    
    const rut= {
        Rut: req.params.Rut
    }
    console.log(rut);
    const forms = await formulario2.find(rut).sort({$natural:-1}).limit(1);
    res.json(forms);
};

form2Ctrl.editformulario2 = async (req, res) => {
    const { id } = req.params;
    const forms= {
        NombrePaciente: req.body.NombrePaciente,
        Rut: req.body.Rut,
        Solicitud: req.body.Solicitud,
        Poliza: req.body.Poliza,
        Diagnostico: req.body.Diagnostico,
        fechaDiagnostico: req.body.fechaDiagnostico,
        Metodo: req.body.Metodo,
        sintomas: req.body.fechaPeso,
        Tiempo: req.body.Tiempo,
        Peso: req.body.Peso,
        Tratamiento: req.body.Tratamiento,
        patologia: req.body.patologia,
        med_deriv : req.body.med_deriv,
        nom_medico: req.body.nom_medico,
        insNroCol: req.body.insNroCol,
        tlfn: req.body.tlfn,
        fecha_informe: req.body.fecha_informe
    }
    await formulario2.findByIdAndUpdate(id, {$set: forms}, {new: true});
    res.json({
        status : 'forms updated'
    });
};

form2Ctrl.deleteformulario2 = async (req, res) => {
    await formulario2.findByIdAndRemove(req.params.id);
    res.json({
        status : 'forms deleted'
    });
};


module.exports= form2Ctrl;