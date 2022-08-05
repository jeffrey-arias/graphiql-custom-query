const complexityLevelDataJSON = {
  extensions: {
    complexity: {
      complexityTree: {
        field_name: 'person',
        estimated_no_of_docs: 0,
        additional_cost: 0,
        estimated_cost: 50,
        actual_no_of_docs: 0,
        actual_cost: 46,
        children: [
          {
            field_name: 'friends',
            estimated_no_of_docs: 0,
            additional_cost: 0,
            estimated_cost: 510,
            actual_no_of_docs: 0,
            actual_cost: 98,
            children: [
              {
                field_name: 'name',
                estimated_no_of_docs: 0,
                additional_cost: 0,
                estimated_cost: 10,
                actual_no_of_docs: 0,
                actual_cost: 9,
              },
              {
                field_name: 'age',
                estimated_no_of_docs: 0,
                additional_cost: 0,
                estimated_cost: 10,
                actual_no_of_docs: 0,
                actual_cost: 9,
              },
            ],
          },
        ],
      },
    },
  },
};

export default complexityLevelDataJSON;
