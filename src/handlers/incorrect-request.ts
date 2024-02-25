import { RequestHandler } from './request-handler'

export class onIncorrectRequest extends RequestHandler {

	public handle(code: string): string {

		// Si el código es cuatrocientos cuatro, se hace responsable
		if (code === '404') return 'Incorrect request'

		// Si no, recurre al controlador principal (request-handler) y ejecuta su handle
		return super.handle(code)
	}
}
