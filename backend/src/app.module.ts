import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ReservationModule } from './reservation/reservation.module';

@Module({
  imports: [UserModule, PrismaModule, ReservationModule],
})
export class AppModule {}
