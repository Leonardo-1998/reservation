import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { MidtransService } from './midtrans.service';
import { ApiResponse } from '@/common/response.interface';
import { successResponse } from '@/common/api.response';
import { AddReservationDto } from '@/dto/add.reservation.dto';
import { User } from '@/common/decorators/user.decorator';
import { AuthGuard } from '@/common/guards/auth.guard';

@Controller('midtrans')
export class MidtransController {
  constructor(private readonly midtransService: MidtransService) {}

  @Post('payment')
  @UseGuards(AuthGuard)
  async payment(
    @Body() addReservationDto: AddReservationDto,
    @User('id') userId: string,
  ): Promise<ApiResponse | null> {
    const payment = await this.midtransService.payment(
      addReservationDto,
      userId,
    );

    return successResponse(payment, 'Berhasil membuat payment');
  }
}
