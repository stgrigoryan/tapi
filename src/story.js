const nickNames = ['Morpheus', 'Neo', 'Trinity'];

const giveNickName = () => {
  return (nickname = nickNames[Math.floor(Math.random() * Math.floor(3))]);
};

exports.giveNickName = giveNickName;
exports.nickNames = nickNames;
