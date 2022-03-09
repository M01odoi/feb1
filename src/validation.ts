function obj(valid: boolean, error: string, name: string): object {
    return (
        {
            valid,
            error,
            name
        }
    )
}

interface IProps {
    value:string,
    field:string,
    required?:number|string,
}

let validation: object = {
    required: function ({value, field}:IProps):object {
        return value ? obj(true, '', field) : obj(false, `${field} is required`, field);
    },
    minLength: function ({value, field, required}:IProps):object {
        if (value?.length < required)
            return obj(false, `Min length for ${field} field ${required} letters`, field);
        else
            return obj(true, '', field);
    },
    maxLength: function ({value, field}:IProps):object {
        if (value?.length < 30) return obj(true, '', field)
        else
            return obj(false, `Max length for ${field} field 30 letters`, field);
    },
    isEmail: function ({value, field}:IProps):object {
        const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (emailRegex.test(value)) {
            return obj(true, '', field);
        } else return obj(false, 'You have entered an invalid email address', field);
    },
    isEmailUnique: function ({value, field}):object {
        if (JSON.parse(localStorage.getItem(value))) {
            return obj(false, 'This email address is already registered', field);
        } else {
            return obj(true, '', field)
        }
    },
    emailExists: function ({value, password, field}:IProps) {
        const emailExist = JSON.parse(localStorage.getItem(value));
        if (emailExist && emailExist.password === password) {
            return obj(true, '', field);
        } else {
            return obj(false, 'Invalid email address or password', field)
        }
    },
    match: function ({value, required, field}:IProps):object {
        if (value === required)
            return obj(true, '', field);
        return obj(false, 'You have not confirmed your password', field)
    },
    password: function ({value, field}:IProps):object {
        if (/.*(?=.*\d)(?=.*[A-Z]).*/.test(value))
            return obj(true, '', field)
        else return obj(false, 'You have entered an invalid password', field)
    }

}

export default validation;