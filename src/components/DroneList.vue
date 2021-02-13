<template>

    <div class="container">
        <h1 class="text-danger">Lista de Drones</h1>   

        <div class="row g-3 my-5 filtros">
            <div class="col">
                <label>Drone ID</label>
                <input type="text" class="form-control" aria-label="Drone ID">
            </div>
            <div class="col">
                <label>Name</label>
                <input type="text" class="form-control"  aria-label="Name">
            </div>
            <div class="col">
                <label>Current Fly</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div class="col">
                <label>Status</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </div>

        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Drone</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Batteries</th>
                    <th scope="col">Max Speed</th>
                    <th scope="col">Average Speed</th>
                    <th scope="col">Current Fly</th>
                    <th scope="col">Status</th>
                </tr>
             </thead>
             <tbody>  
                <tr v-for="item in pageOfItems" v-bind:key="item.id" >
                    <td>{{item.id}}</td>
                    <td class="pessoa">
                        <div><img :src="item.image" /> </div>
                        <div class="dados">
                            <div>{{item.name}} </div>
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
                    <td><span class="badge badge-primary">{{item.status}}</span></td>
                </tr>
            </tbody>
        </table>

          <jw-pagination :items="list" @changePage="onChangePage"></jw-pagination>
        
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
            pageOfItems: [20],
            pageSize: 20,  
            search: "",
          
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
        }
    },
 
    
}
</script>

<style scoped>
    .filtros .col {
        display: flex;
        flex-direction: column;
        align-items: start;
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
    .mh {
        font-size: 13px;
    }
    .paginacao {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>