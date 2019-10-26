import Index from './page/index'
import Compony from './page/compony'
import Contact from './page/contact'
import Environment from './page/environment'
import Product from './page/product'
import ProductInfo from './page/productInfo'
import ProductSearch from './page/productSearch'
import Recuitment from './page/recuitment'
import RecuitmentDetail from './page/recuitmentdetail'

export default [{
  path: '/index',
  component: Index,
  title: '首页',
  order: 0
}, {
  path: '/contact',
  component: Contact,
  title: '联系方式',
  order: 5
}, {
  path: '/compony',
  component: Compony,
  title: '企业信息',
  order: 2
}, {
  path: '/environment',
  component: Environment,
  title: '环境改善',
  order: 3
}, {
  path: '/product',
  component: Product,
  title: '制品信息',
  order: 1,
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
  title: '采用情报',
  order: 4
}, {
  path: '/recuitmentdetail',
  component: RecuitmentDetail,
  title: ''
}]