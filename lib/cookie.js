Cookie = {
    getCookie: function () {
        let object = {};
        let cookie = document.cookie;
        cookie = cookie.split('; ');
        for (let i = 0; i < cookie.length; i++) {
            let index_of = cookie[i].indexOf('=');
            let index = cookie[i].substring(0, index_of);
            let value = cookie[i].substring(++index_of);

            object[index] = value;
        }

        return object;
    }
}