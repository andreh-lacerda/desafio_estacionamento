import { TipoVeiculo } from 'src/interface';

export class CreateVeiculoDTO {
  readonly marca: string;
  readonly modelo: string;
  readonly cor: string;
  readonly placa: string;
  readonly tipo: TipoVeiculo;
}
