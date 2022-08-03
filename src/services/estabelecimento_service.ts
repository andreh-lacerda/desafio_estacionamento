import {
  Estabelecimento,
  EstabelecimentoDocument,
} from './../schemas/estabelecimento_schema';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EstabelecimentoService {
  constructor(
    @InjectModel(Estabelecimento.name)
    private estabelecimentoModel: Model<EstabelecimentoDocument>,
  ) {}

  async getEstabelecimentos(): Promise<Estabelecimento[]> {
    return this.estabelecimentoModel.find().exec();
  }

  // getEstabelecimentos(): string {
  //   return 'ola';
  // }
}
