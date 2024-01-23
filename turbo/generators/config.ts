import { PlopTypes } from "@turbo/gen";
import { ReactComponentConfig } from "./react-component";
import { UiComponentConfig } from "./ui-component";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("ui-component", UiComponentConfig);

  plop.setGenerator("react-component", ReactComponentConfig);
}
