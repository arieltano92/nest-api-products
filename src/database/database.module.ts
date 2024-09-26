import { Module, Global } from '@nestjs/common';

//Do the module database global to be used for products module and users module
@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: 1234,
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
