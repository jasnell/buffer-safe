# A polyfill for the new Node.js v6 Buffer constructors

Usage: `require('buffer-safe')`

The module adds the new `alloc`, `allocUnsafe`, and `from` methods to the
`Buffer` object if they do not currently exist. The added functions
approximate the implementations in v6.


