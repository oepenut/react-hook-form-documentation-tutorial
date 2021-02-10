import { useForm } from 'react-hook-form';
import logo from '../../logo.svg';
import './App.css';

type Inputs = {
  example: string;
  exampleRequired: string;
};

const App = (): JSX.Element => {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const onSubmit = (data: any) => console.log(data);

  console.log(watch('example'));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Welcome! React Hook Form</h3>
      </header>
      <main className="Main">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="example" defaultValue="test" ref={register} />
          <input name="exampleRequired" ref={register({ required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" value="Submit" />
        </form>
      </main>
    </div>
  );
};

export default App;
