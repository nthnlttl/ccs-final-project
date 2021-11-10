import React from 'react'


export default function Animals(props) {
    const [animal, setAnimal] = useState({
        name: '',
        type: '',
        breed: '',
        size: '',
        gender: '',
        age: '',
        color: '',
        coat: '',
        good_with_children: null=false,
        house_trained: null=false,
        picture: null=true,
    });

    function handleInput(event) {
        const {name, value} = event.target;
        setAnimal(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    function handleError(error) {
        console.warn(error);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const options = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(animal)
        };

        const response = await fetch('/api_v1/animals/', options).catch(handleError);
        if(!response) {
            console.log(response);
        } else {
            const data = await response.json();
            setAnimal((prevState) => ({
                ...prevState
            }))
        }
    }
    return (
        <form className='mt-3 col-6' onSubmit={handleSubmit}>
            <div className='form-group text-left mb-3'>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    className='form-control'
                    id='name'
                    placeholder='Pet Name.'
                    onChange={handleInput}
                    required
                    name='name'
                    value={animal.name}
                />
            </div>
            <div className='form-group text-left mb-3'>
                <label htmlFor='type'>Animal Type</label>
                <input
                    type='text'
                    className='form-control'
                    id='type'
                    placeholder='Animal Type'
                    onChange={handleInput}
                    required
                    name='type'
                    value={animal.type}
                />
            </div>
            <div className='form-group text-left mb-3'>
                <label htmlFor='breed'>Animal Breed</label>
                <input
                    type='text'
                    className='form-control'
                    id='breed'
                    placeholder='Animal Breed'
                    onChange={handleInput}
                    required
                    name='breed'
                    value={animal.breed}
                />
            </div>
            <div className='form-group text-left mb-3'>
                <label htmlFor='size'>Animal Size</label>
                <input
                    type='text'
                    className='form-control'
                    id='size'
                    placeholder='Animal Size'
                    onChange={handleInput}
                    required
                    name='size'
                    value={animal.size}
                />
            </div>
            <div className='form-group text-left mb-3'>
                <label htmlFor='gender'>Animal Gender</label>
                <input
                    type='text'
                    className='form-control'
                    id='gender'
                    placeholder='Animal Gender'
                    onChange={handleInput}
                    required
                    name='gender'
                    value={animal.gender}
                />
            </div>
            
            
        </form>
    )
}
