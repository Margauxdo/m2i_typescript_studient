export interface Studient{

    firstName : string;
    name : string;
    matters : Matter [];

}
export interface Matter {
    name : string;
    grade : number;
}