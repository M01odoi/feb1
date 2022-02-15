export const field = [
  {
    name: 'login',
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
    name: 'password',
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
