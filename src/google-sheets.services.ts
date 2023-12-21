// src/google-sheets.service.ts
import { Injectable } from '@nestjs/common';
import { GoogleSpreadsheet, GoogleSpreadsheetRow } from 'google-spreadsheet';
import path from 'path';


@Injectable()
export class GoogleSheetsService {
  private doc: GoogleSpreadsheet;

  async authenticate() {

    const credentialsPath = path.resolve(__dirname, './src/google-sheets-credentials.json', 'google-sheets-credentials.json');
    const spreadsheetId = '1jtqCDIeBWXAGqODdYJaPM8qk1sWYjdK-t_i_u8FHsLE';
    const creds = require(credentialsPath);
    const doc = new GoogleSpreadsheet(spreadsheetId, creds);
    //await this.doc.useServiceAccountFile(creds);
    await this.doc.loadInfo();
  }

  async appendRow(data: any[]): Promise<void> {
    if (!this.doc) {
      await this.authenticate();
    }

    const sheet = this.doc.sheetsByIndex[0];
    await sheet.addRow(data);
  }

  async getSheetData(): Promise<any[]> {
    if (!this.doc) {
      await this.authenticate();
    }

    const sheet = this.doc.sheetsByIndex[0];
    await sheet.loadCells();

    const rowCount = sheet.rowCount;
    const colCount = sheet.columnCount;

    const sheetData: any[] = [];
    for (let i = 1; i <= rowCount; i++) {
      const rowData: any = {};
      for (let j = 0; j < colCount; j++) {
        const cellValue = sheet.getCell(i, j).value;
        rowData[`col${j + 1}`] = cellValue;
      }
      sheetData.push(rowData);
    }

    return sheetData;
  }
}
