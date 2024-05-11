export const ERRORS = [
    {
        id: "name",
        msg: "please enter your full name",
        validate(val){
            return val.length > 6 && val.includes(" ");
        }
    }
];
