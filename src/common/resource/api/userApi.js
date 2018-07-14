import Resource from 'app/common/resource/base';

const userApi = new Resource({
    name: 'user',
    actions: [
        {
            name:'login',
            method:'post',
            url:'login'
        },
        {
            name:'logout',
            method:'post',
            url:'logout'
        },

    ]
});

export default userApi;
