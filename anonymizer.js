const csv = require('csv');
const fs = require('fs');
const { parse } = require('csv-parse/sync')
const { tail } = require('lodash')
const { hashSync } = require('bcrypt')
const { stringify } = require('csv-stringify/sync');
const convertCsvToXlsx = require('@aternus/csv-to-xlsx');

//replace placeholder with a file path to your table
const tableName = placeholder

const content = fs.readFileSync(tableName, 'UTF-8')

const parsedContent = parse(content)

const data = tail(parsedContent)

const anonymizedCompanyNames = {}

const companyNames = [...new Set(data.map((record) => {
  return record[1]
}))]

companyNames.forEach((name, index) => {
  anonymizedCompanyNames[name] = `Company ${index + 1}`
})

const anonymizedData = data.map((record) => {
  record[0] = hashSync(record[0], 1).replace(/[^0-9]/g, '')
  record[1] = anonymizedCompanyNames[record[1]]
  return record
})

const anonymizedDataWithHeaders = [parsedContent[0], ...anonymizedData]

const anonymizedCSV = stringify(anonymizedDataWithHeaders)

//results.csv and results.xlsx can be renamed to suit your purposes
fs.writeFileSync('results.csv', anonymizedCSV, 'UTF-8')

convertCsvToXlsx('results.csv', 'results.xlsx');