import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as XLSX from 'xlsx';
import { KumohTime } from '../database/kumoh-time.entity';
import { KumohTimeRepository } from '../database/kumoh-time.repository';
import { RequestTimeDto } from './request-kumoh-time.dto';

export class KumohTimeHelper{
    
    constructor(
        // private timeRepository: KumohTimeRepository
        @InjectRepository(KumohTime) private timeRepository: Repository<KumohTime>,
    ){ }

    async saveTime(requestDto: RequestTimeDto) {
        
        const jsonData = await this.getFile();

        for (const row of jsonData) {
            const time = new KumohTime();
            time.년도 = requestDto.year;
            time.학기 = requestDto.semester;
            time.교과목_종류 = row['교과목 종류'];
            time.교육과정명 = row['교육과정명'];
            time.이수_대상_학년 = row['이수 대상 학년'];
            time.이수_구분 = row['이수 구분'];
            time.교과목명 = row['교과목명'];
            time.학점 = row['학점'];
            time.개설교과목코드 = row['교과목코드'];
            time.담당교수 = row['담당교수'];
            time.수강학과 = row['수강학과'];
            time.강의시간강의실 = row['강의시간(강의실)'];
            time.제한_인원 = row['제한 인원'];
            time.수강_인원 = row['수강 인원'];
            time.수강_꾸러미 = row['수강 꾸러미'];
            console.log(time)
            await this.timeRepository.save(time);
        }
        return
    }

    async getFile() {
        const excelFile = XLSX.readFile( "./src/kumoh-time/kumoh-time.xlsx" );
        const sheetName = excelFile.SheetNames[0];          // @details 첫번째 시트 정보 추출
        const firstSheet = excelFile.Sheets[sheetName];       // @details 시트의 제목 추출
        
        // @details 엑셀 파일의 첫번째 시트를 읽어온다.
        return await XLSX.utils.sheet_to_json( firstSheet, { defval : "" } );
    }

}
