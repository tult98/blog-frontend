import format from 'date-fns/format'

export const formatTimeFromUTC = (
  date: Date | number,
  formatString = 'MM-dd-yyyy',
  options?: any,
) => {
  return format(date, formatString, options)
}
