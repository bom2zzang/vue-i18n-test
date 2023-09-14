const {GoogleSpreadsheet} = require('google-spreadsheet');
const {JWT} = require('google-auth-library')

// Google Developers Console 에서 추가한 서비스어카운트의 Credential 파일
const credentials = require('../src/assets/config/swift-reef-398705-e0f0b6e8a1c5.json');

// 번역 파일을 저장할 상위 디렉토리
const localesPath = 'locales-test';
// 저장될 하위 디렉토리 및 시트에 작성된 언어의 헤더값
const lngs = ['ko', 'en'];
// https://docs.google.com/spreadsheets/d/Spread-Sheet-Doc-ID/edit#gid=Sheet-ID
const spreadsheetDocId = '10p132F_SYazLRTno7sqSTkMmlYJZ7KhucgnLhQrDJBw';
const fileNm = 'translation';
const sheetId = '0'; // Sheet-ID

async function loadSpreadsheet() {
    // eslint-disable-next-line no-console
    console.info(
        '\u001B[32m',
        '=====================================================================================================================\n',
        `(\u001B[34mhttps://docs.google.com/spreadsheets/d/${spreadsheetDocId}/#gid=${sheetId}\u001B[0m)\n`,
        '=====================================================================================================================',
        '\u001B[0m'
    );
    const SCOPES = [
        'https://www.googleapis.com/auth/spreadsheets',
        // 'https://www.googleapis.com/auth/drive.file',
    ];

    const jwt = new JWT({
        email: credentials.client_email,
        key: credentials.private_key,
        scopes: SCOPES,
    });

    // spreadsheet key is the long id in the sheets URL
    const doc = new GoogleSpreadsheet(spreadsheetDocId, jwt);

    // load directly from json file if not in secure environment
    // await doc.useServiceAccountAuth(credentials);

    await doc.loadInfo(); // loads document properties and worksheets

    return doc;
}

module.exports = {
    localesPath,
    lngs,
    loadSpreadsheet,
    fileNm,
    sheetId,
};
