import { IsNotEmpty } from "class-validator"

export class CreatePlanDetailDto {
    @IsNotEmpty()
    planId: number

    @IsNotEmpty()

    focusTarget: string;

    @IsNotEmpty()
    
    mustDo: string;

    @IsNotEmpty()
    
    deadline: string; ;

}
