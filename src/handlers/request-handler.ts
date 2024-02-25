import { Handler } from '../interfaces/handler'

abstract class RequestHandler implements Handler {
	constructor () {

		// Esta variable se encarga de guardar la siguiente clase que validará su responsabilidad
		this.nextHandler = null
	}

	private nextHandler: Handler | null

  // Se encarga de guardar o asignar el siguiente controlador que evaluará su responsabilidad
	public setNext (handler: Handler): Handler {
		this.nextHandler = handler
		return handler
	}

	// Cuando una clase no se hace responsable, viene a este método para ejecutar el siguiente nodo de la cadena
	public handle (code: string): string {
		
		// Evalua si hay mas nodos en la cadena
		if (this.nextHandler) return this.nextHandler.handle(code)

		// Si no, retorna vacío y posteriormente, sacará el error de que no fue procesable
		return ''
	}
}

export { RequestHandler }
