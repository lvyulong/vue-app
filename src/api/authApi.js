import Vue from 'vue';
const authApi = new Vue.Resource({
    url: '/{{name}}/auth',
    actions: [
        {
            name:'login',
            method:'POST',
            url:'login'
        },
        {
            name:'logout',
            method:'POST',
            url:'logout'
        },
        {
            name:'current',
            method:'GET',
            url:'current'
        },

    ]
});

export default authApi;
