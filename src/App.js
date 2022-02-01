import Input from './input';
import FuncInput from './FuncInput';

function App() {
  return (
    <div className={'app'}>
      <Input name="name" value='text'/>
      <FuncInput name="name" value="value"/>
    </div>
  );
}

export default App;
