import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Person {
    @PrimaryGeneratedColumn('uuid')
    id:  string;
    @Column( {length: 128 , comment: 'esta es la columna para el nombre de la persona'})
  name: string;
@Column({length:9})
dni: string;
@Column()
contacto: number;
@Column({length:60})
email: string
}
