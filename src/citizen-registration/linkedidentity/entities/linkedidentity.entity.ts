import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Citizen } from "src/citizen-registration/citizens/entities/citizen.entity";



@Entity()
export class Linkedidentity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nin: number;

    @Column()
    bvn: number;

    @Column()
    mobileNumbers: number;
  

    @OneToOne(type => Citizen, citizen => citizen.linkedidentity)
    citizen: Citizen;
}
