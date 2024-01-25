// import { classNames } from './classNames'

// describe('classNames', () => {
//   // Тест 1: Проверка, что функция возвращает правильную строку для одного класса без модификаторов и опциональных классов.
//   test('должна вернуть правильную строку для одного класса без модификаторов и опциональных классов', () => {
//     expect(classNames('someClass')).toBe('someClass')
//   })

//   // Тест 2: Проверка, что функция правильно добавляет модификаторы к классу.
//   test('должна добавлять модификаторы к классу', () => {
//     const result = classNames('test-class', {
//       modifier1: true,
//       modifier2: false,
//     })
//     expect(result).toBe('test-class modifier1')
//   })

//   // Тест 3: Проверка, что функция правильно добавляет опциональные классы.
//   test('должна добавлять опциональные классы', () => {
//     const result = classNames('test-class', {}, [
//       'optional-class1',
//       'optional-class2',
//     ])
//     expect(result).toBe('test-class optional-class1 optional-class2')
//   })

//   // Тест 4: Проверка, что функция правильно комбинирует классы с модификаторами и опциональными классами.
//   test('должна комбинировать классы с модификаторами и опциональными классами', () => {
//     const result = classNames(
//       'test-class',
//       { modifier1: true, modifier2: false },
//       ['optional-class']
//     )
//     expect(result).toBe('test-class modifier1 optional-class')
//   })

//   // Тест 5: Проверка, что функция игнорирует модификаторы со значением false.
//   test('должна игнорировать модификаторы со значением false', () => {
//     const result = classNames('test-class', {
//       modifier1: false,
//       modifier2: true,
//     })
//     expect(result).toBe('test-class modifier2')
//   })

//   // Тест 6: Проверка, что функция работает правильно, когда опциональные классы не переданы (undefined).
//   test('должна правильно обрабатывать опциональные классы, когда они не переданы', () => {
//     const result = classNames('test-class', { modifier1: undefined }, undefined)
//     expect(result).toBe('test-class')
//   })
// })
