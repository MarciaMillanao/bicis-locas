function validateForm(){
	/* Escribe tú código aquí */
	//todos los campos son obligatorios
	//nombre y apellido deben resivir solo letras
	//nombre y apellido deben comenzar con mayusculas
	//correo debe ser direccion valida
	//password de tener al menos 6 caracteres no ser 123456 098754 ni password
	//debe seleccionar una bici valida
	var emailValido = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	var soloLetras = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
	//validar nombre
	var nombre = document.getElementById('name').value;
	if(nombre == ""){//valida que se ingrese correo
		alert("Ingrese Nombre");
		return false;
	}
	if (!soloLetras.test(nombre)){
		alert("ingrese solo letras");
		return false;
	}else if(nombre.substring(0,1) !== nombre.substring(0,1).toUpperCase()){
		alert("ingrese inicial con mayuscula");
		return false;
	}
	//validar apellido
	var apellido = document.getElementById('lastname').value;
	if(apellido == ""){//valida que se ingrese correo
		alert("Ingrese Apellido");
		return false;
	}
	if (!soloLetras.test(apellido)){
		alert("ingrese solo letras");
		return false;	
	}else if(apellido.substring(0,1) !== apellido.substring(0,1).toUpperCase()){
		alert("ingrese inicial con mayuscula");
		return false;
	}

	//validar correo
	var email = document.getElementById('input-email').value;
	if(email == ""){//valida que se ingrese correo
		alert("Ingrese Email");
		return false;
	}
	if (!emailValido.test(email)){
		alert ("correo invalido");
		return false;
	}

	//validar contraseña 
	var password = document.getElementById('input-password').value;
	if(password == ""){//valida que se ingrese correo
		alert("Ingrese Password");
		return false;
	}else if(password === "123456" || password === "098754" || password === "password"){
        alert("Tu contraseña no puede ser 123456 o 098764 o password");
        return false;
    }else if(password.length<6){
        alert("tu contraseña debe tener mas de 6 caracteres");
        return false;
    }else{
        alert("Contraseña segura");
        return true;
    }

	var bicicleta = document.getElementsByTagName('select').selectedIndex;
	if( indice == null || indice == 0 ) {
		alert("elija opcion valida")
  		return false;
	}

	

	
}
