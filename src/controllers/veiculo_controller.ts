import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Veiculo } from '../schemas/veiculo_schema';
import { VeiculoService } from '../services/veiculo_service';
import { UpdateVeiculoDTO } from './../dto/update_veiculo.dto';
import { CreateVeiculoDTO } from './../dto/create_veiculo.dto';

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

  @Put(':id')
  async updateVeiculo(
    @Param('id') id: string,
    @Body() updateVeiculoDTO: UpdateVeiculoDTO,
  ) {
    return this.veiculoService.updateVeiculo(id, updateVeiculoDTO);
  }
}
