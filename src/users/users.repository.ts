import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
import { Repository, EntityRepository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
@EntityRepository(User)
export class UsersRepository extends Repository<User>{
 
   public async createNewPlayer(createUserDto:CreateUserDto): Promise<User> {
        
        const new_user = new User();
        new_user.email = createUserDto.email;
        new_user.user_name = createUserDto.user_name;
        new_user.name= createUserDto.full_name;
        new_user.password= createUserDto.password;
        new_user.sum_score= 0;
        console.log(this,new_user);
        
        
        return await this.create(new_user).save();
    //    await  this.findOne({email: new_user.email})
    }

    public async getall(): Promise<User[]> {
        return await this.find()
    }

    // public async getById(productId){
    //     return await  this.findOne({id: productId})
    // }


    // public async editProduct(
    //     createProductDto: CreateProductDTO,
    //     id:number
    // ): Promise<Product> {

    //     const product = new Product();
    //     product.name = createProductDto.name;
    //     product.description = createProductDto.description;
    //     product.price = createProductDto.price;

    //     await this.update(id,product);

    //     return product;
    // }

    // public async deleteProduct(productId: number): Promise<void> {
    //     await this.delete(productId)
    // }
}