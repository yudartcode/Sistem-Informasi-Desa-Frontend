import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'login',
      path: '/login',
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
          name: 'Penduduk',
          path: 'infodesa/penduduk/Penduduk',
          component: () => import('@/views/dashboard/infodesa/penduduk/Penduduk'),
        },
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
        // kependudukan
        {
          name: 'Index Kartu Keluarga',
          path: 'kependudukan/kartu-keluarga/index',
          component: () => import('@/views/dashboard/kependudukan/kartu-keluarga/Index'),
        },
        {
          name: 'Create Kartu Keluarga',
          path: 'kependudukan/kartu-keluarga/create',
          component: () => import('@/views/dashboard/kependudukan/kartu-keluarga/Create'),
        },
        {
          name: 'Edit Kartu Keluarga',
          path: 'kependudukan/kartu-keluarga/edit',
          component: () => import('@/views/dashboard/kependudukan/kartu-keluarga/Edit'),
        },
        {
          name: 'Index Penduduk',
          path: 'kependudukan/penduduk/index',
          component: () => import('@/views/dashboard/kependudukan/penduduk/Index'),
        },
        {
          name: 'Create Penduduk',
          path: 'kependudukan/penduduk/create',
          component: () => import('@/views/dashboard/kependudukan/penduduk/Create'),
        },
        {
          name: 'Edit Penduduk',
          path: 'kependudukan/penduduk/edit',
          component: () => import('@/views/dashboard/kependudukan/penduduk/Edit'),
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
