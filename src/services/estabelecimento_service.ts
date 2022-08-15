import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Endereco,
  Estabelecimento,
  EstabelecimentoDocument,
} from './../schemas/estabelecimento_schema';
import { UpdateEstabelecimentoDTO } from '../dto/update_estabelecimento.dto';
import { CreateEstabelecimentoDTO } from '../dto/create_estabelecimento.dto';

@Injectable()
export class EstabelecimentoService {
  constructor(
    @InjectModel(Estabelecimento.name)
    private estabelecimentoModel: Model<EstabelecimentoDocument>,
  ) {}

  async createEstabelecimento(
    createEstabelecimentoDTO: CreateEstabelecimentoDTO,
  ): Promise<Estabelecimento> {
    const createdEstabelecimento = await this.estabelecimentoModel.create(
      createEstabelecimentoDTO,
    );
    return createdEstabelecimento;
  }

  async getEstabelecimentos(): Promise<Estabelecimento[]> {
    return this.estabelecimentoModel.find().exec();
  }

  async getEstabelecimentoById(id: string): Promise<Estabelecimento> {
    return this.estabelecimentoModel.findOne({ _id: id }).exec() as any;
  }

  async deleteEstabelecimento(id: string) {
    const deletedEstabelecimento = await this.estabelecimentoModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedEstabelecimento;
  }

  async updateEstabelecimento(
    id: string,
    updateEstabelecimentoDTO: UpdateEstabelecimentoDTO,
  ): Promise<Estabelecimento> {
    const estabelecimentoDb = await this.estabelecimentoModel
      .findOne({ _id: id })
      .exec();

    if (estabelecimentoDb == null) {
      return new Estabelecimento();
    }

    if (estabelecimentoDb.endereco == null) {
      estabelecimentoDb.endereco = new Endereco();
    }

    estabelecimentoDb.endereco.rua = updateEstabelecimentoDTO.endereco.rua;
    estabelecimentoDb.endereco.numero =
      updateEstabelecimentoDTO.endereco.numero;
    estabelecimentoDb.endereco.bairro =
      updateEstabelecimentoDTO.endereco.bairro;
    estabelecimentoDb.endereco.cep = updateEstabelecimentoDTO.endereco.cep;
    estabelecimentoDb.endereco.cidade =
      updateEstabelecimentoDTO.endereco.cidade;
    estabelecimentoDb.endereco.estado =
      updateEstabelecimentoDTO.endereco.estado;

    estabelecimentoDb.telefone = updateEstabelecimentoDTO.telefone;
    estabelecimentoDb.moto_vagas = updateEstabelecimentoDTO.moto_vagas;
    estabelecimentoDb.carro_vagas = updateEstabelecimentoDTO.carro_vagas;

    const updatedEstabelecimento = this.estabelecimentoModel
      .findByIdAndUpdate(id, estabelecimentoDb)
      .exec() as Promise<Estabelecimento>;

    return updatedEstabelecimento;
  }
}
