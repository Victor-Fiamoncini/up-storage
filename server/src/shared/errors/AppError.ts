class AppError extends Error {
	constructor(
		public readonly message: string,
		public readonly status: number = 400
	) {
		super(message)
	}
}

export default AppError
