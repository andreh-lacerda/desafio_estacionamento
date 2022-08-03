import { Module } from '@nestjs/common';
import { EstabelecimentoController } from './controllers/estabelecimento_controller';
import { EstabelecimentoService } from './services/estabelecimento_service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Estabelecimento,
  EstabelecimentoSchema,
} from './schemas/estabelecimento_schema';

const dbApiKey = process.env.MONGODB_REMOTO_KEY;

@Module({
  imports: [
    MongooseModule.forRoot(String(dbApiKey)),
    MongooseModule.forFeature([
      { name: Estabelecimento.name, schema: EstabelecimentoSchema },
    ]),
  ],
  controllers: [EstabelecimentoController],
  providers: [EstabelecimentoService],
})
export class AppModule {}
