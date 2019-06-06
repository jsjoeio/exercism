import { annotate } from './minesweeper'

describe('', () => {
  test('handles no rows', () => {
    expect(annotate([])).toEqual([])
  })

  test('handles no columns', () => {
    expect(annotate([''])).toEqual([''])
  })

  test('handles no mines', () => {
    const input = [
      '   ',
      '   ',
      '   '
    ]
    const expected = [
      '   ',
      '   ',
      '   '
    ]
    expect(annotate(input)).toEqual(expected)
  })

  test('handles board with only mines', () => {
    const input = [
      '***',
      '***',
      '***'
    ]
    const expected = [
      '***',
      '***',
      '***'
    ]
    expect(annotate(input)).toEqual(expected)
  })

  test('handles mine surrounded by spaces', () => {
    const input = [
      '   ',
      ' * ',
      '   '
    ]
    const expected = [
      '111',
      '1*1',
      '111'
    ]
    expect(annotate(input)).toEqual(expected)
  })

  test('handles space surrounded by mines', () => {
    const input = [
      '***',
      '* *',
      '***'
    ]
    const expected = [
      '***',
      '*8*',
      '***'
    ]
    expect(annotate(input)).toEqual(expected)
  })

  test('handles horizontal line', () => {
    const input = [' * * ']
    const expected = ['1*2*1']
    expect(annotate(input)).toEqual(expected)
  })

  test('handles horizontal line, mines at edges', () => {
    const input = ['*   *']
    const expected = ['*1 1*']
    expect(annotate(input)).toEqual(expected)
  })

  test('handles vertical line', () => {
    const input = [
      ' ',
      '*',
      ' ',
      '*',
      ' '
    ]
    const expected = [
      '1',
      '*',
      '2',
      '*',
      '1'
    ]
    expect(annotate(input)).toEqual(expected)
  })

  test('handles vertical line, mines at edges', () => {
    const input = [
      '*',
      ' ',
      ' ',
      ' ',
      '*'
    ]
    const expected = [
      '*',
      '1',
      ' ',
      '1',
      '*'
    ]
    expect(annotate(input)).toEqual(expected)
  })

  test('handles cross', () => {
    const input = [
      '  *  ',
      '  *  ',
      '*****',
      '  *  ',
      '  *  '
    ]
    const expected = [
      ' 2*2 ',
      '25*52',
      '*****',
      '25*52',
      ' 2*2 '
    ]
    expect(annotate(input)).toEqual(expected)
  })

  test('handles large board', () => {
    const input = [
      ' *  * ',
      '  *   ',
      '    * ',
      '   * *',
      ' *  * ',
      '      '
    ]
    const expected = [
      '1*22*1',
      '12*322',
      ' 123*2',
      '112*4*',
      '1*22*2',
      '111111'
    ]
    expect(annotate(input)).toEqual(expected)
  })
})

describe('Joes test suite', () => {
  test('handles one row with empty space at start', () => {
    const input = [
      ' *'
    ]
    const expected = [
      '1*'
    ]
    expect(annotate(input)).toEqual(expected)
  })
  test('handles one row with empty space at end', () => {
    const input = [
      '* '
    ]
    const expected = [
      '*1'
    ]
    expect(annotate(input)).toEqual(expected)
  })
  test('handles one row with empty space and two mines', () => {
    const input = [
      '* *'
    ]
    const expected = [
      '*2*'
    ]
    expect(annotate(input)).toEqual(expected)
  })
  test('handles two rows two mines', () => {
    const input = [
      '**'
    ]
    const expected = [
      '**'
    ]
    expect(annotate(input)).toEqual(expected)
  })
  test('handles two rows 0 mines', () => {
    const input = [
      ' ',
      ' '
    ]
    const expected = [
      ' ',
      ' '
    ]
    expect(annotate(input)).toEqual(expected)
  })
  test('handles two rows one mine', () => {
    const input = [
      ' ',
      '*'
    ]
    const expected = [
      '1',
      '*'
    ]
    expect(annotate(input)).toEqual(expected)
  })
  test('handles two rows and counts row below', () => {
    const input = [
      ' *',
      '**'
    ]
    const expected = [
      '3*',
      '**'
    ]
    expect(annotate(input)).toEqual(expected)
  })
  test('handles two rows with mines in row below', () => {
    const input = [
      '  ',
      '**'
    ]
    const expected = [
      '22',
      '**'
    ]
    expect(annotate(input)).toEqual(expected)
  })
  test('handles two rows with mines in row above', () => {
    const input = [
      '**',
      '  '
    ]
    const expected = [
      '**',
      '22'
    ]
    expect(annotate(input)).toEqual(expected)
  })
})
