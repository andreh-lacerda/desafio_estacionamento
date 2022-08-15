import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { TipoVeiculo } from '../interface';

export class UpdateVeiculoDTO {
  @IsString()
  @ApiProperty({ example: 'Volkswagem' })
  readonly marca: string;

  @IsString()
  @ApiProperty({ example: 'Fusca' })
  readonly modelo: string;

  @IsString()
  @ApiProperty({ example: 'Verde' })
  readonly cor: string;

  @IsString()
  @ApiProperty({ example: 'CVZ-1135' })
  readonly placa: string;

  @IsString()
  @ApiProperty({ example: 'Carro' })
  readonly tipo: TipoVeiculo;
}
