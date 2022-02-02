
import DoYouHaveAcc from './components/DoYouHaveAcc'
import Login from './Login';
import Signup from './Signup';
function App() {
  return (
    <div className={'app'}>
      <DoYouHaveAcc/>
      {/*<Login login='admin@gmail.com' password='admin'/>*/}
      {/*<Signup name='Alex' email='alex@gmail.com' password='1234' confpass='1234'/>*/}
    </div>
  );
}

export default App;
