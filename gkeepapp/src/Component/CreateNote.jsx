import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const CreateNote = (props) => {
    const [note, setNote] = useState({
        title: '',
        content: '',
    });

    const [expand, setExpand] = useState(false);

    const InputEvent = (event) => {
        const {name, value} = event.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        });
    }

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: "",
        })
    }
    const expandIt = () => {
        setExpand(true);
    }
    const shrinkIt = () => {
        setExpand(false);
    }
    return (
        <>
            <div className="main_note" onDoubleClick={shrinkIt}>
                <form>
                    <input type="text" name="title" placeholder="Title" autoComplete="off" value={note.title} onChange={InputEvent} onClick={expandIt}/>
                    {expand?
                    <textarea rows="" name="content" column="" value={note.content} onChange={InputEvent} placeholder="Write a Note..."></textarea>
                    : null}
                    {expand?
                    <Button onClick={addEvent} variant="contained" color="secondary"><AddCircleIcon className="plus_sign"/></Button>
                    : null}        
                </form>
            </div>
        </>
    )
}

export default CreateNote;