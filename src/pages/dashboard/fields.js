export const field = [
  {
    name: 'select option',
    type: 'select',
    required: true,
    placeholder: 'Select',
    options: [
      { value: 'option1', label: 'Insert' },
      { value: 'option2', label: 'Update' },
      { value: 'option3', label: 'Delete' }
    ],
  },
  {
    name: 'code',
    type: 'text',
    placeholder: 'Confirmation Code',
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
    name: 'confirmPassword',
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
  {
    name: 'checkbox',
    type: 'checkbox'
  },
  {
    name: 'button',
    type: 'button'
  },

];
