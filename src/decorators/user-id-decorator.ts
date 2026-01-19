import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { authorizationLoginPayload } from "src/user/utils/base-64-converter";



export const UserId = createParamDecorator(
   ( _data:unknown,ctx: ExecutionContext) => {

    const { authorization } = ctx.switchToHttp().getRequest().headers;

    const loginPayload = authorizationLoginPayload(authorization);

    console.log('authorization',authorization);

    return loginPayload?.id;
 
  }
);