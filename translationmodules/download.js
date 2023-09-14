const fs = require('fs');
const mkdirp = require('mkdirp');
const _ = require('lodash');
const {loadSpreadsheet, localesPath, fileNm, lngs, sheetId} = require('./index');

async function makeTranslationsMapFromSheet(doc) {
    const sheet = doc.sheetsById[sheetId];
    if (!sheet) {
        return {};
    }

    const lngsMap = {};
    const rows = await sheet.getRows();
    console.log(`sheet=${sheet}`);
console.log(rows.length)
    rows.forEach((row) => {
console.log(row);
        lngs.forEach((lang) => {
            _.set(lngsMap, `${lang}.${row.key}`, row[lang])
        })
    });

    return lngsMap;
}

function makeLocaleDir(dirPath, subDirs) {
    return new Promise((resolve) => {
        subDirs.forEach((subDir, index) => {
            try {
                mkdirp.mkdirp(`${dirPath}/${subDir}`).then(result => {
                    if (result !== undefined) {
                        console.log(`made directories, starting with ${result}`);
                    }
                });
                resolve();
            } catch (err) {
                if(err) {
                    throw err;
                }
            }
        });
    });
}

async function updateJsonFromSheet() {
    await makeLocaleDir(localesPath, lngs);

    const doc = await loadSpreadsheet();
    const lngsMap = await makeTranslationsMapFromSheet(doc);

    fs.readdir(localesPath, (error, lngs) => {
        if (error) {
            console.error('디렉토리 읽기 오류:', error);

            throw error;
        }

        lngs.forEach((lng) => {
            const localeJsonFilePath = `${localesPath}/${lng}/${fileNm}.json`;

            const jsonString = JSON.stringify(lngsMap[lng], null, 2);
        console.log(lngsMap[lng])

console.log("localeJsonFilePath= "+ localeJsonFilePath);
console.log("jsonString= "+ jsonString);
            fs.writeFile(localeJsonFilePath, jsonString, 'utf8', (err) => {
                if (err) {
                    console.error('파일 쓰기 오류:', err);
                    throw err;
                }
            });
        });
    });
}

updateJsonFromSheet();
