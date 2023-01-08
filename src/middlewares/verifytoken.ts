import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express';
import doctenv from "dotenv";

doctenv.config();
const secret = process.env.SECRET_KEY || 'SECRET_KEY';

export const verifytoken = (req: Request, res: Response, next: NextFunction) => {

  // Check Header from Request fo 'x-access-token

  let jwtToken: any = req.headers['x-access-token']

  // Verify existence Token, and return message failed
  if (!jwtToken) {
    return res.status(403).send({
      Authentication: false,
      message: 'You dont have permisions in this page'
    })
  }

  jwt.verify(jwtToken, secret, (error: any, decoded: any)=> {
    if (error) {
      return res.status(500).send({
        Authentication: false,
        message: 'Failed token, sorry',
        error
      })
    }

    next();

  })

}
