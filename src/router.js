import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'Login',
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
          name: 'Index Penduduk',
          path: 'infodesa/penduduk/Index',
          component: () => import('@/views/dashboard/infodesa/penduduk/Index'),
        },
        {
          name: 'Create Penduduk',
          path: 'infodesa/penduduk/Create',
          component: () => import('@/views/dashboard/infodesa/penduduk/Create'),
        },
        {
          name: 'Edit Penduduk',
          path: 'infodesa/penduduk/Edit',
          component: () => import('@/views/dashboard/infodesa/penduduk/Edit'),
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
          name: 'Create Perangkat Desa',
          path: 'infodesa/perangkatdesa/Create',
          component: () => import('@/views/dashboard/infodesa/perangkatdesa/Create'),
        },
        {
          name: 'Edit Perangkat Desa',
          path: 'infodesa/perangkatdesa/Edit',
          component: () => import('@/views/dashboard/infodesa/perangkatdesa/Edit'),
        },
        {
          name: 'Index Administrasi',
          path: 'infodesa/administrasi/Index',
          component: () => import('@/views/dashboard/infodesa/administrasi/Index'),
        },
        {
          name: 'Create Administrasi',
          path: 'infodesa/administrasi/Create',
          component: () => import('@/views/dashboard/infodesa/administrasi/Create'),
        },
        {
          name: 'Edit Administrasi',
          path: 'infodesa/administrasi/Edit',
          component: () => import('@/views/dashboard/infodesa/administrasi/Edit'),
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
          name: 'Create Umum',
          path: 'infodesa/umum/Create',
          component: () => import('@/views/dashboard/infodesa/umum/Create'),
        },
        {
          name: 'Edit Umum',
          path: 'infodesa/umum/Edit',
          component: () => import('@/views/dashboard/infodesa/umum/Edit'),
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
