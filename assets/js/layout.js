'use strict'

import 'expose-loader?jQuery!jquery'
import 'expose-loader?$!jquery'
import 'expose-loader?Popper!popper.js'

import $ from 'jquery'
import 'bootstrap'
import 'particles.js'
import ParticlesConfig from './components/ParticlesConfig'

// make sure the polyfill library is loaded in this main entry
import 'babel-polyfill'
import 'isomorphic-fetch'
import 'raf/polyfill'

// babel-polyfill obsahuje mnozstvo veciciek, jednou z nich je aj ES6 promise
// v pripade, ze by sme chceli mat mensiu kniznicu a vyuzivat iba jednotlive moduly,
// naimportujeme si teito moduly
//import 'core-js/library/es6/promise';

import '../css/libs.scss'
import '../css/main.scss'

particlesJS('particles-js', ParticlesConfig)

$(document).ready(function() {
    // do something ...
    $('.my-tooltip').tooltip()
})
