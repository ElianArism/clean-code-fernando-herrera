(() => {
  type HtmlType = "input" | "select" | "textarea" | "radio";

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    constructor(public value: string, public placeholder: string) {}
  }

  class InputEvents {
    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  interface HTMLInputElementProps {
    id: string;
    value: string;
    placeholder: string;
  }

  class HTMLInputElement {
    private element: HtmlElement;
    private attributes: InputAttributes;
    private events: InputEvents;

    constructor({
      id,
      placeholder,

      value,
    }: HTMLInputElementProps) {
      this.element = new HtmlElement(id, "input");
      this.attributes = new InputAttributes(value, placeholder);
      this.events = new InputEvents();
    }
  }

  const nameField = new HTMLInputElement({
    value: "Fernando",
    placeholder: "Enter first name",
    id: "txtName",
  });

  console.log({ nameField });
})();
