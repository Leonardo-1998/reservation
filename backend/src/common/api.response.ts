import { ApiResponse } from './response.interface';

export function successResponse<T>(
  data: T,
  message: string = 'Success',
  statusCode: number = 200,
): ApiResponse<T> {
  return { success: true, message, data, statusCode };
}
