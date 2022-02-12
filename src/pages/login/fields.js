export const field = [
  {
    name: 'Email',
    field: 'login',
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
        // {
        //   name: 'emailExists',
        // },
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


];
