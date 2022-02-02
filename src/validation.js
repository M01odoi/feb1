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
  minLength: function (string, field) {
    if (string.length < 4)
      return obj(false, 'Min length for this field 4 letters', field);
    else
      return obj(true, '', field);

  },
  maxLength: function (string, field) {
    if (string.length < 30) return obj(true, '', field)
    else
      return obj(false, 'Max length for this field 30 letters', field);
  },
  isEmail: function (string, field) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(string))
      return obj(true, '', field)
    else return obj(false, 'You have entered an invalid email address', field)
  },
  match: function (firstPass, secondPass, field) {
    if (firstPass === secondPass)
      return obj(true, '', field);
    return obj(false, 'You have not confirmed your password', field)
  },
  pass: function (string, field) {
    if (/.*(?=.*\d)(?=.*[A-Z]).*/.test(string))
      return obj(true, '', field)
    else return obj(false, 'You have entered an invalid password', field)
  }

}

export default validation;