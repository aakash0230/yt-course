import { Controller, Get, Req } from "@nestjs/common";
import { Request } from "express";

@Controller("/albums")
export class AlbumsController{

    @Get()
    getProfile(@Req() req : Request){
        console.log(req);
        return "Hello This is album"
    }
}