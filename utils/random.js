const seed = function (s) {
  var mask = 0xffffffff;
  var m_w = (123456789 + s) & mask;
  var m_z = (987654321 - s) & mask;

  return function () {
    m_z = (36969 * (m_z & 65535) + (m_z >>> 16)) & mask;
    m_w = (18000 * (m_w & 65535) + (m_w >>> 16)) & mask;

    var result = ((m_z << 16) + (m_w & 65535)) >>> 0;
    result /= 4294967296;
    return result;
  };
};

const randomFour = function(n, seedNum) {
  if (n<4)
    return new Array([0,0,0,0]);
  const randomFunction = seed(seedNum);
  let array = new Array(4);
  let map = new Array(n);
  for (let i=0;i<4;i++){
    while(1){
      let num = Math.floor(randomFunction()*n);
      array[i] = num;
      if (map[num] !== 1) {
        map[num] = 1;
        break;
      }
    }
  }
  return array;
}

module.exports = {
  randomFour: randomFour,
};
