  // 隨機由陣列取出一個值
  function sample(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
  }

function generatePassword (options) {
  // 定義 user 需要的東西
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'
  const upperAlphabet = lowerAlphabet.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'
  
  // 做一個 req.body 回傳的假資料以供測試

  // const options = {
  //   length: '5',
  //   lowercase: 'on',
  //   uppercase: 'on',
  //   numbers: 'on',
  //   symbols: 'on',
  //   excludeCharacters: '4rfv'
  // }

  // 做一個集合的陣列，儲存所有 user 需要的東西
  let collection = []

  if (options.lowercase === 'on') {
    // 也可以用 ... (spread syntax)來達成同樣效果
    // collection = collection.concat(...lowerAlphabet)
    collection = collection.concat(lowerAlphabet.split(''))
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(upperAlphabet.split(''))
  }

  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }

  // 移除 user 不需要的東西

  if (options.excludeCharacters) {
    collection = collection.filter(
      character => !options.excludeCharacters.includes(character)
    )
  }

  // 如果 collection 沒有任何東西，就報錯

  if (collection.length === 0) {
    return 'There is no valid characters in your selector.'
  }

  // 產生密碼
  let password = ''
  for (let i = 1 ; i <= Number(options.length); i++ ) {
    password += sample(collection)
  }

  // 回傳密碼
  return password
}

module.exports = generatePassword
