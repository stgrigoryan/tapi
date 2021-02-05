const giveNickName = require('./story').giveNickName;
const nickNames = require('./story').nickNames;

describe('Giving nickname function', () => {
  it('should return correct nickname from range', () => {
    const nickname = giveNickName();
    expect(nickNames.includes(nickname)).toBeTruthy();
  });
});
