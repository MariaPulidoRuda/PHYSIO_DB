const Doctor = require('./doctor.model')

const {setError} = require('../../helpers/error/handle.error')

const getDoctors = async (req, res, next) => {
    try {
const doctors = await Doctor.find()
return res.json({
    status: 200,
    message: 'Recovered all Doctors',
    data: { doctors }
})
    } catch (error) {
        return next(setError(500, 'Fail to recover doctor'))
    }
}
const getDoctor = async (req, res, next) => {
    try {
        const { id } = req.params;
        const doctor = await Doctor.findById(id);
        res.status(200).json(doctor);
    } catch (error) {
        return next(error)
    }
}

const postDoctor = async (req, res, next) => {
    try {
        const newDoctor = new Doctor(req.body)
        if (req.file) {
            newDoctor.image = req.file.path;
        }
        const newDoctorInDB = await newDoctor.save()

        return res.json({
            status: 201,
            message: 'Registered Doctor',
            data: { newDoctorInDB }
        })
    } catch (error) {

    }
};

const patchDoctor = async (req, res, next) => {
    try {
        const { id } = req.params;
        const doctor = new Doctor(req.body);
        if (req.file) {
            doctor._id = id;
            doctor._id.image = req.file.path;
        }
        
        const updateDoctor = await Doctor.findByIdAndUpdate(id, doctor);
        return res.status(200).json(updateDoctor);
    } catch (error) {
        return next(error);
    }
}

const deleteDoctor = async (req, res, next) => {
    try {
        const { id } = req.params;
        const doctor = await Doctor.findByIdAndDelete(id);
        return res.status(200).json(doctor);
    } catch (error) {
        return next(error);
    }
}
module.exports = { getDoctors, getDoctor, postDoctor, patchDoctor, deleteDoctor }