// Ubicacion del texto REGISTRO
/*let infoContainer = document.getElementsByClassName('infoContainer')[0]
const registerText = document.createElement('div');
registerText.className = 'registerText';
registerText.textContent = 'REGISTER';
infoContainer.appendChild(registerText);*/

 

  
 
  export const register =  () => {
    
    const viewLogin = document.createElement("div");
    const formularioregister = `<form id = "formularioRegistro" class = "formularioRegistro">
    <div class= "email> Email </div>
    <input type = "email" id= "emailRegistro" class= "emailRegistro" placeholder="Email"/>
    <div class= "password"> Password </div>
    <input type="password" id="passwordAcceso" class="passwordAcceso" placeholder= "Enter password"/>
    button type="button" name="registrar" id="enviarRegistro" class="enviarRegistro" /button>
    <div class="register-here">
    <h4>¿No tienes cuenta?<a href='#register'>Regístrate aquí</h4>
    </div>
        
    </form>`
    viewLogin.innerHTML= formularioregister;

    return viewLogin
    }


  
