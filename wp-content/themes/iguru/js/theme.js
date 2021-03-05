"use strict";

is_visible_init();
iguru_slick_navigation_init();

jQuery(document).ready(function($) {
	iguru_split_slider();
	iguru_sticky_init();
	iguru_search_init();
	iguru_side_panel_init();
	iguru_mobile_header();
	iguru_woocommerce_helper();
	iguru_woocommerce_tools();
	iguru_woocommerce_filters();
	iguru_init_timeline_appear();
	iguru_init_timeline_horizontal_appear();
	iguru_init_ico_progress_appear();
	iguru_progress_bars_init();
	iguru_carousel_slick();
	iguru_counter_init();
	iguru_countdown_init();
	iguru_circuit_services();
	iguru_circuit_services_resize();
	iguru_img_layers();
	iguru_page_title_parallax();
	iguru_extended_parallax();
	iguru_portfolio_parallax();
	iguru_message_anim_init();
	iguru_scroll_up();
	iguru_link_scroll();
	iguru_skrollr_init();
	iguru_sticky_sidebar();
	iguru_videobox_init();
	iguru_parallax_video();
	wgl_timeTabs();
	iguru_select_wrap();
	jQuery( '.wgl_module_title .carousel_arrows' ).iguru_slick_navigation();
	jQuery( '.wgl-products > .carousel_arrows' ).iguru_slick_navigation();
	iguru_menu_lavalamp();
	iguru_scroll_animation();
	iguru_dynamic_styles();
	iguru_woocommerce_mini_cart();
	iguru_learnpress_helper();
});

jQuery(window).load(function() {
	iguru_isotope();
	iguru_blog_masonry_init();
	setTimeout( function() {
		jQuery('#preloader-wrapper').fadeOut();
	}, 1100);
	particles_custom();
});
