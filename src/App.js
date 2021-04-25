import React from "react";
import Directory from "./components/Directory/index";
import Wrapper from "./components/Wrapper";
import employee from "./example.json";


function App() {
  return (
  <Wrapper>
    <Directory
  name={employee[0].name}
  image={employee[0].picture}
  email={employee[0].email}
  location={employee[0].city}
/>
 <Directory
  name={employee[1].name}
  image={employee[1].picture}
  email={employee[1].email}
  location={employee[1].city}
/> 
<Directory
  name={employee[2].name}
  image={employee[2].picture}
  email={employee[2].email}
  location={employee[2].city}
/> 
</Wrapper>
  );
}
export default App;