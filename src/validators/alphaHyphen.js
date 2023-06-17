export const alphaHyphen = /^[a-z0-9]+\s*-?\s*[a-z0-9]/i
export const alphaHyphenTest = (value) => alphaHyphen.test(value)
