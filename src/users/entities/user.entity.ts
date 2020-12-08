import { Entity, Column, PrimaryColumn, BaseEntity, ManyToOne, ManyToMany, OneToMany, OneToOne, JoinColumn, JoinTable, BeforeInsert } from 'typeorm'
import { Game } from '../../games/entities/game.entity';
import { Score } from '../../score/entities/score.entity';

@Entity()
export class User extends BaseEntity {

    @PrimaryColumn({unique:true}) 
    email:string

    @Column({nullable:true, type:'varchar',length:'100'})
    user_name:string;

    @Column()
    name:string
    
    @Column()
    password:string

    @Column({nullable:true})
    photo_url:string

    @Column({nullable:true})
    sum_score:number

    @Column({nullable:true})
    role:string

    @Column({nullable:true})
    is_active:boolean = false

    @OneToMany(() => Score, score => score.user, { cascade: true })
    @JoinTable() 
    scores: Score[];

    @BeforeInsert()
    emailToLowerCase(){
        this.email = this.email.toLowerCase();
    }
}
