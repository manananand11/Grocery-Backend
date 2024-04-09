import { Request, Response, NextFunction } from 'express';
import User from '../models/User';

interface AuthenticatedRequest extends Request {
  userId?: number; // Define the userId property
  user?: User;     // User property for storing the user object
}

const adminMiddleware = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    // Check if userId is provided in the request
    const userId = req.headers['userid'];
    if (!userId!) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
    req.userId = parseInt(userId as string,10)

    // Check if user with provided userId exists in the database
    const user = await User.findByPk(req.userId);

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized. User not found' });
    }

    // Check if user is admin
    if (user.type !== 'admin') {
      return res.status(403).json({ message: 'Forbidden. User is not an admin' });
    }

    // User is admin, set user object on request and continue to the next middleware
    req.user = user;
    next();
  } catch (error) {
    console.error('Admin middleware error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default adminMiddleware;
