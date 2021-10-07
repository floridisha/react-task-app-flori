import React, {useState} from 'react'
import styled from 'styled-components'
import {v4 as uuidV4} from 'uuid'

function Form({ title, body, completed, tasks, setTitle, setBody, setCompleted, setTasks }) {

    const onTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const onBodyChange = (e) => {
        setBody(e.target.value)
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        setTasks([...tasks, {id: uuidV4(), title: title, body: body, completed: false}])
        setTitle('')
        setBody('')
    }

    return (
        <FormContainer onSubmit={onFormSubmit}>
            <TitleInput type="text" placeholder="Task Title..." value={title} onChange={onTitleChange} />
            <BodyInput placeholder="Task Description..." value={body} onChange={onBodyChange} />
            <SubmitInput type="submit" value="Add" />
        </FormContainer>
    )
}

export default Form

const FormContainer = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const TitleInput = styled.input`
    width: 400px;
    height: 30px;
    padding: 5px 15px;
    background-color: #264653;
    outline: none;
    border: none;
    color: #fff;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 3px 3px 15px rgba(0,0,0,0.7);

    ::placeholder {
        color: rgba(255,255,255,0.7);
    }
`

const BodyInput = styled.textarea`
    width: 400px;
    height: 200px;
    padding: 15px 15px;
    background-color: #264653;
    outline: none;
    border: none;
    color: #fff;
    margin-bottom: 20px;
    border-radius:10px;
    box-shadow: 3px 3px 15px rgba(0,0,0,0.7);
    resize: none;

    ::placeholder {
        color: rgba(255,255,255,0.7);
    }
`

const SubmitInput = styled.input`
    width: 150px;
    height: 40px;
    text-align: center;
    background-color: #264653;
    outline: none;
    border: none;
    box-shadow: 3px 3px 15px rgba(0,0,0,0.7);
    border-radius: 10px;
    cursor: pointer;
    transition: all 250ms ease;
    position: relative;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
`
