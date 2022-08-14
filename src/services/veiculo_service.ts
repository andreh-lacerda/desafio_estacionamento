import { Veiculo, VeiculoDocument } from './../schemas/veiculo_schema';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateVeiculoDTO } from 'src/dto/create_veiculo.dto';

@Injectable()
export class VeiculoService {
  constructor(
    @InjectModel(Veiculo.name)
    private veiculoModel: Model<VeiculoDocument>,
  ) {}

  async createVeiculo(createVeiculoDTO: CreateVeiculoDTO): Promise<Veiculo> {
    const createdVeiculo = await this.veiculoModel.create(createVeiculoDTO);
    return createdVeiculo;
  }

  async getVeiculos(): Promise<Veiculo[]> {
    return this.veiculoModel.find().exec();
  }

  async getVeiculosById(id: string): Promise<Veiculo> {
    return this.veiculoModel.findOne({ _id: id }).exec() as any;
  }

  async deleteVeiculo(id: string) {
    const deletedVeiculo = await this.veiculoModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedVeiculo;
  }
}
