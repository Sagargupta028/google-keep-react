import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {
    const [note, setNote] = useState({
        title:"",
        content:""
    });
    const [expand, setExpand] = useState(false)

    const  inputEvent = (event) =>{
        // const value = event.target.value;
        // const name = event.target.name;

        const {value, name} = event.target;

        setNote((prevData) =>{
            if (name === 'title') {
                return {
                  ...prevData,
                  title: value
                };
            } else if (name === 'content') {
                return {
                  ...prevData,
                  content: value
                };
            } else {
                return prevData;
            }
            //*******************************altername code************************************8
            // return {
            //     ...prevData,
            //     [name]: value
            //   };     
        })
        console.log(note);
    }
    const addEvent = () => {
        if (!note.title.trim() && !note.content.trim()) {
            alert('Please enter a title or content before adding the note.');
            return;
        }
    
        props.passNote(note);
        setNote({
            title: "",
            content: ""
        });
    }
    const expandIt = () =>{
        setExpand(true);
    }
    const backToNormal = () =>{
        setExpand(false);
    }
    const handleKeyPress = (event) =>{
        if(event.key === 'Enter')
        {
            addEvent();
        }
    }
  return (
    <>
        <div className='main_note' onDoubleClick={backToNormal}>
            <form>
                {expand?
                <input 
                    type='text'
                    name='title'
                    value={note.title}
                    onChange={inputEvent} 
                    placeholder='Title' 
                    autoComplete='off' 
                    autoCapitalize='on'

                />: null}
                <textarea 
                    rows='' 
                    column='5'
                    name='content'
                    value={note.content}
                    onChange={inputEvent}  
                    onClick={expandIt}
                    onKeyPress={handleKeyPress}
                    placeholder='Write a Note...'></textarea>
                    {expand?
                <Button className='MuiButton-root' onClick={addEvent}>
                    <AddIcon className='plus_sign'/>
                </Button>:null}
            </form>
        </div>
    </>
  )
}

export default CreateNote
