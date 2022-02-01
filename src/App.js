import Input from './input';
import FuncInput from './FuncInput';
import Login from './Login';
function App() {
  return (
    <div className={'app'}>
      {/*<Input name="name" value='text'/>*/}
      {/*<FuncInput name="name" value="value"/>*/}

      <Login login='admin@gmail.com' password='admin'/>
    </div>
  );
}

export default App;
