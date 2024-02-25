export interface Handler {
	setNext(handler: Handler): Handler
	handle(code: string): string
}
