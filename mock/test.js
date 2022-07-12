export default [
  {
    url: '/user/mock400',
    method: 'post',
    response: (config) => {
      return {
        code: 400,
        data: {},
        msg: '失败'
      }
    }
  },
  {
    url: '/user/mock401',
    method: 'post',
    response: (config) => {
      return {
        code: 401,
        data: {},
        msg: '失败'
      }
    }
  },
  {
    url: '/user/mock404',
    method: 'post',
    response: (config) => {
      return {
        code: 404,
        data: {},
        msg: '失败'
      }
    }
  },
  {
    url: '/user/mock500',
    method: 'post',
    response: (config) => {
      return {
        code: 500,
        data: {},
        msg: '失败'
      }
    }
  }
]
