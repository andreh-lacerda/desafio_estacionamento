import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { Document } from 'mongoose';

@Schema()
export class Endereco {
  @IsString()
  @ApiProperty()
  rua: string;

  @IsString()
  @ApiProperty()
  numero: string;

  @IsString()
  @ApiProperty()
  bairro: string;

  @IsString()
  @ApiProperty()
  cep: string;

  @IsString()
  @ApiProperty()
  cidade: string;

  @IsString()
  @ApiProperty()
  estado: string;
}

export const EnderecoSchema = SchemaFactory.createForClass(Endereco);

export type EstabelecimentoDocument = Estabelecimento & Document;

@Schema()
export class Estabelecimento {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  cnpj: string;

  @ApiProperty()
  endereco: Endereco;

  // @IsString()
  // @ApiProperty()
  // endereco: {
  //   rua: string;
  //   numero: string;
  //   bairro: string;
  //   cep: string;
  //   cidade: string;
  //   estado: string;
  // };

  @IsString()
  @ApiProperty()
  telefone: string;

  @IsNumber()
  @ApiProperty()
  moto_vagas: number;

  @IsNumber()
  @ApiProperty()
  carro_vagas: number;
}

export const EstabelecimentoSchema =
  SchemaFactory.createForClass(Estabelecimento);
