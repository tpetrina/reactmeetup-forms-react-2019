import { useForm, useField } from 'react-final-form-hooks';

export const MyForm = () => {
  const { form, handleSubmit, values, pristine, submitting } = useForm({
    onSubmit, // the function to call with your form values upon valid submit
    validate, // a record-level validation function to check all form values
  });

  const firstName = useField('firstName', form);
  const lastName = useField('lastName', form);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input {...firstName.input} placeholder="First Name" />
        {firstName.meta.touched && firstName.meta.error && (
          <span>{firstName.meta.error}</span>
        )}
      </div>
      <div>
        <label>Last Name</label>
        <input {...lastName.input} placeholder="Last Name" />
        {lastName.meta.touched && lastName.meta.error && (
          <span>{lastName.meta.error}</span>
        )}
      </div>
      <button type="submit" disabled={pristine || submitting}>
        Submit
      </button>
    </form>
  );
};
