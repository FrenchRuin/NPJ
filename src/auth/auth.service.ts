import {
  ConflictException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly authRepository: Repository<User>,
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<User> {
    const { username, password } = authCredentialsDto;

    // salt
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await this.authRepository.create({
      username,
      password: hashedPassword,
    });
    try {
      await this.authRepository.save(user);
    } catch (error) {
      // unique constraint
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Username already taken');
      } else {
        throw new InternalServerErrorException();
      }
    }

    return user;
  }
}