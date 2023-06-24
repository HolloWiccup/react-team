// noinspection ES6PreferShortImport

import { classNames } from 'shared/lib/class-names/classNames'

describe('classNames', () => {
  test('with only first', () => {
    expect(classNames('some')).toBe('some')
  })
  test('with additional', () => {
    expect(classNames('some', {}, ['first', 'second'])).toBe('some first second')
  })
  test('with mods additional', () => {
    const expected = 'some first second hovered'
    expect(classNames('some', { hovered: true }, ['first', 'second'])).toBe(expected)
  })
  test('with additional mods false', () => {
    const expected = 'some first second hovered'
    expect(classNames('some', { hovered: true, focus: false }, ['first', 'second'])).toBe(expected)
  })
})
