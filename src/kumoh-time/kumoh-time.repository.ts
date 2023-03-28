import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { KumohTime } from "./kumoh-time.entity";

@Injectable()
export class KumohTimeRepository{
    constructor(
        @InjectRepository(KumohTime) private timeRepo: Repository<KumohTime>,
    ){}

    async showDb() {
        return this.timeRepo.find();
    }

    async save(time: KumohTime) {
        this.timeRepo.save(time);
    }
}