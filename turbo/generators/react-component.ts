export const ReactComponentConfig = {
  description: "Adds a new react component",
  prompts: [
    {
      type: "input",
      name: "componentName",
      message: "What is the name of the component?",
    },
    {
      type: "list",
      name: "componentProject",
      message: "Select the project for component:",
      choices: ["app", "marketing-site"],
    },
  ],
  actions: function (answers: any) {
    return [
      {
        type: "add",
        path: "apps/{{dashCase componentProject}}/src/components/{{dashCase componentName}}.tsx",
        templateFile: "templates/react-component.hbs",
      },
    ];
  },
};
