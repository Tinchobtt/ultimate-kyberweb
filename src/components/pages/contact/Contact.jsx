import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, MenuItem, TextField, ThemeProvider , Typography, createTheme } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useContext, useRef } from "react"
import { PackageContext } from "../../../context/PackageContext"
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'Yup';
import { services } from "../../../lists/services";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const Contact = () => {
  const { type } = useParams()
  let service = Number(type) > 0 && services.find( serv => serv.id === Number(type))
  const { packageUnit, setPackageUnit } = useContext(PackageContext)
  const form = useRef();
  
  const {handleSubmit, handleChange, handleBlur, touched, values, errors, isSubmitting} = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      auth: false,
      info: false,
    },
    onSubmit: (values, action)=>{
      emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
      .then(() => {
          Swal.fire({
            position: 'center-center',
            icon: 'success',
            title: '¡Tu mensaje ha sido enviado exitosamente!',
            text: 'Nos pondremos en contacto contigo lo antes posible',
            showConfirmButton: true
          })
      }, (error) => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: '¡Ups!',
          text: '¡Algo salió mal!',
          showConfirmButton: true
        })
      });
      
      setPackageUnit([]);
      action.resetForm();
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Campo obligatorio').max(30),
      email: Yup.string().email('Email invalido').required('Campo obligatorio'),
      phone: Yup.string().matches(/^\+?[1-9]\d{1,14}$/, 'Debe ser un número de teléfono válido'),
      message: Yup.string(),
      auth: Yup.bool().required().oneOf([true], 'Campo obligatorio')
    })
  })
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <main id="contact">
      <section>
        <h3 className="title">Contacto</h3>
        <form ref={form} onSubmit={handleSubmit}>
          <div className="inputs-container">
            <ThemeProvider theme={darkTheme}>
            <TextField 
              type="text"
              name="name"
              label="Nombre"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              error={errors.name && touched.name ? true : false}
              helperText={errors.name && touched.name && errors.name}
              className="input"
            />
            <TextField 
              type="text"
              name="email"
              label="Email"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={errors.email && touched.email ? true : false}
              helperText={errors.email && touched.email && errors.email}
              className="input"
            />
            <TextField 
              type="text"
              name="phone"
              label="Numero Telefono"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              error={errors.phone && touched.phone ? true : false}
              helperText={errors.phone && touched.phone && errors.phone}
              className="input"
            />
            </ThemeProvider>
            <textarea
              type="text"
              name="message"
              placeholder="Mensaje"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              className="textarea"
            ></textarea>
          </div>
          <div className="form-bottom">
            {
              Number(type) !== 0 && (
                <Accordion className="package-items">
                  <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color: '#000'}}/>}>
                    <Typography sx={{color: '#000'}}>{Number(type) > 0 ? 'Motivo' : 'Paquete'}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {
                      Number(type) > 0 ? (
                        <MenuItem sx={{color: '#000'}}>{service.name}</MenuItem>
                      ) : (
                        packageUnit.map( service => {
                          return <MenuItem key={service} sx={{color: '#000'}}>{service}</MenuItem>
                        })
                      )
                    }
                  </AccordionDetails>
                </Accordion>
              )
            }
            <div className="terms">
                <FormControlLabel control={<Checkbox 
                    name="auth" 
                    sx={{color: '#fff'}}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.auth}
                />} className="checkbox-label" label="Estoy de acuerdo en que me contacten después de enviar mis datos." />
                {
                  errors.auth && touched.auth && (
                    <span style={{display: 'block', color: '#D32F2F', fontSize: '12px', margin: '3px 30px 0'}}>{errors.auth}</span>
                  )
                }
                <FormControlLabel control={<Checkbox 
                    name="info" 
                    sx={{color: '#fff'}}
                    onChange={handleChange}
                    value={values.info}
                />} className="checkbox-label" label="Estoy de acuerdo en recibir actualizaciones y nuevo contenido para mantenerme informado." />
            </div>
          </div>
          <Button type="submit" size="lg" variant="contained" disabled={isSubmitting} 
            sx={{
              textTransform: 'unset', 
              borderRadius: '30px',
              margin: '1rem auto',
              padding: '.5rem 2rem',
              fontSize: '18px'  
            }}>
            Enviar
          </Button>
        </form>
      </section>
    </main>
  )
}

export default Contact