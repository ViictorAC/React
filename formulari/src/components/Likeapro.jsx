import React from 'react'
import { Field, useFormik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
    email: Yup.string().email('Email invalid').required('El email és obligatori'),
    password: Yup.string().min(6, 'Massa curt').max(20, 'Massa llarg').required('Contrasenya és obligatoria'),
    lenguaje: Yup.array().required('Selecciona un idioma')
})

const Likeapro = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            lenguaje: ''
        },
        validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        }
    })


    return (
        <div>
            <h2>Formulario Formik i Yup</h2>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formik.values.email}
                    autoComplete="off"
                    onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formik.values.password}
                    autoComplete="off"
                    onChange={formik.handleChange}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                ) : null}
                

                <select
                    name='lenguaje'
                    value={formik.values.lenguaje}
                    autoComplete='off'
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                >
                    <option value="">Selecciona un idioma</option>
                    <option value="es">Español</option>
                    <option value="ca">Catala</option>
                    <option value="en">Anglés</option>
                </select>

                <input type="submit" value="Enviar" />
            </form>
        </div>

    )


}

export default Likeapro