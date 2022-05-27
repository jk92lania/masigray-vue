<template>

  <div>
    <!-- 모바일 메뉴 -->
    <div class="m-menu-bg"></div>
    <div class="m-menu-wrap">
        <button class="m-bt-close">close</button>
        <ul class="m-sns-menu">
            <li>
                <a href="#" alt="blog" title="blog">Blog</a>
            </li>
            <li>
                <a href="#" alt="insta" title="insta">Instargram</a>
            </li>
            <li>
                <a href="#" alt="facebook" title="facebook">Facebook</a>
            </li>
        </ul>
        <ul class="m-gnb">
            <li>
                <a href="#" alt="">마시그레이</a>
                <ul class="m-submenu">
                    <li><a href="#">회사소개</a></li>
                    <li><a href="#">연혁</a></li>
                    <li><a href="#">CEO인사말</a></li>
                    <li><a href="#">BI / 비전</a></li>
                    <li><a href="#">오시는길</a></li>
                </ul>
            </li>
            <li>
                <a href="#" alt="">메뉴</a>
                <ul class="m-submenu">
                    <li><a href="#">신메뉴</a></li>
                    <li><a href="#">커피</a></li>
                    <li><a href="#">음료</a></li>
                    <li><a href="#">디자인</a></li>
                    <li><a href="#">MD상품</a></li>
                </ul>
            </li>
            <li>
                <a href="#" alt="">프렌차이즈</a>
                <ul class="m-submenu">
                    <li><a href="#">가맹안내</a></li>
                    <li><a href="#">가맹절차</a></li>
                    <li><a href="#">매장인테리어</a></li>
                    <li><a href="#">커피 아카데미</a></li>
                    <li><a href="#">가맹상담신청</a></li>
                </ul>
            </li>
            <li>
                <a href="#" alt="">매장안내</a>
                <ul class="m-submenu">
                    <li><a href="#">매장안내</a></li>
                </ul>
            </li>
            <li>
                <a href="#" alt="">공지사항</a>
                <ul class="m-submenu">
                    <li><a href="#">공지사항</a></li>
                    <li><a href="#">이벤트</a></li>
                </ul>
            </li>
            <li>
                <a href="#" alt="">고객의소리</a>
                <ul class="m-submenu">
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Q&A</a></li>
                    <li><a href="#">케이터링</a></li>
                </ul>
            </li>
        </ul>
    </div>
    <!-- //모바일 메뉴 -->
     <!-- 오른쪽 고정메뉴 -->
     <ul class="quick-menu">
        <li><a href="#"><img :src="require('@/images/quick01.png')" alt=""></a></li>
        <li><a href="#"><img :src="require('@/images/quick02.png')"  alt=""></a></li>
        <li><a href="#"><img :src="require('@/images/quick03.png')"  alt=""></a></li>
        <li><a href="#"><img :src="require('@/images/quick04.png')"  alt=""></a></li>
    </ul>
    
     <!-- //오른쪽 고정메뉴 -->

     <!-- 상단이동 -->
     <button class="gotop">top</button>
    <div class="wrap">
        <!-- 상단 -->
        <header class="header">
            <div class="container">
                <div class="header-top clearfix">
                    <ul class="help-menu">
                        <li>
                            <a href="#" alt="blog" title="blog">Blog</a>
                        </li>
                        <li>
                            <a href="#" alt="insta" title="insta">Instargram</a>
                        </li>
                        <li>
                            <a href="#" alt="facebook" title="facebook">Facebook</a>
                        </li>
                    </ul>
                </div>
                <div class="header-main">
                    <a href="index.html" alt="마시그래이" class="logo">마시그래이</a>
                    <nav class="nav">
                        <div class="navbg"></div>
                        <ul class="gnb">
                            <li>
                                <a href="#" alt="마시그래이">마시그래이</a>
                                <ul class="submenu">
                                    <li><a href="#">회사소개</a></li>
                                    <li><a href="#">연혁</a></li>
                                    <li><a href="#">CEO인사말</a></li>
                                    <li><a href="#">BI / 비전</a></li>
                                    <li><a href="#">오시는길</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" alt="메뉴">메뉴</a>
                                <ul class="submenu">
                                    <li><a href="#">신메뉴</a></li>
                                    <li><a href="#">커피</a></li>
                                    <li><a href="#">음료</a></li>
                                    <li><a href="#">디자인</a></li>
                                    <li><a href="#">MD상품</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" alt="프렌차이즈">프렌차이즈</a>
                                <ul class="submenu">
                                    <li><a href="#">가맹안내</a></li>
                                    <li><a href="#">가맹절차</a></li>
                                    <li><a href="#">매장인테리어</a></li>
                                    <li><a href="#">커피 아카데미</a></li>
                                    <li><a href="#">가맹상담신청</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" alt="매장안내">매장안내</a>
                                <ul class="submenu">
                                    <li><a href="#">매장안내</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" alt="공지사항">공지사항</a>
                                <ul class="submenu">
                                    <li><a href="#">공지사항</a></li>
                                    <li><a href="#">이벤트</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" alt="고객의소리">고객의소리</a>
                                <ul class="submenu">
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Q&A</a></li>
                                    <li><a href="#">케이터링</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <button class="m-bt">menu</button>
        </header>
        <!-- // 상단 -->
        <!-- 비주얼 -->
        <section class="visual">
            <swiper
              :loop="true"
              :modules="modules"
              :navigation="{
                nextEl: '.sw-visual-prev',
                prevEl: '.sw-visual-next'
              }"
              :autoplay="{
                delay : 2000,
                disableOnInteraction: false,              
              }"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
              class="sw-visual">
                    <swiper-slide class="swiper-slide">
                        <div class="visual-div visual-bg-1"></div>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <div class="visual-div visual-bg-2"></div>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <div class="visual-div visual-bg-3"></div>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <div class="visual-div visual-bg-4"></div>
                    </swiper-slide>
                <button  class="sw-visual-prev"></button>
                <button   class="sw-visual-next"></button>
            </swiper>
            
        </section>
        <!-- // 비주얼 -->
        <!-- 스토리 -->
        <section class="story">
            <div class="container clearfix">
                <div class="story-box story-box-1">
                    <img :src="require('@/images/mb01_img.png')" alt="마시그래이">
                    <a href="#">
                        <h3>브랜드 스토리</h3>
                        <p>마시그래이는 표준어로 '마셔라' 라는 
                            <br>사투리의 표현을 가져온 것으로 브랜드네임에서부터 
                            <br>고객에게 친밀하게 다가가고자 하는 마음을 담았습니다.
                        </p>
                    </a>
                </div>
                <div class="story-box story-box-2">
                    <swiper
                      :loop="true"
                      :modules="modules"
                      :navigation="{
                        nextEl: '.sw-story-prev',
                        prevEl: '.sw-story-next'
                      }"
                      :autoplay="{
                        delay : 2000,
                        disableOnInteraction: false,              
                      }"
                      @swiper="onSwiper"
                      @slideChange="onSlideChange"
                      class="sw-story">
                            <swiper-slide class="swiper-slide">
                                <a href="#" class="story-link-1">마시그래이 메뉴</a>
                            </swiper-slide>
                            <swiper-slide class="swiper-slide">
                                <a href="#" class="story-link-2">마시그래이 메뉴</a>
                                
                            </swiper-slide>
                            <swiper-slide class="swiper-slide">
                                <a href="#" class="story-link-3">마시그래이 메뉴</a>
                                
                            </swiper-slide>
                            <swiper-slide class="swiper-slide">
                                <a href="#" class="story-link-4">마시그래이 메뉴</a>

                            </swiper-slide>
                            <swiper-slide class="swiper-slide">
                                <a href="#" class="story-link-5">마시그래이 메뉴</a>

                            </swiper-slide>
                        <button class="sw-story-prev"></button>
                        <button class="sw-story-next"></button>
                    </swiper>
                </div>
                <div class="story-box story-box-3 clearfix">
                    <a href="#" class="story-link-bus-1">
                        <h3>창업절차</h3>
                        <p>체계적인 마시그래이의 
                            <br>창업시스템에 대해 알아보세요.
                        </p>
                    </a>
                    <a href="#" class="story-link-bus-2">
                        <h3>창업문의</h3>
                        <p>차별화된 Take-out 브랜드<br>
                            마시그래이에 대해 알아보세요.</p>
                    </a>
                </div>
                <div class="story-box story-box-4 clearfix">
                    <div class="story-search story-search-img"></div>
                    <div class="story-search story-search-cont">
                        <h3>
                            <strong>STORE</strong>
                            <span>매장</span>
                        </h3>
                        <p>가까운 마시그래이 매장을
                            <br> 찾아보세요
                        </p>
                        <form action="" class="search-form">
                            <input type="text" class="search">
                            <input type="image" :src="require('@/images/btn_store.gif')" alt="검색" class="search-bt">
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <!-- // 스토리 -->
        <!-- 상품안내 -->
        <section class="good">
            <div class="container">
                <h2>masigray <strong>menu</strong></h2>
                <p>마시그래이의 다양한 메뉴를 맛보세요</p>
                <swiper
                      :loop="true"
                      :modules="modules"
                      :navigation="{
                        nextEl: '.sw-good-prev',
                        prevEl: '.sw-good-next'
                      }"
                      :pagination="{
                        clickable : true
                      }"
                      :autoplay="{
                        delay : 2000,
                        disableOnInteraction: false,              
                      }"
                      @swiper="onSwiper"
                      @slideChange="onSlideChange"
                      class="sw-good">
                        <swiper-slide class="swiper-slide">
                            <a href="#" class="good-img-1"></a>
                        </swiper-slide>
                        <swiper-slide class="swiper-slide">
                            <a href="#" class="good-img-2"></a>
                        </swiper-slide>
                        <swiper-slide class="swiper-slide">
                            <a href="#" class="good-img-3"></a>
                        </swiper-slide>
                    <button class="sw-good-prev"></button>
                    <button class="sw-good-next"></button>
                    <!-- <div class="sw-good-pg"></div> -->
                </swiper>
                
            </div>
        </section>
        <!-- // 상품안내 -->
        <!-- 프랜차이즈 -->
        <section class="franchiser">
            <div class="container">
                <h2>masigray <strong>Franchiser</strong></h2>
                <p>마시그래이 신규 매장</p>
                <div class="fr-wrap">
                    <ul>
                        <li>
                            <a href="#">
                                <img :src="require('@/images/fc_001.jpg')" alt="합천점">
                                합천점
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img :src="require('@/images/fc_002.jpg')" alt="신천점">
                                신천점
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img :src="require('@/images/fc_003.jpg')" alt="복현푸르지오점">
                                복현푸르지오점
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img :src="require('@/images/fc_004.jpg')" altlt="대곡역점">                                
                                대곡역점
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- // 프랜차이즈 -->
        <!-- sns -->
        <section class="sns">
            <div class="container">
                <h2>masigray <strong>sns</strong></h2>
                <p>#masigray</p>
            </div>
        </section>
        <!-- // sns -->
        <!-- 하단 -->
        <footer class="footer">
            <div class="container">
                <div class="footer-menu">
                    <ul>
                        <li><a href="#">점주의 방</a></li>
                        <li><a href="#">회사소개</a></li>
                        <li><a href="#">개인정보취급방침</a></li>
                        <li><a href="#">이메일무단수집거부</a></li>
                        <li><a href="#">가맹문의</a></li>
                        <li><a href="#">고객의 소리</a></li>
                    </ul>
                </div>
                <div class="footer-logo">
                    <a href="#"><img :src="require('@/images/foot_logo.png')" alt="마시그래이">마시그래이</a>
                </div>
                <div class="footer-copy">
                    (주) 에스이엠 | 사업자등록번호 : 502 - 86 - 32017 | 대표이사 : 정영주
                    <br> 주소 : 대구광역시 수성구 만촌동 957-2번지 2층 | 전화 : 1899-2087 | 팩스 : 053-474-9522
                </div>
                <div class="footer-sns">
                    <ul>
                        <li><a href="#"><img :src="require('@/images/foot_sns_blog.png')" alt="블로그">블로그</a></li>
                        <li><a href="#"><img :src="require('@/images/foot_sns_insta.png')" alt="인스타그램">인스타그램</a></li>
                        <li><a href="#"><img :src="require('@/images/foot_sns_facebook.png')" alt="페이스북">페이스북</a></li>
                    </ul>
                </div>
            </div>
        </footer>
        <!-- // 하단 -->
    </div>
  </div>

</template>

<script>
import { onMounted } from 'vue';
import $ from 'jquery'

import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default {
  name: 'App',
  components: {
    Swiper,
    SwiperSlide
  },

  // 기본 자바스크립트 실행
  setup() {
    // ui 관련 js 코드
    // 화면에 배치(document.ready) 후 실행
    onMounted(()=> {
      // 주메뉴 모션 적용
      let nav = $('.nav');
      let headerMain = $('.header-main');
      let logo = $('.logo');
      nav.mouseenter(function(){
          $(this).addClass('nav-active');
      });
      headerMain.mouseleave(function(){
          nav.removeClass('nav-active');
      });
      logo.mouseenter(function(){
          nav.removeClass('nav-active');
      });
      
      // 상단이동 버튼
      $('.gotop').click(function(){
          $('html').animate({
              scrollTop: 0
          }, 500);
      });
      
  
  
      // 스크롤 기능
      let header = $('.header')    
      let w = $(window).width();
      if(w > 700) {
          fixHeader();
      }
  
      function fixHeader(){
          $(window).scroll(function(){
              let temp = $(window).scrollTop();
              if(temp > 0) {
                  header.addClass('fix-active');
              } else {
                  header.removeClass('fix-active');
      
              }
          });
      }
  
      // 모바일 메뉴
      let mBt = $('.m-bt');
      let mMenuBg = $('.m-menu-bg');
      let mMuenuWrap = $('.m-menu-wrap');
      let mBtClose = $('.m-bt-close');
  
      mBt.click(function(){
          mMenuBg.addClass('m-menu-active');
          mMuenuWrap.addClass('m-menu-active');
          
      });
      mBtClose.click(function(){
          mMenuBg.removeClass('m-menu-active');
          mMuenuWrap.removeClass('m-menu-active');
          
      });
      mMenuBg.click(function(){
          mMenuBg.removeClass('m-menu-active');
          mMuenuWrap.removeClass('m-menu-active');
          
      });
  
      
      
      // 화면 리사이징 처리
      $(window).resize(function(){
          w = $(window).width();
          if(w > 700) {
              mMenuBg.removeClass('m-menu-active');
              mMuenuWrap.removeClass('m-menu-active');
              fixHeader();
          }
      });

    });

    const onSwiper = (swiper) => {
      console.log(swiper);

    };
    const onSlideChange = () => {
      console.log('slide change');
    };

    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Autoplay],
    }
  }
}
</script>

<style>
#app {
}
</style>
