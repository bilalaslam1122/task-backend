import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Task {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  description?: string;

  @Field()
  @Column({ default: false })
  completed: boolean;

  @Field()
  @CreateDateColumn()
  createdAt: Date;
}
