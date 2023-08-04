import { Controller, Get, Req, Res, Header, Redirect } from "@nestjs/common";
import { Request, Response } from "express";

@Controller("/users")
export class UsersController{

    @Get("/profile")
    @Redirect("/users/account")   
    // @Header('cache-controlll','none')
    // @Header('cache-control22','none22')
    getProfile(@Req() req : Request){
        const rn = (Math.random()*10 + 1);
        console.log(rn)
        if(rn < 5){
            return {
                url : '/users/account'
            }
        }
        else{
            return{
                url : '/users/wallet'
            }
        }
        // return "Hello This is users/profiles"
        return "This is users/profile"
    }

    @Get("account")
    redirectRoute1(){
        return "This is redirect route account"
    }

    @Get("wallet")
    redirectRoute2(){
        return "This is redirect route wallet"
    }
}