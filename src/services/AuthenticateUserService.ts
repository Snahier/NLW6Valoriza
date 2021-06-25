import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"

interface IAuthenticationRequest {
  email: string
  password: string
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticationRequest) {
    const usersRepository = getCustomRepository(UsersRepository)

    const user = await usersRepository.findOne({ email })

    if (!user) throw new Error("Incorrect Email/Password")

    const isPasswordMatching = await compare(password, user.password)

    if (!isPasswordMatching) throw new Error("Incorrect Email/Password")

    const token = sign(
      { email: user.email },
      "85cbb6d35624bf9db788b77cfab9f73f",
      { subject: user.id, expiresIn: "1d" }
    )

    return token
  }
}

export { AuthenticateUserService }
