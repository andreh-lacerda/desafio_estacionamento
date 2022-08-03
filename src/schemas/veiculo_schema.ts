import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Document } from 'mongoose';
import { TVeiculo } from 'src/interface';

export type VeiculoDocument = Veiculo & Document;

@Schema()
export class Veiculo {
  @IsString()
  @ApiProperty()
  marca: string;

  @IsString()
  @ApiProperty()
  modelo: string;

  @IsString()
  @ApiProperty()
  cor: string;

  @IsString()
  @ApiProperty()
  placa: string;

  @IsString()
  @ApiProperty()
  tipo: TVeiculo;
}

export const VeiculoSchema = SchemaFactory.createForClass(Veiculo);
