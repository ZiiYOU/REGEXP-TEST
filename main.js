const str = `
010-1234-5678.
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과 백두산이 마르고 닳도록`

const h = `   the hello world !

`

// const regexp = new RegExp('the','gi') // g 는 여러개 i 는 대소문자 구분 없이
// const regexp = /the/gi
// console.log(str.match(regexp))

// const regexp = /fox/gi
// console.log(regexp.test(str))
// console.log(str.replace(regexp,'AAA'))

// console.log(str.match(/^t/gim))

// console.log(str.match(/^t/g)) 

// console.log(str.match(/h..p/g))

// console.log(str.match(/https?/g))

// console.log(str.match(/d{2,}/g))

// console.log(str.match(/[fox]/g))

// console.log(str.match(/[0-9]/g))

// console.log(str.match(/[0-9]{1,}/g))

// console.log(str.match(/[가-힣]{1,}/g)) // 띄어쓰기 기준

// console.log(str.match(/\w/g))

// console.log(str.match(/\b\w{1,}\b/g))
// console.log(str.match(/\bf\w{1,}\b/g)) // f로 시작

// console.log(str.match(/\d{1,}/g))

// console.log(str.match(/\s/g)) // 줄바꿈 포함\

// console.log(h.replace(/\s/g,'')) 

// console.log(str.match(/.{1,}(?=@)/g))
// console.log(str.match(/(?<=@).{1,}/g))