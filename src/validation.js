/*2. Файл валидации, который експортирует объект validation, включающий в себя методы типа:
"minLength", "maxLength", "isEmail", "pass" (pass должен проверить что в строке есть хотя бы одна заглавная
и хотя бы одна цифра), далее каждый метод возвращает объект с полями
{ valid: true / false, error: (string), name: (имя поля к которому привязана валидация, мы передаем его при вызове) }*/

function obj(valid, error, name) {
  return (
    {
      valid,
      error,
      name
    }
  )
}

let validation = {
  required: function ({ value, field }) {
      return value ? obj(true, '', field) : obj(false, `${field} is required`, field);
  },
  minLength: function ({ value, field, required }) {
    if (value?.length < required)
      return obj(false, `Min length for ${field} field ${required} letters`, field);
    else
      return obj(true, '', field);
  },
  maxLength: function ({ value, field }) {
    if (value?.length < 30) return obj(true, '', field)
    else
      return obj(false, `Max length for ${field} field 30 letters`, field);
  },
  isEmail: function ({ value, field }) {
    const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (emailRegex.test(value)) {
      return obj(true, '', field);
    } else return obj(false, 'You have entered an invalid email address', field);
  },
  isEmailUnique: function ({ value, field }) {
    if (JSON.parse(localStorage.getItem(value))) {
      return obj(false, 'This email address is already registered', field);
    } else {
      return obj(true, '', field)
    }
  },
  match: function ({ value, required, field }) {
    if (value === required)
      return obj(true, '', field);
    return obj(false, 'You have not confirmed your password', field)
  },
  password: function ({ value, field }) {
    if (/.*(?=.*\d)(?=.*[A-Z]).*/.test(value))
      return obj(true, '', field)
    else return obj(false, 'You have entered an invalid password', field)
  }

}

export default validation;