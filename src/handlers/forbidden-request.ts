import { RequestHandler } from './request-handler'

export class onForbiddenRequest extends RequestHandler {
	public handle(code: string): string {

		// Si el código es cuatrocientos tres, se hace responsable
		if (code === '403') return 'Forbidden request'

		// Si no, recurre al controlador principal (request-handler) y ejecuta su handle
		return super.handle(code)
	}
}
