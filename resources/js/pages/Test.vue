<template>
    <div class="mainDiv">
        <div id="header" class="header">
         <p id="demo"></p>
        </div>
        <div id="messages" class="messages">
            <table>
                <tbody >
                <tr v-for="test in test_data">
                    <td>{{test.id}}</td>
                    <td>{{test.mess}}</td>
                </tr>
                </tbody>

            </table>
        </div>
        <div id="footer" class="footer">
            <input type="text" name="mess" placeholder="enter message" v-model="message" >
            <button @click="addInfo">send</button>

            <div class="awaiting" id="awaiting"></div>

        </div>
    </div>
</template>

<script>
import {addData,getData,data} from "../modules/Test.ts";
import axios from "axios";

export default {
    name: 'Test',
    data() {
        return {
            // data:'',
            message: '',
            test_data: [],
            id: null,
            mess: '',
            show: '',
            // obj: {}
        }
    },
    mounted() {
        // this.addDataDb();
        this.getDataFromDb()

    },
    methods: {

        // sendData(event){
        // this.newMess=this.message;
        // console.log('888',this.newMess)
        //
        // },
        addInfo() {
            const data = new FormData();
            data.append('mess', this.message)
            console.log(77, data)
            let addUrl = "/api/test/create"
            addData(addUrl, data).then(resp => {
                console.log(888)
            })
            this.getDataFromDb()
            this.showMessage()
        },
        getDataFromDb() {
            let url = "api/test/get-info";
            console.log(222, url)
            getData(url).then(resp => {
                this.test_data = data;
                console.log(url)
                console.log(data)
            })

        },

        showMessage() {
            let i = 0;
            let el = {}
            let arr = []
            for (let i = 0; i <= this.test_data.length; i++) {
                el = Object.values(this.test_data)[i]
                // console.log(111, el)
                console.log('mess', el['mess'])
                arr.push(el['mess'])
                console.log(33, arr)

                let index = 0
                let interval = setInterval(function () {
                    const element = document.getElementById("demo");
                    document.getElementById("awaiting").innerHTML=arr[index+1]
                    element.innerHTML = arr[index];
                    index++;
                    if (index === arr.length) {
                        clearInterval(interval);
                    }
                }, 1000)
            }
        }
    }
}
</script>
<style scoped>
.mainDiv{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    height: 660px;
    background-color: #718096;
    color: white;
    /*font-size : xx-large;*/
}
.header{
    width: 96%;
    height: 100px;
    border: 2px solid black;

    text-align: center;
}
.messages{
    width: 96%;
    height:300px;
    border:2px solid black ;

}
.footer{
    display: flex;
    justify-content: space-between;
    width: 96%;
    height: 100px;
    text-align: center;

}
/*.mess{*/
/*    width: 70%;*/
/*    height: 100px;*/
/*    border: 2px solid black;*/
/*    }*/
.awaiting{
    width: 25%;
    height: 100px;
    border: 2px solid black;
    padding-top: 40px;
}
input{
    width: 70%;
    height: 100px;
    border: 2px solid black;
    text-align: center;
    font-size: larger;
}
</style>
