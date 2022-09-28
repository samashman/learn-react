import React, {useState} from "React";
import NewUserForm from "./NewUserForm/NewUserInput";
import Card from "./UI/Card";

function App() {

  const [userList, setUserList] = useState([])

  const addUserHandler = (newUser) => {
    setUserList(prevUserList => {
      const newUserList = [...userList];
      newUserList.unshift({...newUser, id: Math.random().toString()});
      return newUserList;
    })
  }
  return (
    <div>
      <Card>
        <NewUserForm onAddNewUser = {addUserHandler}/>
      </Card>
      <Card>

      </Card>
      
    </div>
  );
}

export default App;
