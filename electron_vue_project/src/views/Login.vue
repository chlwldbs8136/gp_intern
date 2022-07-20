<template>
<div id="login">
    <div class="login-area">
        <img 
            alt="" 
            src="@/assets/logo.png"
        >
        <v-container>
            <v-card 
                color="#036fb1" 
                class="ma-30 pa-14" 
                width="450"
            >
                <v-row 
                    class="align-center d-flex" 
                    justify="center"
                >
                    <v-col>
                        <v-spacer></v-spacer>
                        <v-form 
                            class="input" 
                            v-on:submit.prevent="submitForm"
                        >
                            <div id="inputID">
                                <v-text-field 
                                    :rules="[rules.required]" 
                                    :prepend-inner-icon="icons" 
                                    filled
                                    v-bind:label="$t('login.id')"
                                    color="#0288D1" 
                                    v-model="userId"
                                    background-color="white" 
                                    @keyup.enter="submitForm"
                                >
                                </v-text-field>
                            </div>
                            <div class="inputPW">
                                <v-text-field 
                                    :prepend-inner-icon="icons" 
                                    :rules="[rules.required]"
                                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="show ? 'text' : 'password'" 
                                    @click:append="show = !show"
                                    @keyup.enter="submitForm"
                                    v-model="password" 
                                    background-color="white" 
                                    v-bind:label="$t('login.password')"
                                    filled
                                >
                                </v-text-field>
                            </div>
                            <v-row>
                                <v-col cols="12">
                                    <v-btn-toggle 
                                        v-model="text" 
                                        color="white" 
                                        mandatory 
                                        group
                                    >
                                        <v-btn 
                                            @click="$i18n.locale = 'ko'" 
                                            x-large 
                                            value="kr" 
                                            font-color="white"
                                        >
                                            한국어
                                        </v-btn>
                                        <v-btn 
                                            @click="$i18n.locale = 'en'" 
                                            x-large 
                                            value="en" 
                                            font-color="white"
                                        >
                                            ENGLISH
                                        </v-btn>
                                    </v-btn-toggle>
                                </v-col>
                            </v-row>
                            <v-card-actions>
                                <v-btn 
                                    class="ma-2 white--text" 
                                    color="#01579B" 
                                    elevation="2" 
                                    tile 
                                    block 
                                    x-large
                                    @click="submitForm"
                                >
                                    <h3>LOGIN</h3>
                                </v-btn>
                            </v-card-actions>
                        </v-form>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
    </div>
</div>
</template>

<script>
import { mdiPencil } from '@mdi/js';
import database from '@/extraResources/database'

const Login = {
	name: 'LoginPage',

	data() {
		return {
			userId: '',
			password: '',
			icons: mdiPencil,
			show: false,
			selection: 1,
			row: null,
			text: 'center',
			rules: {
				required: (value) => !!value || 'Required.',
				min: (v) => v.length >= 8 || 'Min 8 characters',
			},
		};
	},

	created() {
		database.connect();
	},

	methods: {
		async submitForm() {
			const result = await database.login(this.userId, this.password);
			if ( result ) {
				this.$router.push('/home');
				return;
			}
		}
	}
}

export default Login;

</script>

<style>
#login {
	background: url('@/assets/bg-login.jpg') center center;
	width: 100vw;
    min-height: 800px;
	height: 100vh;
	background-size: cover;
}

.login-area {
	widows: 550px;
	position: absolute;
	top: 20%;
	left: 35%;
	text-align: center;
}
#inputID{
    margin-bottom: 10px;
}
.card {
	margin-top: 100px;
}

.input {
	color: #039BE5 !important;
	justify-content: center;
	align-content: align-center
}

.radio {
	color: white;
}
</style>
