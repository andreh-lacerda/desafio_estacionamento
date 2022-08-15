import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type EnderecoDocument = Endereco & Document;
@Schema()
export class Endereco {
  @Prop({ required: true })
  rua: string;

  @Prop({ required: true })
  numero: string;

  @Prop({ required: true })
  bairro: string;

  @Prop({ required: true })
  cep: string;

  @Prop({ required: true })
  cidade: string;

  @Prop({ required: true })
  estado: string;
}

export const EnderecoSchema = SchemaFactory.createForClass(Endereco);

export type EstabelecimentoDocument = Estabelecimento & Document;

@Schema()
export class Estabelecimento {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  cnpj: string;

  @Prop({ required: true })
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

  @Prop({ required: true })
  telefone: string;

  @Prop({ required: true })
  moto_vagas: number;

  @Prop({ required: true })
  carro_vagas: number;
}

export const EstabelecimentoSchema =
  SchemaFactory.createForClass(Estabelecimento);
