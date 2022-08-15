export type TipoVeiculo = 'Carro' | 'Moto';

export interface IEndereco {
  rua: string;
  numero: string;
  bairro: string;
  cep: string;
  cidade: string;
  estado: string;
}
