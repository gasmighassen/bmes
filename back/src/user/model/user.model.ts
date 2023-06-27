import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  phone: string;
  @Column()
  city: string;
  @Column()
  password: string;

  @Column({ default: 'user' })
  role: string;
}
