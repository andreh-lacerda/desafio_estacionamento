import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { VeiculoController } from './controllers/veiculo_controller';
import { EstabelecimentoController } from './controllers/estabelecimento_controller';

import { Veiculo, VeiculoSchema } from './schemas/veiculo_schema';
import {
  Estabelecimento,
  EstabelecimentoSchema,
  Endereco,
  EnderecoSchema,
} from './schemas/estabelecimento_schema';

import { VeiculoService } from './services/veiculo_service';
import { EstabelecimentoService } from './services/estabelecimento_service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(String(process.env.MONGODB_REMOTO_KEY)),
    MongooseModule.forFeature([
      { name: Estabelecimento.name, schema: EstabelecimentoSchema },
      { name: Endereco.name, schema: EnderecoSchema },
      { name: Veiculo.name, schema: VeiculoSchema },
    ]),
  ],
  controllers: [EstabelecimentoController, VeiculoController],
  providers: [EstabelecimentoService, VeiculoService],
})
export class AppModule {}
