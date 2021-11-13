import { useState, react } from 'react';
import Cookies from 'js-cookie'


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
        good_with_children: '', 
        house_trained: '',
        health_issues: '',
        image: null,
    });

    const [preview, setPreview] = useState('');

    function handleInput(event) {
        const {name, value} = event.target;
        setAnimal(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    function handleImage(event) {
        const file = event.target.files[0];
        setAnimal({
            ...animal,
            image: file, 
        });

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    function handleError(error) {
        console.warn(error);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();

        formData.append('name', animal.name);
        formData.append('type', animal.type);
        formData.append('breed', animal.breed);
        formData.append('size', animal.size);
        formData.append('gender', animal.gender);
        formData.append('age', animal.age);
        formData.append('color', animal.color);
        formData.append('coat', animal.coat);
        formData.append('good_with_children', animal.good_with_children);
        formData.append('house_trained', animal.house_trained);
        formData.append('health_issues', animal.health_issues);
        formData.append('image', animal.image);

        const options = {
            method: 'POST',
            headers: {
               // 'Content-Type':'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: formData
            //body: JSON.stringify(animal)
        };

        const response = await fetch('/api_v1/animals/', options).catch(handleError);
        if(!response) {
            console.log(response);
        } else {
            console.log(response)
            const data = await response.json();
            setAnimal(data);
           // const data = await response.json();
           //setAnimal((prevState) => ({
           //     ...prevState
            
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
            <div className='form-group text-left mb-3'>
                <label htmlFor='age'>Animal Age</label>
                <input
                    type='number'
                    className='form-control'
                    id='age'
                    placeholder='Animal Age'
                    onChange={handleInput}
                    required
                    name='age'
                    value={animal.age}
                />
            </div>
            <div className='form-group text-left mb-3'>
                <label htmlFor='color'>Animal Color</label>
                <input
                    type='text'
                    className='form-control'
                    id='color'
                    placeholder='Animal Color'
                    onChange={handleInput}
                    required
                    name='color'
                    value={animal.color}
                />
            </div>
            <div className='form-group text-left mb-3'>
                <label htmlFor='coat'>Animal coat</label>
                <input
                    type='text'
                    className='form-control'
                    id='coat'
                    placeholder='Animal Coat'
                    onChange={handleInput}
                    required
                    name='coat'
                    value={animal.coat}
                />
            </div>
            <div className='form-group text-left mb-3'>
                <label htmlFor='health_issues'>Current Health Problems</label>
                <input
                    type='text'
                    className='form-control'
                    id='health_issues'
                    placeholder='Health issues'
                    onChange={handleInput}
                    required
                    name='health_issues'
                    value={animal.health_issues}
                />
            </div>
            <div className='form-group text-left mb-3'>
                <label htmlFor='good_with_children'>Is your pet good with chilrdren?</label>
                <input
                    type='text'
                    className='form-control'
                    id='good_with_children'
                    placeholder='Yes/No'
                    onChange={handleInput}
                    required
                    name='good_with_children'
                    value={animal.good_with_children}
                />
            </div>
            <div className='form-group text-left mb-3'>
                <label htmlFor='house_trained'>Is your pet house trained?</label>
                <input
                    type='text'
                    className='form-control'
                    id='house_trained'
                    placeholder='Yes/No'
                    onChange={handleInput}
                    required
                    name='house_trained'
                    value={animal.house_trained}
                />
            </div>
            <div className='form-group text-left mb-3'>
                <label htmlFor='picture'>Upload a picture of your pet</label>
                <input
                    onChange={handleImage}
                    type='file'
                    className='form-control'
                />
                {animal.image && (
                    <img src={preview} alt='' className='preview-image' />
                )}
            </div>
            <button type='submit' className='btn btn-success'>Submit</button>
        </form>
    )
}
