import Vue from 'vue';
import VueRouter from 'vue-router';
import Article from '../views/Article.vue';
import Main from '../views/Main.vue';
import MyPage from '../views/MyPage.vue';
import FindPw from '../views/FindPw.vue';
import ChangePw from '../views/ChangePw.vue';
import Feedback from '../views/Feedback.vue';
import Save from '../views/Save.vue';
import Policy from '../views/Policy.vue';
import Whoweare from '../views/Whoweare.vue';
import MyInfo from '../components/mypage/MyInfo';
import Channel from '../views/Channel.vue';
import Scrap from '../components/channel/Scrap.vue';
import ScrapNews from '../components/channel/ScrapNews.vue';
// import ToScrap from '../components/channel/ToScrap.vue';
import ModifyMyinfo from '../components/mypage/ModifyMyinfo.vue';
import Search from '../views/Search.vue';
import NoSearch from '../components/search/NoSearch.vue';
import SearchResult from '../components/search/SearchResult.vue';
import Board from '../views/Board.vue';
import BoardDetail from '../views/BoardDetail.vue';
import AddBoard from '../views/AddBoard.vue';
import ModifyBoard from '../views/ModifyBoard.vue';
import Link from '../views/Link.vue';

Vue.use(VueRouter);

const requireAuth = () => (to, from, next) => {
  if (localStorage['access-token'] && localStorage['access-token'] !== '') {
    console.log(localStorage['access-token']);
    return next();
  } else {
    return next('/');
  }
};

const routes = [
  {
    path: '/article/:newsNo',
    name: 'Article',
    component: Article,
    props: true,
  },
  {
    path: '/findpw',
    name: 'FindPw',
    component: FindPw,
  },
  {
    path: '/changepw/:id',
    name: 'ChangePw',
    component: ChangePw,
    props: true,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    children: [
      {
        path: '',
        name: 'NoSearch',
        component: NoSearch,
      },
      {
        path: ':mode/:search_word',
        name: 'SearchResult',
        component: SearchResult,
      },
    ],
  },
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback,
  },
  {
    path: '/save',
    name: 'Save',
    component: Save,
  },
  {
    path: '/policy',
    name: 'Policy',
    component: Policy,
  },
  {
    path: '/whoweare',
    name: 'Whoweare',
    component: Whoweare,
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: MyPage,
    beforeEnter: requireAuth(),
    children: [
      {
        path: '/',
        name: 'MyInfo',
        component: MyInfo,
      },
      {
        path: 'modify',
        name: 'ModifyMyinfo',
        component: ModifyMyinfo,
      },
    ],
  },
  {
    path: '/channel/:id',
    name: 'Channel',
    component: Channel,
    children: [
      {
        path: '/',
        name: 'Scrap',
        component: Scrap,
        props: true,
      },
      {
        path: ':scrap_no',
        name: 'ScrapNews',
        component: ScrapNews,
      },
      {
        path: 'modify/:scrap_no',
        name: 'ModifyScrap',
      },
    ],
  },
  {
    path: '/board/:id',
    name: 'Board',
    component: Board,
  },
  {
    path: '/addBoard',
    name: 'AddBoard',
    component: AddBoard,
  },
  {
    path: '/modifyBoard',
    name: 'ModifyBoard',
    component: ModifyBoard,
    props: true,
  },
  {
    path: '/boardDetail',
    name: 'BoardDetail',
    component: BoardDetail,
    props: true,
  },
  {
    path: '/link',
    name: 'Link',
    component: Link,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
