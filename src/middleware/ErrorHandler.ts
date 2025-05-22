import { Response } from "express";
import ApiAnswer from "../response/apiResponse";
import { ErrorCode } from "../response/types";


export default function ErrorHandler(err: any, req: any, res: any, next: any) {
    if(err) {
        console.log(`ERROR: ${err}`)
        return res.status(500).json(new ApiAnswer(500).SetError(ErrorCode.InternalError));
    }
    next();
}