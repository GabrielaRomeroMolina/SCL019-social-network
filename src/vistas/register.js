import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import {app} from "../lib/firebase.js" 

export const register =  () => {                      

  const dataRegistrer = document.createElement('div');
  dataRegistrer.setAttribute("class", "mainclass");
  const data = `
    <form id="formLogin" class="FormLogin">
      <label class="name"> Nombre </label>
      <input type="text" id="registerNameLogin" class="registerNameLogin" placeholder= "Ingresa tu nombre"/>
      <label class="email"> E-mail </label>
      <input type="email" id="emailLogin" class="emailLogin" placeholder= "Ingresa tu e-mail"/>
      <label class="password"> Contraseña </label>
      <input type="password" id="passwordLogin" class="passwordLogin" placeholder= "Ingresa tu contraseña"/>
      <butoon type="button" id="submit-register" class="boton2">Registrate</button>
    </form>
    </div>
    `;
 dataRegistrer.innerHTML = data;                                           


 //--------Evento boton registrarse
 let btonRegistro = dataRegistrer.querySelector('#submit-register');       
 btonRegistro.addEventListener('click', () => {                       
   registroUsuario();                                                 
 });

 window.location.hash = 'register';                                        
 return dataRegistrer
}
  
const auth = getAuth(app);

//---------Registro de usuarios---------
function registroUsuario(){                                                 
  let email = document.getElementById("emailLogin").value;                
  let password = document.getElementById("passwordLogin").value;

createUserWithEmailAndPassword(auth, email, password)                   

  .then((userCredential) => {
    //-- registrado
    const user = userCredential.user;
    //check(alert('Felicitaciones'))
    console.log(user)
    
  })
  //--no registrado
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
  });
}
  




