const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank",
    },
    children: "click me to visit google",
};

const mainContainer = document.querySelector("#root");

let customReact = (reactElement, mainContainer) => {
    if (!mainContainer) {
        console.error("Main container not found");
        return;
    }

    const element = document.createElement(reactElement.type);
    element.innerHTML = reactElement.children;

    Object.keys(reactElement.props).forEach((prop) => {
        element.setAttribute(prop, reactElement.props[prop])
    });

    // for (let prop in reactElement.props) {
    //     element.setAttribute(prop, reactElement.props[prop]);
    // }
    mainContainer.appendChild(element);
};

customReact(reactElement, mainContainer);
