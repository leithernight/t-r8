import React, { FC, ChangeEvent, FormEvent, useState } from "react";
import Pizza from "../models/Pizza";
import './styles.css';

interface EditPizzaFormProps {
    data: Pizza;
    updatePizza: (newPizza: Pizza) => void;
    handleToggleEdit: () => void;
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({
    data, updatePizza, handleToggleEdit 
}) => {
    const [editPizza, setEditPizza] = useState<Pizza>(data);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value} = e.target;
        setEditPizza({
            ...editPizza, [name]: value
        });
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { title, price, img } = editPizza;
        if (title && price && img) {
            updatePizza(editPizza);
            handleToggleEdit();
        }
    }
    return (
        <form className="edit-form" onSubmit={handleSubmit}>
            <input name="title" type="text" placeholder="name" onChange={handleChange} value={editPizza.title} />
            <input name="price" type="text" placeholder="cost" onChange={handleChange} value={editPizza.price} />
            <input name="img" type="text" placeholder="img" onChange={handleChange} value={editPizza.img} />
            <button type="submit">ok</button>
        </form>
    )
}

export default EditPizzaForm;