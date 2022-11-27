const DoctorRoutes = require('express').Router()
const upload = require('../../middlewares/file')
const { isAuth } = require('../../middlewares/auth.middelware')

const { getDoctors, getDoctor, postDoctor, patchDoctor, deleteDoctor } = require('./doctor.controller')

DoctorRoutes.get('/', [isAuth], getDoctors)
DoctorRoutes.get('/:id', [isAuth], getDoctor)
DoctorRoutes.post('/register', upload.single("image"), [isAuth], postDoctor)
DoctorRoutes.patch('/:id', upload.single("image"), [isAuth], patchDoctor)
DoctorRoutes.delete('/:id', [isAuth], deleteDoctor)

module.exports = DoctorRoutes