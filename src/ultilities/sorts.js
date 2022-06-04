/**
 * Created by tuannguyen's author on 02/26/2021
 * ---
 * Order an array of objects based on another array order
 * ---
 *
 */
const mapOrder = (array, order, key) => {
  array.sort((a, b) => order.indexOf(a[key]) - order.indexOf(b[key]))
  return array
}

export {mapOrder}