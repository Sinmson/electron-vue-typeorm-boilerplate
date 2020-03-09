import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Post } from "./Post";

@Entity()
export class Author {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(type => Post, post => post.author)
  posts!: Post[];
}