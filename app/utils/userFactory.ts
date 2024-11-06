type User = {
  id: number;
  name: string;
  avatar: string;
};

class UserFactory {
  static createUser(id: number, name: string, avatar: string): User {
    return { id, name, avatar };
  }
}

export default UserFactory;
