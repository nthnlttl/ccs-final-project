import React from 'react'
import Cookies from 'js-cookie';

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
    })
    return (
        <div>
            
        </div>
    )
}
