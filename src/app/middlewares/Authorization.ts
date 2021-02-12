import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

class Authorization {
  handle(request: Request, response: Response, next: NextFunction) {
    if (process.env.NODE_ENV === 'test') return next();

    const requestHeader = request.headers.authorization;

    if (!requestHeader) {
      return response.status(401).json({ message: 'Token not provided' });
    }

    try {
      const [, token] = requestHeader.split(' ');
      const secret = process.env.JWT_SECRET;
      jwt.verify(token, String(secret));
      return next();
    } catch (err) {
      console.error(err);
      return response.status(401).json({ message: 'Invalid token' });
    }
  }
}

export default new Authorization();
