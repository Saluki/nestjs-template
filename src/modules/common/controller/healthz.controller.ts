import {
  Controller,
  Get,
  SetMetadata,
  Header,
} from '@nestjs/common';
import { HealthCheckService, TypeOrmHealthIndicator } from '@nestjs/terminus'

@Controller('health')
export class HealthzController {
    constructor(
        private health: HealthCheckService,
        private db: TypeOrmHealthIndicator,
      ) {}
      
  @Get()
  @SetMetadata('unprotected', true)
  @Header('Access-Control-Allow-Origin', '*')
  healthCheck() {
    return this.health.check([
        async () => {
            return {
              http: {
                status: 'up',
                uptime: process.uptime()
              },
            };
          },
        () => this.db.pingCheck('database'),
      ]);
  }
}
