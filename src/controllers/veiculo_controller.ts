import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateVeiculoDTO } from './../dto/create_veiculo.dto';
import { Veiculo } from 'src/schemas/veiculo_schema';
import { VeiculoService } from '../services/veiculo_service';

@ApiTags('Veiculo')
@Controller('veiculo')
export class VeiculoController {
  constructor(private readonly veiculoService: VeiculoService) {}

  @Post()
  async createVeiculo(@Body() createVeiculoDTO: CreateVeiculoDTO) {
    return this.veiculoService.createVeiculo(createVeiculoDTO);
  }

  @Get()
  async getVeiculos(): Promise<Veiculo[]> {
    return this.veiculoService.getVeiculos();
  }

  @Get(':id')
  async getEstabelecimentoById(@Param('id') id: string): Promise<Veiculo> {
    return this.veiculoService.getVeiculosById(id);
  }

  @Delete(':id')
  async deleteVeiculo(@Param('id') id: string) {
    return this.veiculoService.deleteVeiculo(id);
  }
}
