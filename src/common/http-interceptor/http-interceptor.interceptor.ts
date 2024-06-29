import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class HttpInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((response) => {
        const message = response.message || response;
        const success = response.success != null ? response.success : true;
        const error = response.error || null;
        const status =
          response.status || context.switchToHttp().getResponse().statusCode;
        return {
          message: message,
          success: success,
          error: error,
          status: status,
        };
      }),
      catchError((err) => {
        const status = err.status || HttpStatus.INTERNAL_SERVER_ERROR;
        const response = err.response || {
          statusCode: status,
          message: err.message || 'Internal Server Error',
          error: err.error || err.message || 'Internal Server Error',
        };
        throw new HttpException(response, status);
      }),
    );
  }
}
