import Vue from 'vue';
import Vuex from 'vuex';
import { getInfo } from '@/api/user.js';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userProfile: {},
    themeMode: localStorage.themeMode,
  },
  getters: {
    userProfile: ({ userProfile }) => userProfile,
    loggedIn: ({ loggedIn }) => loggedIn,
    themeMode: ({ themeMode }) => themeMode,
  },
  mutations: {
    SET_USER(state, userProfile) {
      state.userProfile = userProfile;
      console.log(state.userProfile);
    },
    SET_THEME_MODE(state, themeMode) {
      state.themeMode = themeMode;
    },
  },
  actions: {
    getThemeMode(context, mode) {
      store.commit('SET_THEME_MODE', mode);
      localStorage.setItem('themeMode', mode);
    },
    getUserInfo({ commit }) {
      if (localStorage['access-token'] && localStorage['access-token'] !== '') {
        getInfo(
          localStorage.id,
          (response) => {
            if (response.data.message === 'success') {
              let user = response.data['userInfo'];
              commit('SET_USER', user);
            } else {
              this.isLoginError = true;

              localStorage.clear();
              commit('SET_USER', null);
              this.$router.go(this.$router.currentRoute);
            }
          },
          (error) => {
            console.error(error);
            alert('로그인 유지기간이 만료되었습니다. 다시 로그인해주세요');

            localStorage.clear();
            commit('SET_USER', null);
            this.$router.go(this.$router.currentRoute);
          }
        );
      }
    },
    logout({ commit }) {
      localStorage.clear();
      commit('SET_USER', null);
    },
  },
  modules: {},
});

export default store;
