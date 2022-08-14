import { CreateEstabelecimentoDTO } from './../dto/create_estabelecimento.dto';
import { UpdateEstabelecimentoDTO } from './../dto/update_estabeleciento.dto';
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
import { Estabelecimento } from 'src/schemas/estabelecimento_schema';
import { EstabelecimentoService } from '../services/estabelecimento_service';

@ApiTags('Estabelecimento')
@Controller('estabelecimento')
export class EstabelecimentoController {
  constructor(
    private readonly estabelecimentoService: EstabelecimentoService,
  ) {}

  @Post()
  async createEstabelecimento(
    @Body() createEstabelecimentoDTO: CreateEstabelecimentoDTO,
  ) {
    return this.estabelecimentoService.createEstabelecimento(
      createEstabelecimentoDTO,
    );
  }

  @Get()
  async getEstabelecimentos(): Promise<Estabelecimento[]> {
    return this.estabelecimentoService.getEstabelecimentos();
  }

  @Get(':id')
  async getEstabelecimentoById(
    @Param('id') id: string,
  ): Promise<Estabelecimento> {
    return this.estabelecimentoService.getEstabelecimentoById(id);
  }

  @Delete(':id')
  async deleteEstabelecimento(@Param('id') id: string) {
    return this.estabelecimentoService.deleteEstabelecimento(id);
  }

  @Put(':id')
  async updateEstabelecimento(
    @Param('id') id: string,
    @Body() updateEstabelecimentoDTO: UpdateEstabelecimentoDTO,
  ) {
    return this.estabelecimentoService.updateEstabelecimento(
      id,
      updateEstabelecimentoDTO,
    );
  }
}
