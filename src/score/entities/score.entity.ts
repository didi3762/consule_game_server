import { Entity, Column, PrimaryColumn, BaseEntity, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany, ManyToOne } from 'typeorm'
import { User } from '../../users/entities/user.entity';

@Entity('scores')
export class Score {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    game_name:string

    @Column({nullable:true})
    user_score:number

    @ManyToOne(() => User, user => user.scores) 
    user: User;
}
