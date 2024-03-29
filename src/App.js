import { useReducer, useRef } from "react";
import "./App.css";
import Employess from "./components/Employess";
import Team from "./components/Team";

const reducer = (prevState, action) => {
  switch (action.type) {
    case "add_new_employee_to_employees_array":
      return {
        employees: [...prevState.employees, action.payload],
        team: prevState.team,
      };

    case 'add_member_to_team':
      return {
        employees: prevState.employees,
        team:[...prevState.team,prevState.employees[action.payload - 1]]
        
      };
      
    case 'add_member_to_team':


       const employee = prevState.employees(action.payload - 1);

       employee.isPartOfTeam = true;

       const employeesData = prevState.employees;

       employeesData.splice(action.payload - 1, 1,employee)

      return {
        employees: prevState.employees,
        team:[...prevState.team,prevState.employees[action.payload - 1]]
        
      };
    case 'remove_from_the_team':
      return {
        employees: prevState.employees,
        team:prevState.team.filter((member) => member.id!=action.payload)
        
      };

    default:
      return prevState;
  }
};

const initialState = {
  employees: [
    {
      id: 1,
      name: "Jaymee",
      last_name: "Imm",
      email: "jimm0@craigslist.org",
      gender: "Genderqueer",
      age: 80,
      isPartOfTeam:false
    },

    {
      id: 2,
      name: "Jody",
      last_name: "Themann",
      email: "jthemann1@skyrock.com",
      gender: "Agender",
      age: 29,
      isPartOfTeam:false
    },

    {
      id: 3,
      name: "Cece",
      last_name: "Carlet",
      email: "ccarlet2@jalbum.net",
      gender: "Male",
      age: 69,
      isPartOfTeam:false
    },

    {
      id: 4,
      name: "Elton",
      last_name: "Allinson",
      email: "eallinson3@jugem.jp",
      gender: "Male",
      age: 31,
      isPartOfTeam:false
    },

    {
      id: 5,
      name: "Garvy",
      last_name: "Shaddick",
      email: "gshaddick4@rediff.com",
      gender: "Male",
      age: 32,
      isPartOfTeam:false
    },
  ],
  team: [],
};

function App() {
  const [data, dispatch] = useReducer(reducer, initialState);

  const nameInputRef = useRef(null);
  const ageInputRef = useRef(null);
  return (
    <>
      <div className="container">
        <Employess dispatch = {dispatch} data={data} />
        <Team dispatch = {dispatch}  data={data}/>
        {console.log(data)}
        <div>
          <input ref={nameInputRef} type="text" />
          <input ref={ageInputRef} type="number" />
          <button
            onClick={() => {
              const name = nameInputRef.current.value;
              const age = ageInputRef.current.value;

              const newEmp = {
                name: name,
                age: age,
                id:data.employees.length + 1,
                isPartOfTeam:false
              };
              dispatch({
                type: "add_new_employee_to_employees_array",
                payload: newEmp,
              });
            }}
          >
            Add new
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
