<template>
    <div class="course">
        <div id="name">{{name}}</div>
        <hr>
        <div id="infoContainer">
            <div>course limit: <b>{{lim}}</b></div>
            <div>current attd: <b>{{attd}}</b></div>
            <div v-if="lim > 0">percentage: <b>{{percentage}}%</b></div>
        </div>
        <div id="attdContainer">
            <div class="progressBar" id="progressAttd" v-show="percentage !== 0"
                v-bind:style="{width: percentage + '%',}"></div>
            <div class="progressBar" id="progressLim" v-show="percentage !== 100"
                v-bind:style="{width: 100-percentage + '%',}"></div>
        </div>
        <div id="warning" v-show="currentLim == 0 && lim != 0">you have no left limit to attd</div>
        <div id="opsContainer">
            <div class="attdChange" id="attdPlus" v-on:click="changeAttd('+')">add</div>
            <div class="attdChange" id="attdMinus" v-on:click="changeAttd('-')">remove</div>
        </div>
        <div id="delete" v-on:click="removeCourse()">delete</div>
    </div>
</template>

<script>
    import firebase from 'firebase'
    import { database } from '../database.js'
    export default {
        props: ["courseID", "username", "name", "lim", "attd", "percentage"],
        data() {
            return {}
        },
        computed: {
            currentLim() {
                if (this.lim > this.attd) return (this.lim - this.attd)
                return 0
            }
        },
        methods: {
            removeCourse() {
                database.ref("/courses/" + this.username + "/courses/" + this.courseID).remove();
            },
            changeAttd(cmd) {
                var ref = database.ref("/courses/" + this.username + "/courses/" + this.courseID + "/attd");

                if (cmd == "+" && this.attd < this.lim) {
                    if (this.attd == this.lim - 1) document.getElementById('progressLim').style.opacity = 0;
                    else if (this.attd == 0) document.getElementById('progressAttd').style.opacity = 1;
                    
                    ref.set(this.attd + 1);
                } else if (cmd == "-" && this.attd > 0) {
                    if (this.attd == 1) document.getElementById('progressAttd').style.opacity = 0;
                    else if (this.attd == this.lim) document.getElementById('progressLim').style.opacity = 1;

                    ref.set(this.attd - 1);
                }
            },
            setOpacity() {
                if (this.attd == 0) document.getElementById('progressAttd').style.opacity = 0;
                else if (this.lim == 0) document.getElementById('progressLim').style.opacity = 0;
            }
        },
    }
</script>

<style scoped>
    .course {
        flex: 1 1 auto;
        background-color: rgba(255, 51, 102, 0.750);
        padding: 1%;
        border-radius: 7px;
        border: 1.5px solid black;
        box-shadow: 0 19px 20px rgba(0, 0, 0, 0.30), 0 15px 19px rgba(0, 0, 0, 0.32);
        font-family: 'Open Sans', sans-serif;
        color: black;
        display: flex;
        flex-direction: column;
        flex-basis: 50%;
        max-width: 30%;
        margin: 0 auto;
        margin-top: 2%;
        animation-name: borderAni;
        animation-duration: 8s;
        animation-iteration-count: infinite;
    }

    @keyframes borderAni {
        0% {
            box-shadow: -26px 19px 20px rgba(0, 0, 0, 0.30), -23px 15px 19px rgba(0, 0, 0, 0.32)
        }

        50% {
            box-shadow: 10px 19px 20px rgba(0, 0, 0, 0.30), 2px 15px 19px rgba(0, 0, 0, 0.32);
        }

        100% {
            box-shadow: -26px 19px 20px rgba(0, 0, 0, 0.30), -23px 15px 19px rgba(0, 0, 0, 0.32)
        }
    }

    #name {
        font-size: 120%;
    }

    hr {
        height: 1px;
        width: 95%;
        background-color: black;
        border: 0;
    }

    #infoContainer {
        margin-top: 5%;
        font-size: 92%;
    }

    #attdContainer {
        display: flex;
        flex-direction: row;
        width: fit-content;
        width: 95%;
        margin: 0 auto;
        margin-top: 7%;
        margin-bottom: 7%;
        border: 3px solid black;
        border-radius: 7px;
    }

    .progressBar {
        padding: 10px;
        transition-duration: 260ms;
    }

    #progressAttd {
        z-index: 100;
        background-color: rgb(228, 50, 94);
        border-radius: 7px 4px 4px 7px;
    }

    #progressLim {
        z-index: 99;
        background-color: rgb(61, 161, 233);
        border-radius: 4px 7px 7px 4px;
    }

    #warning {
        color: red;
        font-size: 92%;
        margin-top: 3%;
        margin-bottom: 3%;
        text-decoration: underline;
        background-color: black;
        padding: 5px;
        border-radius: 7px;
    }

    #opsContainer {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .attdChange {
        width: 40%;
        padding: 3.3%;
        text-align: center;
        font-size: 110%;
        border: 3px solid black;
        border-radius: 7px;
        margin: 0 auto;
        margin: 3%;
        cursor: pointer;
        transition-duration: 200ms;
    }

    .attdChange:active {
        transform: scale(0.9);
    }

    #attdPlus {
        background-color: #FF3366;
    }

    #attdMinus {
        background-color: rgba(100, 190, 255, 0.850);
    }

    #delete {
        width: 85%;
        padding: 3.3%;
        font-size: 110%;
        background: black;
        color: white;
        cursor: pointer;
        transition-duration: 200ms;
        border-radius: 7px;
        margin: 0 auto;
    }

    @media screen and (max-width: 768px) {
        .course {
            max-width: 400px;
            margin-top: 7%;
            margin-bottom: 7%;
            box-shadow: 0 3px 15px rgba(0, 0, 0, 0.30), 0 15px 19px rgba(0, 0, 0, 0.32);
        }
    }
</style>
