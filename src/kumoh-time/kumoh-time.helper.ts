import * as XLSX from 'xlsx';

export class KumohTimeHelper{
    
    getFile() {
    const excelFile = XLSX.readFile( "./src/kumoh-time/kumoh-time.xlsx" );
    console.log(excelFile)

    const sheetName = excelFile.SheetNames[0];          // @details 첫번째 시트 정보 추출
    const firstSheet = excelFile.Sheets[sheetName];       // @details 시트의 제목 추출
    
    // @details 엑셀 파일의 첫번째 시트를 읽어온다.
    const jsonData = XLSX.utils.sheet_to_json( firstSheet, { defval : "" } );
    
    console.log( jsonData );
    return
    }
}
