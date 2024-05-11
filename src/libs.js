import validator from 'validator';

export const ERRORS = [
    {
        id: "name",
        msg: "Please enter your full name (at least two words)",
        validate(val) {
            return val.split(" ").length > 1 && validator.isLength(val, { min: 6 });
        }
    },
    {
        id: "email",
        msg: "Please enter a valid email address",
        validate(val) {
            return validator.isEmail(val);
        }
    },
    {
        id: "phone",
        msg: "Please enter a valid phone number",
        validate(val) {
            return validator.isMobilePhone(val, 'any', { strictMode: false });
        }
    },
    {
        id: "message",
        msg: "Message must be between 10 and 100 characters",
        validate(val) {
            return validator.isLength(val, { min: 10, max: 100 });
        }
    }
];