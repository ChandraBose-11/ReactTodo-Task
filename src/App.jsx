import React, { useState } from "react";
import Input from "./Components/Input/Input";
import Card from "./Components/Card/Card";

const App = () => {
  const [list, setList] = useState([
    {
      id:1,
      Name:"Guvi Task1",
      description:"this is the description for my Guvi First task",
      status:"false"
    },
    {
      id:2,
      Name:"Guvi Task2",
      description:"this is the description for my Guvi Second task",
      status:"true"
    },
    {
      id:3,
      Name:"Guvi task",
      description:"this is the description for my Guvi Third task",
      status:"false"
    },
  ]);
 
  const [Name, setName] = useState("");
  const [des, setDes] = useState("");
  const [status, setStatus] = useState("Not Completed");
  const [edit, setedit] = useState(false);
  const [index, setIndex] = useState(null);
  console.log(list);
  return (
    <>
      <Input
        setList={setList}
        Name={Name}
        setName={setName}
        des={des}
        setDes={setDes}
        status={status}
        edit={edit}
        index={index}
        list={list}
        setedit={setedit}
      />
      <Card
        list={list}
        setList={setList}
        status={status}
        edit={edit}
        setedit={setedit}
        setIndex={setIndex}
      />
    </>
  );
};

export default App;
