import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsObject, IsString } from 'class-validator';
import { IEndereco } from '../interface';
import { enderecoMock } from '../mocks';

export class UpdateEstabelecimentoDTO {
  @IsObject()
  @ApiProperty({ example: enderecoMock })
  readonly endereco: IEndereco;

  @IsString()
  @ApiProperty({ example: '13-3221-1144' })
  readonly telefone: string;

  @IsNumber()
  @ApiProperty({ example: 20 })
  readonly moto_vagas: number;

  @IsNumber()
  @ApiProperty({ example: 10 })
  readonly carro_vagas: number;
}
