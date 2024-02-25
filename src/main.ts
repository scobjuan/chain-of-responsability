import './style.css'

import { onCorrectRequest } from './handlers/correct-request'
import { onIncorrectRequest } from './handlers/incorrect-request'
import { onForbiddenRequest } from './handlers/forbidden-request'

const button = document.querySelector('.button') as HTMLButtonElement

const correctRequest = new onCorrectRequest()
const incorrectRequest = new onIncorrectRequest()
const forbiddenRequest = new onForbiddenRequest()

function findResponsible (code: string) {

	// Inicia validando si la respuesta ha sido correcta.
	// Desde este punto se inicia la cadena
	const responsible = correctRequest.handle(code)

	// Si encontro un responsable, lo muestra por consola
	if (responsible) return console.log(responsible)
	
	// Si no encuentra responsables, muestra un mensaje de error por consola en donde dice que no se puede procesar
	console.error('Inprocessible request')
}

button.addEventListener('click', async () => {
	await fetch('https://jsonplaceholder.typicode.com/users')
	
	// Cuando el API, responde, realiza la trazabilidad de la cadena
	correctRequest.setNext(forbiddenRequest).setNext(incorrectRequest)

	//CCuando se realiza la trazabilidad, iniciamos la secuencia
	findResponsible(String(403))
})
