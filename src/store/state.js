let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
  console.log('您的浏览器不支持localStorage')
}

export default {
  city: defaultCity
}
