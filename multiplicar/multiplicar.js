const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    if (!Number(base) || !Number(limite)) {
        console.log('Alguno de los valores suministrados no es un número');
    } else {

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`.green);
        }
    }


};

let createFile = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = "";

        if (!Number(base)) {
            reject(`el valor suministrado ${base} suministrada no es un número`);
            return;
        } else {
            for (let i = 1; i <= limite; i++) {
                data += `${base} * ${i} = ${base * i}\n`;
            }
            fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(`tabla-${base}.txt`);
                }
            });
        }
    })
};

module.exports = {
    createFile,
    listarTabla
};