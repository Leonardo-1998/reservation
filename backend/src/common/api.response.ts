import { ApiResponse } from './response.interface';

export function successResponse<T>(
  data: T,
  message: string = 'Success',
  statusCode: number = 200,
): ApiResponse<T> {
  return { success: true, message, data, statusCode };
}

// export function errorResponse<T>(
//   data: T,
//   message: string = 'Error',
//   statusCode: number = 400,
// ): ApiResponse {
//   return {
//     success: false,
//     message,
//     data,
//     statusCode,
//   };
// }
