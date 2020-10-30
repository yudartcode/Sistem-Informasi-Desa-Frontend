import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'Login',
      path: '/pages/login',
      component: () => import('@/views/dashboard/pages/Login'),
    },
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        // Info Desa
        {
          name: 'Index Info Penduduk',
          path: 'infodesa/penduduk/Index',
          component: () => import('@/views/dashboard/infodesa/penduduk/Index'),
        },
        {
          name: 'Form Info Penduduk',
          path: 'infodesa/penduduk/Form',
          component: () => import('@/views/dashboard/infodesa/penduduk/Form'),
        },
        {
          name: 'Index Info Dusun',
          path: 'infodesa/dusun/Index',
          component: () => import('@/views/dashboard/infodesa/dusun/Index'),
        },
        {
          name: 'Form Info Dusun',
          path: 'infodesa/dusun/Form',
          component: () => import('@/views/dashboard/infodesa/dusun/Form'),
        },
        {
          name: 'Sarana Penunjang',
          path: 'infodesa/Saranapenunjang',
          component: () => import('@/views/dashboard/infodesa/Saranapenunjang'),
        },
        {
          name: 'Index Perangkat Desa',
          path: 'infodesa/perangkatdesa/Index',
          component: () => import('@/views/dashboard/infodesa/perangkatdesa/Index'),
        },
        {
          name: 'Form Perangkat Desa',
          path: 'infodesa/perangkatdesa/Form',
          component: () => import('@/views/dashboard/infodesa/perangkatdesa/Form'),
        },
        {
          name: 'Index Administrasi',
          path: 'infodesa/administrasi/Index',
          component: () => import('@/views/dashboard/infodesa/administrasi/Index'),
        },
        {
          name: 'Form Administrasi',
          path: 'infodesa/administrasi/Form',
          component: () => import('@/views/dashboard/infodesa/administrasi/Form'),
        },
        {
          name: 'Potensi',
          path: 'infodesa/potensi',
          component: () => import('@/views/dashboard/infodesa/Potensi'),
        },
        {
          name: 'Index Umum',
          path: 'infodesa/umum/index',
          component: () => import('@/views/dashboard/infodesa/umum/Index'),
        },
        {
          name: 'Form Umum',
          path: 'infodesa/umum/Form',
          component: () => import('@/views/dashboard/infodesa/umum/Form'),
        },
        {
          name: 'Produk Unggulan',
          path: 'infodesa/produkunggulan',
          component: () => import('@/views/dashboard/infodesa/Produkunggulan'),
        },
        // kependudukan
        {
          name: 'Index Kartu Keluarga',
          path: 'kependudukan/kartu-keluarga/index',
          component: () => import('@/views/dashboard/kependudukan/kartu-keluarga/Index'),
        },
        {
          name: 'Form Kartu Keluarga',
          path: 'kependudukan/kartu-keluarga/form',
          component: () => import('@/views/dashboard/kependudukan/kartu-keluarga/Form'),
        },
        {
          name: 'Detail Kartu Keluarga',
          path: 'kependudukan/kartu-keluarga/detail',
          component: () => import('@/views/dashboard/kependudukan/kartu-keluarga/Detail'),
        },
        {
          name: 'Index Penduduk',
          path: 'kependudukan/penduduk/index',
          component: () => import('@/views/dashboard/kependudukan/penduduk/Index'),
        },
        {
          name: 'Form Penduduk',
          path: 'kependudukan/penduduk/form',
          component: () => import('@/views/dashboard/kependudukan/penduduk/Form'),
        },
        {
          name: 'Report',
          path: 'kependudukan/Report',
          component: () => import('@/views/dashboard/kependudukan/Report'),
        },
        {
          name: 'Visi Misi',
          path: 'components/icons',
          component: () => import('@/views/dashboard/component/Icons'),
        },
        {
          name: 'Program Desa',
          path: 'progdes/index',
          component: () => import('@/views/dashboard/progdes/Index'),
        },
        {
          name: 'Program Desa',
          path: 'progdes/form',
          component: () => import('@/views/dashboard/progdes/Form'),
        },
        {
          name: 'Typography',
          path: 'components/typography',
          component: () => import('@/views/dashboard/component/Typography'),
        },
        // Maps
        {
          name: 'Letak Geografis',
          path: 'maps/google-maps',
          component: () => import('@/views/dashboard/maps/GoogleMaps'),
        },
        // Upgrade
        {
          name: 'Upgrade',
          path: 'upgrade',
          component: () => import('@/views/dashboard/Upgrade'),
        },
      ],
    },
  ],
})
