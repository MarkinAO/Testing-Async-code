import GameSavingLoader from '../js/GameSavingLoader';
import read from '../js/reader';

jest.mock('../js/reader');

beforeEach(() => {
  jest.resetAllMocks();
});

test('error throw testing via the mock', (done) => {
  read.mockReturnValue(new Error('Запись не обнаружена'));
  GameSavingLoader.load().catch((error) => {
    expect(error).toBe('Запись не обнаружена');
  });
  done();
});
