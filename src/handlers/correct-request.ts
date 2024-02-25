import { RequestHandler } from './request-handler'

export class onCorrectRequest extends RequestHandler {
	public handle(code: string): string {

		// Si el código es doscientos se hace responsable
		if (code === '200') return 'Correct request'

		// Si no, recurre al controlador principal (request-handler) y ejecuta su handle
		return super.handle(code)
	}
}
