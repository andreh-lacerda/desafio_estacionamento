import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Estabelecimento } from 'src/schemas/estabelecimento_schema';
import { EstabelecimentoService } from '../services/estabelecimento_service';

@ApiTags('Estabelecimento')
@Controller('estabelecimento')
export class EstabelecimentoController {
  constructor(
    private readonly estabelecimentoService: EstabelecimentoService,
  ) {}

  @Get()
  getEstabelecimentos(): Promise<Estabelecimento[]> {
    return this.estabelecimentoService.getEstabelecimentos();
  }

  // @Get(':id')
  // getEstabelecimentoById(@Param('id') id: string): string {
  //   return this.estabelecimentoService.getEstabelecimentos();
  // }
}
