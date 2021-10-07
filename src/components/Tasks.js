import React from 'react'
import styled from 'styled-components'

function Tasks({tasks, setTasks }) {

    return (
        <Container>
            {tasks.map((task) => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.body}</p>
                    <button onClick={() => setTasks(tasks.filter((el) => task.id !== el.id))}>Delete</button>
                </div>
            ))}
        </Container>
    )
}

export default Tasks

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;

    div {
        width: 180px;
        margin: 10px 10px;
        background-color: #e9c46a;
        border-radius: 10px;
        box-shadow: 3px 3px 15px rgba(0,0,0,0.5);
        text-align: center;

        button {
            width: 50%;
            height: 30px;
            border-radius: 10px;
            box-shadow: 5px 5px 15px rgba(0,0,0,0.5);
            margin-bottom: 10px;
            background-color: red;
            border: none;
            padding: 5px 20px;
            cursor: pointer;
        }

    }

`
