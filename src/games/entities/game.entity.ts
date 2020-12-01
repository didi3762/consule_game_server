import { Entity, Column, PrimaryColumn, BaseEntity, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany, ManyToOne } from 'typeorm'
import { User } from '../../users/entities/user.entity';

@Entity('games')
export class Game extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column({nullable:true})
    description:string

    @Column({nullable:true})
    sum_enteries:number

    @Column({nullable:true})
    user_email:string

    @Column({nullable:true})
    user_score:number

    @Column({nullable:true})
    photo_url:string

    @Column({nullable:true})
    html_url:string


    // @ManyToOne(() => User, user => user.games) 
    // user: User;

    
}
