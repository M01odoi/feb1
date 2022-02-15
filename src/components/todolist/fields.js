export const field = [
  {
    name: 'task',
    field: 'task',
    type: 'text',
    placeholder: 'ex: Finish project',
    validations: {
      onChange: [
        {
          name: 'required',
        }
      ],
    },
  },

  {
    name: 'where',
    field: 'where',
    type: 'text',
    placeholder: 'ex: In home',
  },
  {
    name: 'when',
    field: 'when',
    type: 'date',
  },
];
