const PatientRoutes = require('express').Router()

const { isAuth } = require('../../middlewares/auth.middelware')

const { getPatients, getPatient, postPatient, patchPatient, deletePatient  } = require('./patient.controller')

PatientRoutes.get('/', [isAuth], getPatients)
PatientRoutes.get('/:id', [isAuth], getPatient)
PatientRoutes.post('/register', [isAuth], postPatient)
PatientRoutes.patch('/:id', [isAuth], patchPatient)
PatientRoutes.delete('/:id', [isAuth], deletePatient)

module.exports = PatientRoutes