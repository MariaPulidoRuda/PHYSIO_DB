const Patient = require('./patient.model')

const {setError} = require('../../helpers/error/handle.error')

const getPatients = async (req, res, next) => {
    try {
const patients = await Patient.find()
return res.json({
    status: 200,
    message: 'Recovered Patients',
    data: { patients }
})
    } catch (error) {
        return next(setError(500, 'Fail to recover patients'))
    }
}
const getPatient = async (req, res, next) => {
    try {
        const { id } = req.params;
        const patient = await Patient.findById(id);
        res.status(200).json(patient);
    } catch (error) {
        return next(error)
    }
}

const postPatient = async (req, res, next) => {
    try {
        const newPatient = new Patient(req.body)
        const newPatientInDB = await newPatient.save()

        return res.json({
            status: 201,
            message: 'Registered Patient',
            data: { newPatientInDB }
        })
    } catch (error) {
        return next(error);

    }
}
const patchPatient = async (req, res, next) => {
    try {
        const { id } = req.params;
        const patient = new Patient(req.body);
        patient._id = id;
        const updatePatient = await Patient.findByIdAndUpdate(id, patient);
        return res.status(200).json(updatePatient);
    } catch (error) {
        return next(error);
    }
}


const deletePatient = async (req, res, next) => {
    try {
        const { id } = req.params;
        const patient = await Patient.findByIdAndDelete(id);
        return res.status(200).json(patient);
    } catch (error) {
        return next(error);
    }
}
module.exports = { getPatients, getPatient, postPatient, patchPatient, deletePatient }