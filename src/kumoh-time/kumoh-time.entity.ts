import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('KUMOHTIME')
export class KumohTime{
    @PrimaryGeneratedColumn()
    TimeTable_id!: number;

    @Column()
    년도!: number;
    학기!: number;
    교과목_종류!: string;
    교육과정명!: string;
    이수_대상_학년!: number;
    이수_구분!: string;
    교과목명!: string;
    학점!: number;
    개설교과목코드!: string;
    담당교수!: string;
    수강학과!: string;
    강의시간강의실!: string;
    제한_인원!: number;
    수강_인원!: number;
    수강_꾸러미!: string;
}