interface LoginBody {
  email: string
  password: string
}

/** Example credential login — point AUTH paths at your backend. */
export function login(body: LoginBody) {
  const { $api } = useNuxtApp()
  return $api('/api/auth/login', {
    method: 'POST',
    body,
  })
}
