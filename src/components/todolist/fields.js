export const field = [
  {
    name: 'Task',
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
    name: 'Where',
    field: 'where',
    type: 'text',
    placeholder: 'ex: In home',
  },
  {
    name: 'When',
    field: 'when',
    type: 'date',
  },
];
