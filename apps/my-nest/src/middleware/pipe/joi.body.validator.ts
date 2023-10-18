import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from "@nestjs/common";
import { ObjectSchema } from "joi";

@Injectable()
export class JoiBodyValidator implements PipeTransform{

    constructor(private readonly schema: ObjectSchema) {}

    transform(value: any, metadata: ArgumentMetadata) {

        const { error, value: validatedValue } = this.schema.validate(value);

        if (error) {
          throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    
        return validatedValue;
    }
    
}