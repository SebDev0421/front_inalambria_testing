import React ,{useState,useEffect}from 'react'
import '../Styles/Login.css'

import viewPassword from '../Styles/Icons/view.png'

import API from '../Components/API'

import { useCookies } from 'react-cookie'


const Login = () =>{

	const [cookies, setCookie] = useCookies(['credentials']);

	let [email,setEmail] = useState('');
	let [password,setPassword] = useState('');

	const getCookies = ()=>{
		console.log(cookies.credentials)
		if(cookies.credentials.name !== undefined){
		  window.location.href = "/banner"
		}
	  }
	
	

	const getAuth = (email,password)=>{
		fetch(API.URI+"getUser",{
			method:'put',
			mode: 'cors',
			body:JSON.stringify({email,password}),
			headers:{
				'Content-Type':'application/json'
			}
		}).then(res => res.json())
		 .then(res =>{
			 if(res.status === 400){
				 alert(res.message)
			 }else{
				 if(res.response){
	
					 //save in cookies 
					 setCookie('credentials',JSON.stringify(res.credentials),{path:'/'});
					 window.location.href = "/banner"

				 }else{
					 alert("Contraseña Incorrecta")
				 }
			 }
			 
		 })
		 .catch(err => {
			 console.log("este error",err)
		 })
	}


	useEffect(()=>{
		getCookies();
	},[])

	return(
		<div className = "containerLogin">
			<div className = "containerInput">
			    <div className = "boxCredentials">
					<input
					 id = "emailField"
					 placeholder="Correo electronico"
					 
					 onChange = {(event)=>{
						setEmail(event.target.value)
					}}
					/>
					<div className = "passwordField" >
						<input
						placeholder="Contraseña"
						type="password"
						id = "password"
						onChange = {(event)=>{
							setPassword(event.target.value)
						}}
						/>

						<img src = {viewPassword}
						     style = {{width:20,height:20}}
							 onClick = {()=>{
								 let x = document.getElementById("password")
								 if(x.type === "password"){
									 x.type = "text"
								 }else{
									 x.type = "password"
								 }
							 }}
						/>
					</div>

					<div 
					className = "buttonLogIn"
					onClick = {()=>{
						//connect to api login
						// jws encrypt
						//send data
						getAuth(email.toLowerCase(),password)
					}}
					>
						Iniciar Sesión
					</div>


					<div
					 className = "buttonSingUp"
					 onClick={()=>{
						 window.location.href = '/register'
					 }}
					>
							Crear Cuenta
						
					</div>


			     </div>
			</div>
			<div>
				<h3>Conecta tu mascota al resto del mundo</h3>
			</div>
		</div>
	)
}

export default Login;