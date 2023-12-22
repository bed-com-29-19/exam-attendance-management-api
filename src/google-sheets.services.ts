import { Injectable } from '@nestjs/common';
import { GoogleSpreadsheet, GoogleSpreadsheetRow } from 'google-spreadsheet';
import * as fs from 'fs';
import { google, Auth } from 'googleapis';
import { auth } from 'googleapis/build/src/apis/accessapproval';

@Injectable()
export class GoogleSheetsService {
  private readonly doc: GoogleSpreadsheet;

  constructor() {
    const spreadsheetId = '1jtqCDIeBWXAGqODdYJaPM8qk1sWYjdK-t_i_u8FHsLE';
    this.doc = new GoogleSpreadsheet(spreadsheetId, auth);

  //   (async () => {
  //     try {
  //       const credentials = JSON.parse(fs.readFileSync('google-sheets-credentials.json', 'utf8'));
  //       await this.useServiceAccountAuth(credentials);
  //       console.log('Credentials successfully read:', credentials);
  //     } catch (error) {
  //       console.error('Error reading credentials file:', error.message);
  //       throw error;
   }
  //   })();
  // }

  // private async useServiceAccountAuth(credentials: any) {
  //   const { client_email, private_key } = credentials;

  //   const client = new google.auth.JWT({
  //     email: client_email,
  //     key: private_key,
  //     scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  //   });

  //   await this.doc.driveApi(client_email, private_key);
  // }

  // private async loadSheet() {
  //   await this.doc.loadInfo();
  //   return this.doc.sheetsByIndex[0];
  // }

  // async addRow(rows: any[]) {
  //   try {
  //     const sheet = await this.loadSheet();

  //     for (const row of rows) {
  //       await sheet.addRow(row);
  //     }
  //   } catch (error) {
  //     console.error('Error in addRow:', error.message);
  //     throw error;
  //   }
  // }

  // async updateRow(keyValue: string, oldValue: string, newValue: string) {
  //   try {
  //     const sheet = await this.loadSheet();
  //     const rows = await sheet.getRows();

  //     const matchingRow = rows.find((row: GoogleSpreadsheetRow) => row[keyValue] === oldValue);

  //     if (matchingRow) {
  //       matchingRow[keyValue] = newValue;
  //       await matchingRow.save();
  //     }
  //   } catch (error) {
  //     console.error('Error in updateRow:', error.message);
  //     throw error;
  //   }
  // }

  // async deleteRow(keyValue: string, thisValue: string) {
  //   try {
  //     const sheet = await this.loadSheet();
  //     const rows = await sheet.getRows();

  //     const matchingRow = rows.find((row: GoogleSpreadsheetRow) => row[keyValue] === thisValue);

  //     if (matchingRow) {
  //       await matchingRow.delete();
  //     }
  //   } catch (error) {
  //     console.error('Error in deleteRow:', error.message);
  //     throw error;
  //   }
  // }
}
