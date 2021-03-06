import { Module } from '@nestjs/common';
import { CitizensModule } from './citizens/citizens.module';
import { LinkedidentityModule } from './linkedidentity/linkedidentity.module';

@Module({
  imports: [CitizensModule, LinkedidentityModule, ]
})
export class CitizenRegistrationModule {}
