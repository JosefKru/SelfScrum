type Modes = Record<string, boolean | string>

export function classNames(
  cls: string,
  mods: Modes = {},
  optional: string[] = []
): string {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([cls, _]) => cls),
    ...optional.filter(Boolean),
  ].join(' ')
}