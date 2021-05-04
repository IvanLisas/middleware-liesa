import createData, { Data } from '../types/Data'

const rows = [
  createData(1, 1, 'Termonoseque', 'HP', [], Math.random() * 100, 456),
  createData(2, 2, 'La kuka', 'Siemens', ['Mercadolibre'], Math.random() * 100, 121),
  createData(3, 3, 'Termica', 'Manaos', [], Math.random() * 100, 865),
  createData(4, 4, 'Cosa rara', 'Microsft', ['GoogleShops', 'Magento'], Math.random() * 100, 1),
  createData(5, 5, 'Aparato', 'Apple', ['Magento'], Math.random() * 100, 2241),
  createData(6, 6, 'Otro aparato', 'Siemens', ['Magento'], 100, 124),
  createData(
    7,
    7,
    'Transformador',
    'Dell',
    ['Magento', 'Tiendanube', 'GoogleShops', 'Mercadolibre'],
    Math.random() * 100,
    632
  ),
  createData(8, 8, 'Termotanque', 'Samsung', ['Mercadolibre', 'GoogleShops'], 100, 21),
  createData(9, 9, 'Termonoseque', 'HP', ['GoogleShops', 'Magento'], Math.random() * 100, 100),
  createData(
    10,
    10,
    'La kuka',
    'Siemens',
    ['Magento', 'Tiendanube', 'GoogleShops', 'Mercadolibre'],
    Math.random() * 100,
    454
  ),
  createData(11, 11, 'Termica', 'Manaos', ['Mercadolibre', 'GoogleShops'], Math.random() * 100, 231),
  createData(12, 12, 'Cosa rara', 'Microsft', ['GoogleShops', 'Magento'], Math.random() * 100, 282),
  createData(13, 13, 'Aparato', 'Apple', ['Magento'], Math.random() * 100, 231),
  createData(14, 14, 'Otro aparato', 'Siemens', ['Magento'], Math.random() * 100, 89),
  createData(
    15,
    15,
    'Transformador',
    'Dell',
    ['Magento', 'Tiendanube', 'GoogleShops', 'Mercadolibre'],
    Math.random() * 100,
    111
  ),
  createData(16, 16, 'Termotanque', 'Samsung', ['Mercadolibre', 'GoogleShops'], 0, 12),
  createData(17, 17, 'Termonoseque', 'HP', ['GoogleShops', 'Magento'], Math.random() * 100, 15),
  createData(18, 18, 'La kuka', 'Siemens', ['Magento', 'Tiendanube', 'GoogleShops', 'Mercadolibre'], 4, 12),
  createData(19, 19, 'Termica', 'Manaos', ['Mercadolibre', 'GoogleShops'], 12, 12),
  createData(20, 20, 'Cosa rara', 'Microsft', ['GoogleShops', 'Magento'], Math.random() * 100, 231),
  createData(21, 21, 'Aparato', 'Apple', ['Magento'], 0, 12),
  createData(22, 22, 'Otro aparato', 'Siemens', ['Magento'], Math.random() * 100, 231),
  createData(23, 23, 'Transformador', 'Dell', ['Magento', 'Tiendanube', 'GoogleShops', 'Mercadolibre'], 0, 12),
  createData(24, 24, 'Termotanque', 'Samsung', ['Mercadolibre', 'GoogleShops'], Math.random() * 100, 231)
]

export default rows
