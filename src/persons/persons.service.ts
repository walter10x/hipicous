import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Injectable()
export class PersonsService {
  create(createPersonDto: CreatePersonDto) {
    return 'This action adds a new person';
  }

  findAll(): CreatePersonDto[] {
    return [
      {
        name: 'Walter',
        dni: '2023699998',
        phone: 3460243830,
        email: 'walterozm10@gmail.com',
      },
      {
        name: 'Diego',
        dni: '26986456515',
        phone: 3489562364,
        email: 'diegocabreraror@gmail.com'
      },
    ];
  }

findOne(id: number) {
  return `This action returns a #${id} person`;
}

update(id: number, updatePersonDto: UpdatePersonDto) {
  return `This action updates a #${id} person`;
}

remove(id: number) {
  return `This action removes a #${id} person`;
}
}
