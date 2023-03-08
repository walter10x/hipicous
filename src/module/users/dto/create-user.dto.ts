import { Person } from './../../../persons/entities/person.entity';
export class CreateUserDto {
  id: string;
  user: string;
  image: string;
  rif: string;
  location: string;
  name: string;
  person?: Person;
}
