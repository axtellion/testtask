import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ErrorForm } from './UserForm.styled';
import { postUsers } from 'services/api';

const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required(),
  photo: yup.string().nullable(),
});

const values = { name: '', email: '', phone: '', photo: '' };

export const UserForm = ({ onChande }) => {
  const handleSubmit = (values, { resetForm }) => {
    const contactValue = values;
    // console.log(values);
    postUsers(contactValue);
    onChande(contactValue.photo);
    resetForm();
  };

  return (
    <>
      <h2>Working with POST request</h2>
      <Formik
        validationSchema={schema}
        initialValues={values}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            <p>Name</p>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component={ErrorForm} />
          </label>
          <label>
            <p>Email</p>
            <Field name="email" type="email" />
            <ErrorMessage name="name" component={ErrorForm} />
          </label>
          <label>
            <p>Phone</p>
            <Field name="phone" type="text" />
            <ErrorMessage name="name" component={ErrorForm} />
          </label>
          <label>
            <p>Photo</p>
            <Field name="photo" type="file" />
            <ErrorMessage name="name" component={ErrorForm} />
          </label>
          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </>
  );
};
