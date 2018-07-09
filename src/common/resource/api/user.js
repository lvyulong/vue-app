import Resource from 'app/common/resource/base';

const user = new Resource({
    name: 'user',
    actions: [
        {name:'login',method:'post'},
        {name:'logout',method:'post'},

    ]
});

export default user;
