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

  async getUserReservations(userId: string) {
    return this.prisma.reservation.findMany({
      where: {
        userId,
        isDeleted: false,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async getAllReservations() {
    return this.prisma.reservation.findMany({
      where: {
        isDeleted: false,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async getAllReservationsByCourtAndDate(location: string, date: string) {
    return this.prisma.reservation.findMany({
      where: {
        location: location,
        date: new Date(date),
        isDeleted: false,
      },
      orderBy: {
        date: 'asc',
      },
    });
  }

  async cancelReservation(id: string) {
    return this.prisma.reservation.update({
      where: { id },
      data: { isDeleted: true },
    });
  }
}
