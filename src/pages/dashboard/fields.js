
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
    required: true,
    placeholder: 'Confirmation Code',
    validations: {
      onChange: [
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
    required: true,
    placeholder: 'New password',
    validations: {
      onChange: [
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
  },
  {
    name: 'button',
    type: 'button'
  }
];
