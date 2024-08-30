import { studient } from "./studient.js";
export function calculateStatistics() {
    for (const student of studient) {
        console.log("##### Début Étudiant #####");
        console.log(`Étudiant : ${student.name} ${student.firstName}`);
        let sum = 0;
        let numberNote = 0;
        let moyenne;
        console.log("Les notes des matières sont :");
        for (const matter of student.matters) {
            console.log(`${matter.name} : ${matter.grade}/20`);
            sum += matter.grade;
            numberNote++;
        }
        moyenne = sum / numberNote;
        console.log("La moyenne est de : " + moyenne.toFixed(2));
        sum = 0;
        numberNote = 0;
        console.log("##### Fin Étudiant #####\n");
    }
}
calculateStatistics();
