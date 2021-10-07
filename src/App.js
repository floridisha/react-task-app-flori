import { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Form from "./components/Form";
import Tasks from "./components/Tasks";

function App() {

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [completed, setCompleted] = useState(false)
  const [tasks, setTasks] = useState([])


  return (
    <Container>
      <ContentWrapper>
        <Header />
        <Form 
        title={title} 
        body={body} 
        completed={completed} 
        tasks={tasks} 
        setTitle={setTitle} 
        setBody={setBody} 
        setCompleted={setCompleted} 
        setTasks={setTasks}  />
        <Tasks tasks={tasks} setTasks={setTasks} />
      </ContentWrapper>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: #264653;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
`

const ContentWrapper = styled.div`
  width: 600px;
  min-height: 700px;
  background-color: #e76f51;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`