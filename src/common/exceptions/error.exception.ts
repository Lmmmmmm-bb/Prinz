import { HttpException, HttpStatus } from '@nestjs/common';
import { PureResponseType } from '../models/response.model';

export class ErrorException extends HttpException {
  constructor(payload: PureResponseType, statusCode: HttpStatus) {
    super(payload, statusCode);
  }
}
