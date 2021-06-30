import React,{useState} from 'react'
import '../Styles/Register.css'

import viewPassword from '../Styles/Icons/view.png'

import API from '../Components/API'

const getAuth = (name,email,password,confirmPassword)=>{
	fetch(API.URI+"createUser",{
		method:'put',
		mode: 'cors',
		body:JSON.stringify({name,email,password,confirmPassword}),
		headers:{
			'Content-Type':'application/json'
		}
	}).then(res => res.json())
	 .then(res =>{
		 if(res.status === 400){
			 alert(res.message)
		 }else{
			 if(res.response){
				 console.log(res.response)
				 window.location.href = "/login"
			 }
		 }
		 
	 })
	 .catch(err => {
		 console.log("este error",err)
	 })
}

const Register = () =>{


	let [name,setName] = useState('');
	let [email,setEmail] = useState('');
	let [password,setPassword] = useState('');
	let [confirmationPassword,setConfirmationPassword] = useState('');

	return(
		<div className = "containerRegister">
			
			<div>
				<h3>Conecta tu mascota al resto del mundo</h3>
			</div>

			<div className = "containerInput">
			    <div className = "boxCredentials">
					<input
					 id = "emailField"
					 placeholder="Nombre del usuario"
					 
					 onChange = {(event)=>{
						setName(event.target.value)
					}}
					/>
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

					<div className = "passwordField" >
						<input
						placeholder="Confirmar contraseña"
						type="password"
						id = "password1"
						onChange = {(event)=>{
							setConfirmationPassword(event.target.value)
						}}
						/>

						<img src = {viewPassword}
						     style = {{width:20,height:20}}
							 onClick = {()=>{
								 let x = document.getElementById("password1")
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
						getAuth(name,email.toLowerCase(),password,confirmationPassword)
					}}
					>
						Crear usuario
					</div>
			     </div>
			</div>
		</div>
	)
}

export default Register;