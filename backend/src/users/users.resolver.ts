import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User, UserInput } from './user';
import { UsersService } from './users.service';
@Resolver('Users')
export class UsersResolver {
  constructor(private user: UsersService) {}
  @Query((returns) => [User])
  async users(@Args('PhotoInput') args: UserInput): Promise<User[]> {
    return this.user.users({ where: args });
  }

  @Query((returns) => [User])
  async allUsers(): Promise<User[]> {
    return this.user.allUsers();
  }

  @Mutation((returns) => User)
  async create(@Args('UserInput') args: UserInput): Promise<User> {
    return this.user.createUser(args);
  }
}
