import { IsNotEmpty } from "class-validator";
import { Column } from "typeorm";

export class CreateTargetDto {
    
    @IsNotEmpty()
    targetName: string;

    @IsNotEmpty()
    targetDeadline: string; 
}
