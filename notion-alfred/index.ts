import axios from 'axios'

// fetch APIを作る

// NotionのIdとTokenを指定する。

// 引数にalfredのものを受け取る。

const hoge = await axios.get(
  'https://zipcloud.ibsnet.co.jp/api/search?zipcode=1500032'
)
console.log(hoge.data.results)
