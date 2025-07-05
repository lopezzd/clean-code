// Essa função tem o objetivo de registrar um novo usuário no banco.

async function register(data) {
  const { email, name, avatar } = data

  if (!avatar) return { error: 'avatar is required' }

  if(!name) return { error: 'name is required' }

  const userMail = getUserByEmail(email)

  if (userMail) {
    return { error: 'email already used' }
  }

  const avatar2 = convertImageToJPG(avatar)

  const user = await createUser({ email, name, avatar: avatar2 })

  return { user }
}