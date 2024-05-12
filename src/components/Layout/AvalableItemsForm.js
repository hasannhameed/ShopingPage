import { useState } from 'react';
import './AvalableItemsForm.css'

const AddItemForm = ({ onAddItem }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [size, setSize] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        const newItem = {
            id: Math.random().toString(),
            name,
            description,
            price: +price,
            size,
        };
        onAddItem(newItem);
        setName('');
        setDescription('');
        setPrice('');
        setSize('');
    };

    return (
        <form onSubmit={submitHandler}>
            <table>
                <thead>
                    <tr>
                        <th>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                required
                            />
                        </th>
                        <th>
                            <label htmlFor="description">Description:</label>
                            <input
                                type="text"
                                id="description"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                                required
                            />
                        </th>
                        <th>
                            <label htmlFor="price">Price:</label>
                            <input
                                type="number"
                                id="price"
                                value={price}
                                onChange={(event) => setPrice(event.target.value)}
                                required
                            />
                        </th>
                        <th>
                            <label htmlFor="size">Size:</label>
                            <input
                                type="text"
                                id="size"
                                value={size}
                                onChange={(event) => setSize(event.target.value)}
                                required
                            />
                        </th>
                    </tr>
                </thead>
            </table>
            <button type="submit">Add Item</button>
        </form>
    );
};

export default AddItemForm;
