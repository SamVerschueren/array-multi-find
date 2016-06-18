import test from 'ava';
import m from './';

const array = [
	'foo',
	'bar',
	'baz'
];

test('error', t => {
	t.throws(() => m('foo', 'bar'), 'Expected `array` to be an `Array`, got `string`');
	t.throws(() => m(array, 'bar'), 'Expected `elements` to be an `Array`, got `string`');
});

test('cross find', t => {
	t.deepEqual(m(array, ['hello']), []);
	t.deepEqual(m(array, ['foo']), ['foo']);
	t.deepEqual(m(array, ['hello', 'world', 'bar']), ['bar']);
	t.deepEqual(m(array, ['hello', 'foo', 'world', 'bar']), ['foo', 'bar']);
});
