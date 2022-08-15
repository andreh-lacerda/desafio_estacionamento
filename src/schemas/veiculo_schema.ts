import { Document } from 'mongoose';
import { TipoVeiculo } from '../interface';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type VeiculoDocument = Veiculo & Document;

@Schema()
export class Veiculo {
  @Prop({ required: true })
  marca: string;

  @Prop({ required: true })
  modelo: string;

  @Prop({ required: true })
  cor: string;

  @Prop({ required: true })
  placa: string;

  @Prop({ required: true })
  tipo: TipoVeiculo;
}

export const VeiculoSchema = SchemaFactory.createForClass(Veiculo);
