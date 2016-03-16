var SlowBuffer = require('buffer').SlowBuffer;

Buffer.alloc = Buffer.alloc || function alloc(size, fill, encoding) {
  if (typeof size !== 'number')
    throw new TypeError('First argument must be a number');
  var buf = SlowBuffer(size);
  if (fill !== null && fill !== undefined) {
    if (fill === '') fill = 0;
    if (typeof encoding === 'string' && typeof fill === 'string') {
      buf.fill(Buffer(fill, encoding).toString('binary'));
    } else {
      buf.fill(fill);
    }
  } else {
    buf.fill(0);
  }
  return buf;
}

Buffer.allocUnsafe = Buffer.allocUnsafe || function allocUnsafe(size) {
  if (typeof size !== 'number')
    throw new TypeError('First argument must be a number');
  return Buffer(size);
}

if (Buffer.from === Uint8Array.from) {
  Object.defineProperty(Buffer, 'from', {
    configurable: true,
    enumerable: true,
    value: from
  });
}
    
function from(val, encodingOrOffset, length) {
  if (ArrayBuffer && 
      val instanceof ArrayBuffer && 
      typeof encodingOrOffset === 'number') {
    length >>= 0;
    return Buffer(val).slice(encodingOrOffset, encodingOrOffset + length);
  }
  return Buffer(val, encodingOrOffset);
}
