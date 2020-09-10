const {
	generateText
} = require('./index');

test('should ouput name and age', () => {
	const text = generateText('Sang', 21);
	expect(text).toBe('Sang (21 years old)');
});
