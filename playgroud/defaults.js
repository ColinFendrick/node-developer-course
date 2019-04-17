const desTest = ({ name = 'boi' } = {}) => console.log(name);

desTest(undefined)
// desTest(null)
desTest({})
desTest({ age: '1' })
