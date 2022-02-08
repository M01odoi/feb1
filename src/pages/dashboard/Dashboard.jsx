import './dashboard.css';

const Dashboard = (props) => {
  const renderUsers = () => {
    const arrOfAccs = [];
    let currentUser;
    for (let i = 0; i < localStorage.length; i++) {
      if (JSON.parse(localStorage.getItem(localStorage.key(i))).login === props.currentUser){
        currentUser = JSON.parse(localStorage.getItem(localStorage.key(i)));
      }else
        arrOfAccs.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    return {currentUser,arrOfAccs};
  }
  return (
    <>
      <h1>DAsh</h1>
      <table>
        <thead>
        <tr>
          <th>Number</th>
          <th>Name</th>
          <th>Login</th>
          <th>Password</th>
        </tr>
        </thead>
        <tbody>
        <tr className='currentUser'>
          <td>1</td>
          <td>{renderUsers().currentUser.name}</td>
          <td>{renderUsers().currentUser.login}</td>
          <td>{renderUsers().currentUser.password}</td>
        </tr>
        {renderUsers().arrOfAccs.map((obj, i) =>
          <tr key={i}>
            <td>{i + 2}</td>
            <td >{obj.name}</td>
            <td >{obj.login}</td>
            <td>{obj.password}</td>
          </tr>
        )}</tbody>
      </table>
    </>
  )
}

export default Dashboard;