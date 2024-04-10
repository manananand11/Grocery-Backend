import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

interface CustomErrorRequestHandler extends ErrorRequestHandler {
    statusCode?: number;
    isCustomError?: string;     
    message?:string;
    stack?:string;
  }

export default function exceptionHandler(err:CustomErrorRequestHandler, req:Request, res:Response, next:NextFunction) {
    const status = err.statusCode || 500;
    const message = err.isCustomError ? err.message : 'Something went wrong!';
  
    res.status(status).send({
      message,
      errStack: process.env.NODE_ENV == 'production' ? undefined : err.stack,
    })
  }