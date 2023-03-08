import { Person } from 'src/persons/entities/person.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user: string;

  @Column()
  image: string;

  @Column()
  rif: string;

  @Column()
  location: string;

  @Column()
  name: string;

  @OneToMany(() => Person, (person) => person.id)
  person: Person;
}
