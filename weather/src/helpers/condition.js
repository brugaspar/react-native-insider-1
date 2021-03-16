export function condition(condition) {
  switch (condition) {
    case 'storm':
    case 'rain':
      return icon = {
        name: 'rainy-outline',
        color: '#1ec9ff'
      }
    case 'clear_day':
      return icon = {
        name: 'partly-sunny-outline',
        color: '#ffb300'
      }
    default:
      return icon = {
        name: 'cloud-outline',
        color: '#1ec9ff'
      }
  }
}