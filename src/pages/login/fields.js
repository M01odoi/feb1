export const field = [
  {
    name: 'code',
    type: 'text',
    placeholder: 'Your email',
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
    name: 'button',
    type: 'button'
  },

];
