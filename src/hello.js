import _ from 'lodash';
console.log('hello from hello.js');

const mahasiswa = [
    { nama: 'andre', email: 'andre@gmail.com', jurusan: 'Teknik komputer'},
    { nama: 'alfian', email: 'alfian@gmail.com', jurusan: 'Teknik mesin'},
    { nama: 'ahmad', email: 'ahmad@gmail.com', jurusan: 'Teknik informatika'},

];

const mhs = _.find(mahasiswa, {nama: 'alfian'});

console.log(mhs);