import { Formik, Form, Field, ErrorMessage } from "formik";

function Formulario(){
    return(
        <Formik
        
        initialValues={{message: "hola te contacto por.."}} 
        validate={values =>{
           let errors = {};
           if(!values.name){
            errors.name = "Este campo es requerido";
           }else if(!values.email){
            errors.email = "Este campo es requerido";
           }else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(values.email))
           {
            errors.email= "El correo no es válido"
           }
           return errors;
        }}
        onSubmit={
            (values, {setSubmitting}) => {
                let url = "https://formspree.io/f/myyarpgv";
                let formData= new FormData();
                formData.append("name", values.name);
                formData.append("email", values.email);
                formData.append("message", values.message);

                fetch(url,{
                    method: "POST",
                    body: formData,
                    headers:{
                        'Accept': 'application/json'
                    }
                }).then(response =>{
                    setSubmitting(false);
                    alert("Gracias por contactarme")
            })
            }
        }>
            {
                ({ isSubmiting, values}) => (
                    <Form className="form">
                        <div>
                            <label htmlFor="name">Nombre:</label>
                            <Field type="text" name="name"></Field>
                            <ErrorMessage name="name" className="error-message" component="p"/>
                        </div>
                        <div>
                            <label htmlFor="email">Correo electrónico:</label>
                            <Field type="email" name="email"></Field>
                            <ErrorMessage name="email" className="error-message" component="p"/>
                        </div>
                        <div>
                            <label htmlFor="message">Mensaje:</label>
                            <Field component="textarea" value={values.message} name="message"></Field>
                        </div>
                        <button type="submit" disabled={isSubmiting}>
                            {isSubmiting ? "Enviando.." : "Enviar mensaje"}
                        </button>
                    </Form>
                )
            }
        </Formik>
    )
}

export default Formulario;