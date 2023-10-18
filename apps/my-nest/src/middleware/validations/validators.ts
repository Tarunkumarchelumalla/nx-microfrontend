
import * as Joi from "joi";
import { Cls_User } from "../../models/user.model";
import { UserDto } from "../../dtos/user.sto";
import { TaskDto } from "../../dtos/task.dto";



export const UserDetailsSchema = Joi.object<
Cls_User,
  true
>().keys({
    name:Joi.string().min(3).required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(3).required()
});

export const TaskSchema = Joi.object<
TaskDto,
  true
>().keys({
    taskName:Joi.string().min(3).required(),
    assignee:Joi.string().min(1).required(),
    status:Joi.string().min(3).required(),
    taskAssigner:Joi.string().min(1).required()
});
