import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
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
<<<<<<< HEAD
        {
          name: 'Penduduk',
          path: 'infodesa/penduduk/Penduduk',
          component: () => import('@/views/dashboard/infodesa/penduduk/Penduduk'),
        },
=======
>>>>>>> adcba856a841606d9ca20227749bd5edf186a628
        {
          name: 'Sarana Penunjang',
          path: 'infodesa/Saranapenunjang',
          component: () => import('@/views/dashboard/infodesa/Saranapenunjang'),
        },
        {
          name: 'Perangkat Desa',
          path: 'infodesa/perangkatdesa/Perangkatdesa',
          component: () => import('@/views/dashboard/infodesa/perangkatdesa/Perangkatdesa'),
        },
        {
          name: 'Administrasi',
          path: 'infodesa/administrasi/Administrasi',
          component: () => import('@/views/dashboard/infodesa/administrasi/Administrasi'),
        },
        {
          name: 'Potensi',
          path: 'infodesa/potensi',
          component: () => import('@/views/dashboard/infodesa/Potensi'),
        },
        {
          name: 'Umum',
          path: 'infodesa/umum/Umum',
          component: () => import('@/views/dashboard/infodesa/umum/Umum'),
        },
        {
          name: 'Produk Unggulan',
          path: 'infodesa/produkunggulan',
          component: () => import('@/views/dashboard/infodesa/Produkunggulan'),
        },
        {
          name: 'Visi Misi',
          path: 'components/icons',
          component: () => import('@/views/dashboard/component/Icons'),
        },
        {
          name: 'Program Desa',
          path: 'components/notifications',
          component: () => import('@/views/dashboard/component/Notifications'),
        },
        {
          name: 'Typography',
          path: 'components/typography',
          component: () => import('@/views/dashboard/component/Typography'),
        },
        // Tables
        {
          name: 'Regular Tables',
          path: 'tables/regular-tables',
          component: () => import('@/views/dashboard/tables/RegularTables'),
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
