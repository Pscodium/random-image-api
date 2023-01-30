import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class Colors {


    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        photo_id: string;

    @Column()
        hex: string;

    @Column()
        red: string;

    @Column()
        green: string;

    @Column()
        blue: string;

    @Column()
        keyword: string;
}
