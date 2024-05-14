import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto mt-14'>
            <section className='card w-full bg-base-300 shadow-xl p-5 mb-10'>
                <h3 className='text-xl font-semibold mb-5'>Differences between Uncontrolled and Controlled Components:</h3>
                <p>
                    In React, controlled components are those whose value is controlled by React state.
                    Uncontrolled components, on the other hand, allow the DOM to maintain its own state.
                    Controlled components provide more control over form elements, while uncontrolled
                    components can be simpler to implement.
                </p>
            </section>
            <section className='card w-full bg-base-300 shadow-xl p-5 mb-10'>
                <h3 className='text-xl font-semibold mb-5'>Validating React Props using PropTypes:</h3>
                <p>
                    PropTypes is a library used for typechecking React props to catch bugs early
                    in development. You can define PropTypes for a component using the
                    PropTypes package. For example:
                    <br />
                    <code>
                        MyComponent.propTypes = {'{'} <br />
                        &nbsp;&nbsp;name: PropTypes.string, <br />
                        &nbsp;&nbsp;age: PropTypes.number.isRequired <br />
                        {'}'};
                    </code>
                </p>
            </section>
            <section className='card w-full bg-base-300 shadow-xl p-5 mb-10'>
                <h3 className='text-xl font-semibold mb-5'>Difference between Node.js and Express.js:</h3>
                <p>
                    Node.js is a runtime environment that executes JavaScript code outside of a browser,
                    allowing server-side scripting. Express.js is a web application framework for Node.js,
                    designed for building web applications and APIs. In simple terms, Node.js provides the
                    runtime, while Express.js provides a framework for building web applications on top of Node.js.
                </p>
            </section>
            <section className='card w-full bg-base-300 shadow-xl p-5 mb-10'>
                <h3 className='text-xl font-semibold mb-5'>Custom Hooks in React:</h3>
                <p>
                    A custom hook in React is a JavaScript function that starts with "use" and can call
                    other hooks. Custom hooks allow you to extract component logic into reusable functions.
                    You might create a custom hook to share stateful logic between components, encapsulate
                    complex behaviors, or abstract away common patterns.
                </p>
            </section>
        </div>
    );
};

export default Blog;