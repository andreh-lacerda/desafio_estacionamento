import { Test, TestingModule } from '@nestjs/testing';
import { EstabelecimentoController } from './estabelecimento_controller';
import { EstabelecimentoService } from '../services/estabelecimento_service';

describe('EstabelecimentoController', () => {
  let estabelecimentoController: EstabelecimentoController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EstabelecimentoController],
      providers: [EstabelecimentoService],
    }).compile();

    estabelecimentoController = app.get<EstabelecimentoController>(
      EstabelecimentoController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(estabelecimentoController.getEstabelecimentos()).toBe(
        'Hello World!',
      );
    });
  });
});
