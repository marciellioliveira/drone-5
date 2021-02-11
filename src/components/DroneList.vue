<template>

    <div class="container">
        <h1 class="text-danger">Lista de Drones</h1>         

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
                <tr v-for="item in list" v-bind:key="item.id">
                    <td>{{item.id}}</td>
                    <td class="pessoa">
                        <div><img :src="item.image" /> </div>
                        <div class="dados">
                            <div>{{item.name}} </div>
                            <div>{{item.address}}</div>
                        </div>
                    </td>                              
                    <td>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" :style="teste + '%'" aria-valuenow="25">{{item.battery}}</div>
                      </div>  
                        
                        
                        
                        </td>
                    <td>{{item.max_speed}}</td>
                    <td>{{item.average_speed}}</td>
                    <td>{{item.fly}}</td>
                    <td>{{item.status}}</td>
                </tr>
            </tbody>
        </table>
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
        return {list:undefined}
        teste: list.battery, 
        
       
    },
    mounted() {
        Vue.axios.get('http://services.solucx.com.br/mock/drones')
        .then((resp)=> {
            this.list=resp.data;
            console.warn(resp.data)
        })
    }
}
</script>

<style scoped>
    .pessoa {
        display:flex;
    }

    .dados {
        display: flex;
        flex-direction: column;
        align-items: start;
        margin-left: 10px;
    }
</style>