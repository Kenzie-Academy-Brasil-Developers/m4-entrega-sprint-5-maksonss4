import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { Properties } from "./properties.entity";
import { User } from "./user.entity";

@Entity("schedules_user_properties")
export class Schedules_user_properties {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  date: Date;

  @Column({ type: "time" })
  hour: Date;

  @ManyToOne((type) => User, (user) => user.schedules)
  user: User;

  @ManyToOne((type) => Properties, (prop) => prop.schedules)
  property: Properties;
}
