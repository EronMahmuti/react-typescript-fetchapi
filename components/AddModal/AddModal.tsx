import { ChangeEvent, useState } from "react";
import { setSyntheticLeadingComments } from "typescript";

interface Props{
    onClose:() => void;
    onSubmit:(title:string, description:string) => void;
}

export const AddModal = (props:Props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const handleTitleChange = (e:ChangeEvent<HTMLInputElement>) => {setTitle(e.target.value)}
    const handleDescriptionChange = (e:ChangeEvent<HTMLTextAreaElement>) => {setDescription(e.target.value)}
    const handleSubmit = (e:ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        props.onSubmit(title, description)
    }
    return(
        <div className="add_modal add_modal--shown">
            <div className="add_modal__wrapper">
                <span onClick={props.onClose} className="add_modal__close" >X</span>
                <form onSubmit={handleSubmit} className="add_modal__form">
                    <h5>Add New</h5>
                    <input type="text" name="title" value={title} onChange={handleTitleChange} placeholder="Title" />
                    <textarea 
                        id="description"
                        name="description"
                        placeholder="Description"
                        value={description}
                        onChange={handleDescriptionChange}
                    >
                    </textarea>
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    )
    



}















