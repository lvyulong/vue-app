
export default {
    request: {
        success: function (config) {
            // console.log(config)
            return config;
        },
        error: function (error) {
            // console.log(error.response);
            return Promise.reject(error);
        }
    },
    response: {
        success: function (response) {
            // console.log(response)
            return response;
        },
        error: function (error) {
            let errRes = error.response || {};
            if(errRes.status == 401){
                vm.$router.push({name:'login'});
            }else{
                if(errRes.data){
                    if (errRes.data.message){
                        vm.$toast(errRes.data.message);
                    }
                }
            }
            return Promise.reject(error);
        }
    }
};
