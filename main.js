
Vue.component('logo', {
    template:
    `
    <picture>
        <slot></slot>
    </picture>
    
    `
});

Vue.component('social-networks', {
    props:['list',"onSocialClick","showPopup"],
    template:
    `
    <ul>
        <li v-for = "item in list" 
            v-on:click="onSocialClick(item)">
            {{item}}
        </li>
    </ul>
    `
});

Vue.component('popup' , {
    props:['onFooBarClick', 'closeClick', "showPopup","getSocial", " onSocialClick"],
    template:
    `
        <div class="popup">
            <i class="fas fa-times" v-on:click="closeClick"></i>
            <slot></slot>
            <button v-on:click="onFooBarClick">Ok</button>
        </div>
    `
})

var app = new Vue({
    el:'#app',
    data: {
        list:['facebook','youtube', 'instagram'],
        url: 'https://brandmark.io/logo-rank/random/beats.png',
        isPopupShow:false,
        currentSocial:''
    },
    methods: {
        onClick(){
            console.log("ACCESS");
        },
        closeClick(){
            this.isPopupShow = false;
        },
        showPopup(){
            this.isPopupShow = true;
        },
        getSocial(){
            return this.currentSocial;
        },
        onSocialClick(val){
            this.currentSocial = val;
            this.showPopup();
        }
    }
});