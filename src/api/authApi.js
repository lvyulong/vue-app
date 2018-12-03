import Resource from 'app/common/resource';

const authApi = new Resource({
    url: 'auth',
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
