import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CorsMiddleware } from './middleware/cors.middleware';
import { AuthModule } from './auth/auth.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: 'schema.graphql',
    }),
  ],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
  //   consumer.apply(CorsMiddleware).forRoutes('*');
  // }
}
