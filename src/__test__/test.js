import GameSavingLoader from '../js/GameSavingLoader';

test('Test try GameSavingLoader', async () => {
  const expectedResult = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };
  const save = JSON.parse(await GameSavingLoader.load());
  expect(save).toEqual(expectedResult);
});
