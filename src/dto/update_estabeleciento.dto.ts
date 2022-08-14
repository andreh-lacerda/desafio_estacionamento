export class UpdateEstabelecimentoDTO {
  readonly endereco: {
    rua: string;
    numero: string;
    bairro: string;
    cep: string;
    cidade: string;
    estado: string;
  };
  readonly telefone: string;
  readonly moto_vagas: number;
  readonly carro_vagas: number;
}