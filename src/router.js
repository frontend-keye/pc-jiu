import Index from './page/index'
import Compony from './page/compony'
import Contact from './page/contact'
import Environment from './page/environment'
import Product from './page/product'
import ProductInfo from './page/productInfo'
import ProductSearch from './page/productSearch'
import Recuitment from './page/recuitment'
import RecuitmentDetail from './page/recuitmentdetail'

// 5 品質管理
export default [{
  path: '/index',
  component: Index,
  title: 'HOME',
  order: 0
}, {
  path: '/contact',
  component: Contact,
  title: 'お問い合わせ',
  order: 0
}, {
  path: '/compony',
  component: Compony,
  title: '企業情報',
  order: 2
}, {
  path: '/environment',
  component: Environment,
  title: '環境への取り組み',
  order: 4
}, {
  path: '/product',
  component: Product,
  title: '製品情報',
  order: 3,
  exact: true
}, {
  path: '/productInfo/:type',
  component: ProductInfo,
  title: '',
  order: 0
}, {
  path: '/product/search',
  component: ProductSearch,
  title: '',
  order: 0
}, {
  path: '/recuitment',
  component: Recuitment,
  title: '採用情報',
  order: 6
}, {
  path: '/recuitmentdetail',
  component: RecuitmentDetail,
  title: ''
}]