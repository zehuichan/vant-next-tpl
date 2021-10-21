const getters = {
  theme: state => state.app.theme,

  avatar: state => state.user.avatar,
  cellphone: state => state.user.cellphone,
  username: state => state.user.username,
  github: state => state.user.github,
}

export default getters
