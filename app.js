let nota = -50;
let notaletra = '';
let nombre = 'Juan';

if (nota >= 90) {
    notaletra = 'A';
    console.log(`${nombre} tiene una ${notaletra}, si aprueba la clase.`);
} else if (nota >= 80) {
    notaletra = 'B';
    console.log(`${nombre} tiene una ${notaletra}, si aprueba la clase.`);
} else if (nota >= 70) {
    notaletra = 'C';
    console.log(`${nombre} tiene una ${notaletra}, si aprueba la clase.`);
} else if (nota >= 60) {
    notaletra = 'D';
    console.log(`${nombre} tiene una ${notaletra}, si aprueba la clase.`);
} else {
    notaletra = 'F';
    console.log(`${nombre} tiene una ${notaletra}, si aprueba la clase. por favor estudie más, su representante será citado.`)
};