import { CreateCitizenDto } from "src/citizen-registration/citizens/dto/create-citizen.dto";
export class CreateLinkedidentityDto {
    readonly nin: number;
    readonly bvn: number;
    readonly modeNumbers: number;
    readonly citizen: CreateCitizenDto;//In case you want to create a citizen along with linkedidentity
}
