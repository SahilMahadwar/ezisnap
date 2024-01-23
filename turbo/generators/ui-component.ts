export const UiComponentConfig = {
  description: "Adds a new react component to ui library",
  prompts: [
    {
      type: "input",
      name: "componentName",
      message: "What is the name of the component?",
    },
    {
      type: "list",
      name: "componentType",
      message: "Select the type of the component:",
      choices: ["shared", "marketing-site", "app"],
    },
  ],
  actions: function (answers: any) {
    const { componentType, componentProject } = answers;

    let RegExportPattern;

    switch (componentType) {
      case "shared":
        RegExportPattern = /(\/\/ shared component exports)/g;
        break;
      case "marketing":
        RegExportPattern = /(\/\/ marketing component exports)/g;
        break;
      case "app":
        RegExportPattern = /(\/\/ app component exports)/g;
        break;
      default:
        break;
    }

    return [
      {
        type: "add",
        path: "packages/ui/src/{{dashCase componentType}}/{{dashCase componentName}}.tsx",
        templateFile: "templates/react-component.hbs",
      },

      {
        type: "append",
        path: "packages/ui/src/index.tsx",
        pattern: RegExportPattern,
        template:
          'export * from "./{{dashCase componentType}}/{{dashCase componentName}}";',
      },
    ];
  },
};
