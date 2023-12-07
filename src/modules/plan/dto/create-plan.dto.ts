import { IsNotEmpty } from "class-validator"
import { Column } from "typeorm"

export class CreatePlanDto {
    @IsNotEmpty()
    targetId: number

    @IsNotEmpty()

    planName: string

    @IsNotEmpty()

    planDeadline: string

   
}

