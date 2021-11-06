import {useState} from 'react';
import {withRouter} from 'react-router-dom';
import Cookies from 'js-cookie';

function ProfileForm(props) {
    const [profile, setProfile] = useState({
        alias:'',
        avatar: null,
    });

    const
}