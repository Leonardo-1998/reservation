import { AddReservationDto } from '@/dto/add.reservation.dto';
import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReservationService {
  constructor(private prisma: PrismaService) {}

  async addReservation(userId: string, addReservationDto: AddReservationDto) {
    return this.prisma.reservation.create({
      data: {
        date: new Date(addReservationDto.date),
        location: addReservationDto.location,
        startTime: addReservationDto.startTime,
        endTime: addReservationDto.endTime,
        court: addReservationDto.court,
        price: addReservationDto.price,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }
}
