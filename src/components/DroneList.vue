<template>

    <div class="container pb-5">
        <h2 class="text-danger">Lista de Drones</h2>   

        <div class="row g-3 mt-5 mb-4 filtros">
            <div class="col">
                <label>Drone ID</label>
                <input type="text" v-model="search" placeholder="Qual o ID?" class="form-control" aria-label="Drone ID">
            </div>
            <div class="col">
                <label>Name</label>
                <input type="text" placeholder="Qual o nome?" class="form-control"  aria-label="Name">
            </div>
            <div class="col">
                <label>Current Fly</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Selecione</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div class="col">
                <label>Status</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Selecione</option>
                    <option value="SUCCESS">SUCCESS</option>
                    <option value="CHARGING">CHARGING</option>
                    <option value="FLYING">FLYING</option>
                </select>
            </div>
        </div>
        
        <hr class="filter_table">

        <table class="table table-borderless table-hover  table-responsive-sm">
            <thead>
                <tr>
                    <th scope="col"><a href="" v-on:click="onClickReverse()">Drone ID</a></th>
                    <th scope="col"><a href="">Customer</a></th>
                    <th scope="col"><a href="">Batteries</a></th>
                    <th scope="col"><a href="">Max Speed</a></th>
                    <th scope="col"><a href="">Average Speed</a></th>
                    <th scope="col"><a href="">Current Fly</a></th>
                    <th scope="col"><a href="">Status</a></th>
                </tr>
             </thead>
             <tbody>  
                <tr v-for="item in pageOfItems" v-bind:key="item.id" >
                    <td class="itemid">{{item.id}}</td>
                    <td class="pessoa">
                        <div><img :src="item.image" /> </div>
                        <div class="dados">
                            <div class="nome">{{item.name}} </div>
                            <div class="endereco">{{item.address}}</div>
                        </div>
                    </td>                              
                    <td>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" :style="item.battery+'%'" :aria-valuenow="item.battery"  v-b-popover.hover.top="''" :title="item.battery+'%'">{{item.battery}}</div>
                      </div> 
                    </td>
                    <td>{{item.max_speed}}<span class="mh">m/h</span></td>
                    <td>{{item.average_speed}}<span class="mh">m/h</span></td>
                    <td>{{item.fly}}</td>
                    <td><span class="badge fly">{{item.status}}</span></td>
                </tr>
            </tbody>
        </table>

        <jw-pagination :items="list" @changePage="onChangePage" class="custom_pagination"></jw-pagination>
        
        <hr  class="filter_table">

        <a href="https://marciellioliveira.com.br/">Marcielli Oliveira</a>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)


export default {
    name: "DroneList",
    data() {
        return {
            list:undefined,
            pageOfItems: [],
            listReverse: this.list,
            search:""
          
        }        
    },
    mounted() {
        Vue.axios.get('http://services.solucx.com.br/mock/drones')
        .then((resp)=> {
            this.list=resp.data;
            console.warn(resp.data)
        })
    },    
    methods: {
        onChangePage(pageOfItems) {
            //update page of items
            this.pageOfItems = pageOfItems;
        },
        onClickReverse() {
            console.log(this.list.reverse())
        }
    },
   
 
    
}
</script>

<style scoped>

    textarea:focus, 
        textarea.form-control:focus, 
        input.form-control:focus, 
        input[type=text]:focus, 
        input[type=password]:focus, 
        input[type=email]:focus, 
        input[type=number]:focus, 
        [type=text].form-control:focus, 
        [type=password].form-control:focus, 
        [type=email].form-control:focus, 
        [type=tel].form-control:focus, 
        [contenteditable].form-control:focus {
        box-shadow: none;
    }


    ::-webkit-input-placeholder { /* Edge */
        color: #cecece !important;
        }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #cecece !important;
    }

    ::placeholder {
        color: #cecece !important;
    }   

    .badge.fly {
        color: #0647a7 !important;
        background-color: #0647a738 !important;
        width: 100%;
        text-transform: uppercase;
        line-height: 1.5;
        border-radius: 10px;
    }

    .progress-bar {
        background-color: #0647a7 !important;
        line-height: 1.5;
        padding: 5px;
    }

    .table-striped > tbody > tr:nth-of-type(odd) {
        background-color: #f8fbff00;
    }

    .table td, .table th {
        vertical-align: middle;
        border: 0;
        color: #0647a7;
    }

    hr.filter_table {
         color:#d0d0d0 !important;
    }
    
    
    h2 {
        color:#0647a7 !important;
        font-weight: 700;
    }
    
    a {
        text-decoration: none !important;
        color: #0647a7;
    }
    .filtros .col {
        display: flex;
        flex-direction: column;
        align-items: start;
    }

    .filtros label {
        font-size: 1rem;
        font-weight: 600;
        color: #8c8c8c;
    }

    .filtros input,
    .filtros select {
        border: 1px solid #dcdcdc;
        border-radius: 5px;
        -webkit-box-shadow: 1px 3px 5px -1px rgba(196,196,196,1);
        -moz-box-shadow: 1px 3px 5px -1px rgba(196,196,196,1);
        box-shadow: 1px 1px 4px -1px rgba(196,196,196,1);
        color: #cecece;

    }

    .filtros select:focus {
        box-shadow: none;
    }

    .itemid {
        font-weight: 700;
        color: #0647a7;
    }

    .pessoa {
        display:flex;
    }

    .endereco {
        font-size: 13px;
    }

    .dados {
        display: flex;
        flex-direction: column;
        align-items: start;
        margin-left: 10px;
    }

    .dados .nome {
        font-weight: 600;
    }

    .mh {
        font-size: 13px;
    }
    .paginacao {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    
</style>