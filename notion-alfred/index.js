import axios from 'axios'

const test = await axios.get(
  'https://zipcloud.ibsnet.co.jp/api/search?zipcode=1500032'
)

console.log(test.data)
