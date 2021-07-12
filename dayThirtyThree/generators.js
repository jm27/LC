function* getStop() {
    yield 'Poughkeepsie'
    yield 'Newburgh'
    yield 'Peekskill'
    yield 'Yonkers';
    yield 'Bronx';
    yield 'Grand Central'
}

const nycTrainLine = getStop();

while(!nycTrainLine.next().done){
    console.log(nycTrainLine.next().value)
}