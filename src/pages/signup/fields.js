export const field = [
  {
    name: 'name',
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
    name: 'email',
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
  {
    name: 'confpass',
    field: 'confpass',
    type: 'text',
    required: true,
    placeholder: 'Confirm Password',
    validations: {
      onChange: [
        // {
        //   name: 'match'
        // },
      ],
    },
  },

];
