// Welcome to "We Have React at Home" - a simplified React-like renderer! 🏠🎭

// This function is like React, but on a budget. It renders stuff. Sometimes. 🤷‍♂️
function customRender(reactElement, container) {
    // Create a DOM element. It's like giving birth, but to HTML.
    const domElement = document.createElement(reactElement.type)

    // Set the inner HTML. Hope you sanitized that input! 🧼
    domElement.innerHTML = reactElement.children

    // Iterate through props like it's Black Friday and props are on sale
    for (prop in reactElement.props) {
        // Skip 'children' prop. We don't do child labor here. 👶❌
        if (prop === 'children') continue;

        // Set attributes. It's like accessorizing, but for elements.
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    // Append the element to the container. It's moving day! 📦
    container.appendChild(domElement)
}

// Our hand-crafted React element. Organic, free-range, and gluten-free.
const reactElement = {
    type: 'a',
    props: {
        href: 'https://azure.microsoft.com/en-us/?WT.mc_id=academic%2Cstudentamb_293386',
        target: '_blank'
    },
    children: 'Support Me'
}

// Find the root. Not the mathematical kind, the DOM kind.
const main = document.querySelector('#root')

// Render our masterpiece. 🎨 Michelangelo would be proud.
customRender(reactElement, main)
