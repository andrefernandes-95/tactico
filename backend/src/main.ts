import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TenantMiddleware } from 'src/middleware/tenant.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Apply tenant middleware globally
  // eslint-disable-next-line @typescript-eslint/unbound-method
  app.use(new TenantMiddleware().use);

  app.enableCors();

  await app.listen(process.env.PORT ?? 4000);
}

void bootstrap();
