const convertExcel = require('excel-as-json').processFile;
const path = require("path");
const srcPath = "./src/excel-as-json/src/";
const dstPath = "./src/excel-as-json/dst/";
const srcFile = "raw.xlsx";
const dstFile = "raw.json";

const options = {
    sheet:'1',
    isColOriented: false,
    omitEmtpyFields: false,
};

const callback=()=>{};
console.log(path.resolve(srcPath+srcFile));
convertExcel(path.resolve(srcPath+srcFile), path.resolve(dstPath+dstFile), options, callback);
