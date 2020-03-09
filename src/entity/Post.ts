import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import { Author } from "./Author";

@Entity()
export class Post {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  text!: string;

  @ManyToOne( type => Author, author => author.posts)
  author!: Author;
}