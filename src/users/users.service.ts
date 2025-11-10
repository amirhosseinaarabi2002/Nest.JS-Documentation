import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: any[] = [
    {
      id: 1,
      name: 'ali',
    },
    {
      id: 2,
      name: 'reza',
    },
    {
      id: 3,
      name: 'mmd',
    },
    {
      id: 4,
      name: 'amir',
    },
  ];

  getAllUsers(): object {
    return {
      data: this.users,
      statusCode: 200,
      message: 'get all users',
    };
  }

  getById(id: number): object {
    let findUser: { id: number; name: string } | null = null;

    if (findUser) {
      for (const user of this.users) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (user.id === id) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          findUser = user;
        }
      }
    }

    return {
      data: findUser,
      statusCode: 200,
      message: 'get user',
    };
  }

  createUser(data: object): object {
    if (data) {
      this.users.push(data);
    }

    return {
      data: this.users,
      statusCode: 201,
      message: 'create user',
    };
  }

  updateUser(id: number, data: any) {
    let findUser: { id: number; name: string } | null = null;

    for (const user of this.users) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (user.id === id) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        findUser = user;
      }
    }
    if (findUser) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      findUser.name = data.name;

      return {
        data: findUser,
        statusCode: 200,
        message: 'update user',
      };
    } else {
      return {
        data: null,
        statusCode: 404,
        message: 'not found',
      };
    }
  }

  deleteById(id: number): object {
    // eslint-disable-next-line prefer-const
    let newUsers: object[] = [];

    for (const user of this.users) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (user.id !== id) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        newUsers.push(user);
      }
    }

    return {
      data: newUsers,
      statusCode: 201,
      message: 'delete user',
    };
  }
}
