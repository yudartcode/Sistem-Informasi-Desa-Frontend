import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'login',
      path: '/auth/login',
      component: () => import('@/views/dashboard/auth/Login'),
      meta: {
        requiresVisitor: true,
      },
    },
    {
      name: 'logout',
      path: '/auth/logout',
      component: () => import('@/views/dashboard/auth/Logout'),
    },
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      meta: {
        requiresAuth: true,
      },
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
          name: 'Index Info Sarana',
          path: 'infodesa/sarana/Index',
          component: () => import('@/views/dashboard/infodesa/sarana/Index'),
        },
        {
          name: 'Form Info Sarana',
          path: 'infodesa/sarana/Form',
          component: () => import('@/views/dashboard/infodesa/sarana/Form'),
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
        // {
        //   name: 'Potensi',
        //   path: 'infodesa/potensi',
        //   component: () => import('@/views/dashboard/infodesa/Potensi'),
        // },
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
        // {
        //   name: 'Produk Unggulan',
        //   path: 'infodesa/produkunggulan',
        //   component: () => import('@/views/dashboard/infodesa/Produkunggulan'),
        // },
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
          name: 'ImportExport',
          path: 'kependudukan/ImportExport',
          component: () => import('@/views/dashboard/kependudukan/ImportExport'),
        },
        // {
        //   name: 'Visi Misi',
        //   path: 'components/icons',
        //   component: () => import('@/views/dashboard/component/Icons'),
        // },
        {
          name: 'Program Desa',
          path: 'progdes/index',
          component: () => import('@/views/dashboard/progdes/Index'),
        },
        {
          name: 'Form Program Desa',
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
