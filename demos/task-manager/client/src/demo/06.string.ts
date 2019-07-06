import {
  camelCaseToHyphenated,
  camelCaseToPhrase,
  camelCaseToSpaced,
  chop,
  extractSegment,
  toLower,
} from 'technoidentity-utils'

console.log(toLower('HelloWorld', '-'))
console.log(camelCaseToPhrase('emailAlongWithPassword'))
console.log(camelCaseToHyphenated('fooBarBaz'))
console.log(camelCaseToSpaced('fooBarBaz'))
console.log(chop('/hello / world', '/'))
console.log(extractSegment('/hello / world-foo / bar', 8, '/'))
