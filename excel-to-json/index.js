console.log("hi..")

const xlsx = require("xlsx")
const fs = require('fs')

const wb= xlsx.readFile("./sheet2.xlsx")
// console.log(wb.SheetNames)
const ws = wb.Sheets["Sheet1"]
// console.log(ws)

const data = xlsx.utils.sheet_to_json(ws)
// console.log(data)
const temp_newdata = data.map(d=>{
    return {...d,['Skills update from- skills.acc']: d['Skills update from- skills.acc']?.split("|")}
})

const newdata = temp_newdata.map(d=>{
    const skill = d['Skills update from- skills.acc']?.map(s=>{
        return s.split(" - ")[1].toLowerCase()
    })

    // console.log(d)

    return({...d, ['Skills update from- skills.acc']:skill})
})
fs.writeFileSync('./datajson.json', JSON.stringify(newdata, null, 2))



const mydata = require('./datajson.json')

let keywords=['javascript',
'html',
'(html)',
'html5',
'css',
'(css)',
'css3',
'react.js',
'express.js',
'node.js',
'angular',
'angular.js',
'style',
'interface',
'ux',
'web application',
'api',
'apis',
'restful api',
'rest',
'flask',
'fast',
'django',
'vue',
'next.js',
'material',
'd3',
'jquery',
".js",
'json']
let result =[]

let temp=[]

mydata.map(d=>{
    if(d['Skills update from- skills.acc']){
    temp=[...temp,...d['Skills update from- skills.acc']]
    temp=[...new Set(temp)]
    }
})
fs.writeFileSync("./skills.txt", JSON.stringify(temp, null, 2))

mydata.map((d)=>{
    let count =0
    let match=[]
    // console.log(d['Skills update from- skills.acc'])
    d['Skills update from- skills.acc']?.map(data_to_check=>{
        // console.log(data_to_check)
        keywords.map(k=>{
            if(data_to_check.split(" ").includes(k)){
                count++;
                match=[...match, k]
            }
        })  
    })
    if(count>0)
        {result.push({...d, "match":match})}
    result=[...new Set(result)]  
})

fs.writeFileSync("./result.json", JSON.stringify(result, null, 2))

const names = require('./result.json')
const op=[]
names.map(n=>{
        op.push({Name: n.Name, "Emp ID":n['Emp ID'], "Skills update from- skills.acc":n['Skills update from- skills.acc'].join(' | ')})
})


fs.writeFileSync("./myresult.json", JSON.stringify(op, null, 2))


let content = JSON.parse(fs.readFileSync("./myresult.json", "utf-8"))
let newWB = xlsx.utils.book_new()
let newWS = xlsx.utils.json_to_sheet(content)
xlsx.utils.book_append_sheet(newWB, newWS, 'new_data')
xlsx.writeFile(newWB, 'newExcel.xlsx')