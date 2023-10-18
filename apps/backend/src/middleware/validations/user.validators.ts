
import * as Joi from "joi";
import { Cls_ProfileDetails, Cls_UserDetails } from "../../models/users.model";



export const UserDetailsSchema = Joi.object<
Cls_UserDetails,
  true
>().keys({
    name:Joi.string().min(3).required(),
    mobile:Joi.number().min(10).required(),
    address:Joi.string().min(3).required()
});

export const Profile_Schema = Joi.object<
Cls_ProfileDetails,
  true
>().keys({
    fatherName:Joi.string().min(3).required(),
    fatherMobile:Joi.string().min(3).required(),
    childId:Joi.string().min(1).required()
});