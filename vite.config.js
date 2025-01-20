import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import path from 'path';

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/sass/app.scss', // Your main SCSS file
        'resources/js/app.js', // Your main JS entry
      ],
      refresh: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/js'), // Alias for easier imports
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: 'resources/js/app.js',
        vendor: [
          'resources/vendor/hs-megamenu/src/hs.megamenu.js',
          'resources/vendor/svg-injector/dist/svg-injector.min.js',
          'resources/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',
          'resources/vendor/fancybox/jquery.fancybox.min.js',
          'resources/vendor/jquery-validation/dist/jquery.validate.min.js',
          'resources/vendor/ion-rangeslider/js/ion.rangeSlider.min.js',
          'resources/vendor/slick-carousel/slick/slick.js',
          'resources/vendor/dzsparallaxer/dzsparallaxer.js',
          'resources/vendor/custombox/dist/custombox.min.js',
          'resources/vendor/custombox/dist/custombox.legacy.min.js',
          'resources/vendor/datatables/media/js/jquery.dataTables.min.js',
          'resources/vendor/flatpickr/dist/flatpickr.min.js',
          'resources/vendor/appear.js',
          'resources/vendor/circles/circles.min.js',
          'resources/vendor/components/hs.core.js',
          'resources/vendor/components/hs.header.js',
          'resources/vendor/components/hs.unfold.js',
          'resources/vendor/components/hs.focus-state.js',
          'resources/vendor/components/hs.malihu-scrollbar.js',
          'resources/vendor/components/hs.validation.js',
          'resources/vendor/components/hs.show-animation.js',
          'resources/vendor/components/hs.svg-injector.js',
          'resources/vendor/components/hs.fancybox.js',
          'resources/vendor/components/hs.range-slider.js',
          'resources/vendor/components/hs.slick-carousel.js',
          'resources/vendor/components/hs.go-to.js',
          'resources/vendor/components/hs.modal-window.js',
          'resources/vendor/components/hs.step-form.js',
          'resources/vendor/components/hs.range-datepicker.js',
          'resources/vendor/components/hs.chart-pie.js',
          'resources/vendor/components/hs.progress-bar.js',
          'resources/vendor/components/hs.selectpicker.js',
          'resources/vendor/components/hs.datatables.js',
          'resources/js/components.js', // If this is your custom JS for components
        ]
      },
    },
  },
  server: {
    proxy: {
      '/app': 'http://localhost', // Proxy if needed for dev server
    },
  },
});
