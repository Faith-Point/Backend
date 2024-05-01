export class AppError {
    public readonly message: string;
    public readonly statusCode: number;
    public readonly isOperational: boolean;
    constructor(message: string, statusCode = 400, isOperational = true) {
        this.message = message;
        this.statusCode = statusCode;
        this.isOperational = isOperational;
    }
  }