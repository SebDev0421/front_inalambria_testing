import React, { useEffect ,useState} from 'react';

import '../Styles/Banner.css'
import profilePhoto from '../Styles/Images/kitty-with-monochrome-wall-behind-her.jpg'

import { useCookies } from 'react-cookie';


const Banner = () =>{

    const [cookies, setCookie] = useCookies(['credentials']);
    const [name, setName ] = useState('')

    useEffect(()=>{
        setName(cookies.credentials.name)
    },[])


    
    return(
        <div className = "containerBanner">
            <div>
                <img src = {profilePhoto}
                    style = {{width:200,height:200,borderRadius:200/2}}
                />
                <h3>Bienvenido a petsNet {name}</h3>
                <div className = "getOutSessionButton"
                    onClick={()=>{
                        //forget cookies and redirect to login
                        setCookie('credentials',undefined,{path:'/'});
                        window.location.href="/"
                    }}
                >
                    Cerrar sesion
                </div>
            </div>
        </div>
    )
}

export default Banner;