import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('KUMOHTIME')
export class KumohTime{
    @PrimaryGeneratedColumn()
    TimeTable_id!: number;

    @Column()
    년도!: number;

    @Column()
    학기!: number;

    @Column()
    교과목_종류!: string;

    @Column()
    교육과정명!: string;

    @Column()
    이수_대상_학년!: number;

    @Column()
    이수_구분!: string;

    @Column()
    교과목명!: string;

    @Column()
    학점!: number;

    @Column()
    개설교과목코드!: string;

    @Column()
    담당교수!: string;

    @Column()
    수강학과!: string;

    @Column()
    강의시간강의실!: string;

    @Column()
    제한_인원!: number;

    @Column()
    수강_인원!: number;

    @Column()
    수강_꾸러미!: string;
}