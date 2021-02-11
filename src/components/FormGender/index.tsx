import { useForm } from 'react-hook-form';
import { capitalizeFirstLetter } from '../../utils/formatFunctions';

enum GenderEnum {
  other = 'other',
  female = 'female',
  male = 'male',
}

type FormGenderType = {
  firstName: string;
  lastName: string;
  age: number;
  gender: GenderEnum;
};

const FormGender = (): JSX.Element => {
  const { register, handleSubmit, errors } = useForm<FormGenderType>();
  const onSubmit = (data: FormGenderType) => console.log(data);

  const genderEnumArray = Object.values(GenderEnum);

  return (
    <div>
      <h3>Form Gender</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="firstName"
          id="firstName"
          ref={register({
            required: 'Must add first name',
            maxLength: { value: 5, message: 'Max length is 5 characters' },
          })}
        />
        {errors.firstName && <div>{errors.firstName.message}</div>}
        <input
          type="text"
          name="lastName"
          id="lastName"
          ref={register({
            required: 'Must add last name',
            maxLength: { value: 5, message: 'Max length is 5 characters' },
            pattern: /^[A-Z]/,
          })}
        />
        {errors.lastName && <div>{errors.lastName.message}</div>}
        <input
          type="number"
          name="age"
          id="age"
          ref={register({ min: { value: 18, message: '18 min' }, max: 99 })}
        />
        {errors.age && <div>{errors.age.message}</div>}
        <select name="gender" id="gender" ref={register}>
          {genderEnumArray.map((gender, index) => (
            <option key={index} value={GenderEnum.other}>
              {capitalizeFirstLetter(gender)}
            </option>
          ))}
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormGender;
