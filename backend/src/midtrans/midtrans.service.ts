import { AddReservationDto } from '@/dto/add.reservation.dto';
import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import midtransClient from 'midtrans-client';

const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.MIDTRANS_CLIENT_KEY,
});

@Injectable()
export class MidtransService {
  constructor(private prisma: PrismaService) {}

  async payment(addReservationDto: AddReservationDto, userId: string) {
    const total = parseInt(addReservationDto.price.replace(/\D/g, ''), 10);
    const parameter = {
      transaction_details: {
        order_id: 'test',
        gross_amount: total,
      },
    };

    const transaction = await snap.createTransaction(parameter);
    const transactionToken = transaction.token;
    return transactionToken;
  }
}
