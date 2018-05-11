import axios from 'axios'
const host = 'http://dreamsgemdev-env.ap-northeast-1.elasticbeanstalk.com/'
// let token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjgwNmM1MThkOTAyYzdlYjc3OGVhZDk5OGI4OWUzNDc1Y2E2ZDQ1MjcxMDdmODJhMDg0MGVkNWRmMjkwYzdmNGQ4MTRjOTY4OTc4MmIxMTIyIn0.eyJhdWQiOiIyIiwianRpIjoiODA2YzUxOGQ5MDJjN2ViNzc4ZWFkOTk4Yjg5ZTM0NzVjYTZkNDUyNzEwN2Y4MmEwODQwZWQ1ZGYyOTBjN2Y0ZDgxNGM5Njg5NzgyYjExMjIiLCJpYXQiOjE1MjU5NjExNDAsIm5iZiI6MTUyNTk2MTE0MCwiZXhwIjoxNTU3NDk3MTQwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.VlWOsH72lv42GgAohNT8PogRlUT09gPeiA2OGQfzTdm44sU6nwMxEq6wdfTjRHhGiw9Y80TE7BAIyKM8Ckh8Uan6HqVya45paRfCHh4hM31miq4W-KETxHob0-69Z2BopRvgnvaVdYIxH0wguTk7z3MQXJzHb7l-0AOuCXAv7hHBcn8e0WDBI020OlGgDN7fOPdC9ne0X5z5m5Vf6E4hs65eHq9J1_mziEKCY2E86jdUntOzJSXZgrwRT_ehlsMO86uXubWshVk82RWrocFx6H97rQJzP-srZYLuT8jdngZ3dLJgp7MLQJddwQU3Hlxc-ozin6b0RZNeX1osAJSCCJTm7e0iY5vPwurOmmYtE6GwwJ0XtY7VoNfN-I2yBodACFrMl7ygMqoONVrKwK5Rtdg9nujlNiVKVgjsIytFa2yC_6vOjDJWrbN8b_begW6I8SSxzP898Q5f6_kOQZw2jzaZJBeXyf_tSr5PEiJquce0xicA-82HJ42fnjidA8SazF7E02loVRkLKnAd9Lr5MjejzAi344CW9v-S21L6xBQXyIVxL2CWER5T-3_4AQWJXZrwgHA-CWGH8YKpCdI6w_b2hicmHi8MIksd6y-Y0pGPs6S6r6o4zgrTfcElfLFZTf8ZQWF1FnCDjevYi-xtlSNEXxoWJYk7iYmf02H2tW8`

let token = ''

const header = {
  'Accept': `application/json`,
  'Authorization': `Bearer${token}`,
}

export default {
  // async Login ({ commit }, path) {
  //   const data = {
  //     'grant_type': 'password',
  //     'username': 'root',
  //     'password': 'password',
  //     'client_id': 2,
  //     'client_secret': 'TCqXPHubxIcPHCCAA1IwyZKMx3txKMWVsvC0oFmV'
  //   }
  //   const response = await axios.post(`${host}${path}`, { header, data })
  //   token = await response.data.access_token
  // },
  async API ({ commit }, path) {
    await axios.get(`${host}${path}`, { header })
  },
}
