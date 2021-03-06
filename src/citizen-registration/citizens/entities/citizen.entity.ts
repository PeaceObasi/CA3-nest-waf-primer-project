import { Linkedidentity } from "src/citizen-registration/linkedidentity/entities/linkedidentity.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

@Entity()
export class Citizen {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    firstName: string;

    @Column({ nullable: true })
    middleName: string;

    @Column()
    lastName: string;

    @Column({ nullable: false })
    dateOfBirth: Date;

    @Column({ nullable: true })
    nationality: string

    @Column()
    countryOfBirth: string

    @Column()
    stateOfBirth: string

    @Column()
    townOfBirth: string

    @Column()
    residenceAddress: string

    @Column()
    profession: string

    @Column({ default: true })
    isActive: boolean;

    
    @JoinColumn()
    @OneToOne(type => Linkedidentity, linkedidentity => linkedidentity.citizen, {cascade:true})
    linkedidentity: Linkedidentity;

    
}
