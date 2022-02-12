export const field = [
  {
    name: 'Name',
    field: 'name',
    type: 'text',
    placeholder: 'Alexander',
    validations: {
      onChange: [
        {
          name: 'required',
        },
        {
          name: 'minLength',
          minLength: 6,
        },
      ],
    },
  },
  {
    name: 'Email',
    field: 'email',
    type: 'text',
    placeholder: 'example@gmail.com',
    validations: {
      onChange: [
        {
          name: 'required',
        },
        {
          name: 'isEmail',
        },
      ],
    },
  },

  {
    name: 'newPassword',
    field: 'password',
    type: 'text',
    placeholder: 'New password',
    validations: {
      onChange: [
        {
          name: 'required',
        },
        {
          name: 'minLength',
          minLength: 8,
        },
        {
          name: 'password',
        },
      ],
    },
  },
  {
    name: 'confirmPassword',
    field: 'confpass',
    type: 'text',
    required: true,
    placeholder: 'Confirm Password',
    validations: {
      onChange: [
        {
          name: 'match'
        },
      ],
    },
  },

];
