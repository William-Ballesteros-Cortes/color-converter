import * as THREE from './modulos/three.module.js'
import {OrbitControls} from '../modulos/OrbitControls.js'
import {MTLLoader} from './modulos/MTLLoader.js'
import {OBJLoader} from './modulos/OBJLoader.js'
import {STLLoader} from './modulos/STLLoader.js'
//import * as THREE from './js/three.s'


const escena = new THREE.Scene()
const camara = new THREE.PerspectiveCamera()
const rende = new THREE.WebGLRenderer()
var bufferTexture = new THREE.WebGLRenderTarget( window.innerWidth, window.innerHeight, { minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter});
rende.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(rende.domElement);
var bufferScene = new THREE.Scene();

escena.background = new THREE.Color('white')

const controls = new OrbitControls(camara,rende.domElement)
//Luces
const luz1= new THREE.DirectionalLight( 0xffffff, 0.5)
const luz2= new THREE.DirectionalLight( 0xffffff, 0.5)
const luz3= new THREE.DirectionalLight( 0xffffff, 0.5)
const luz4= new THREE.DirectionalLight( 0xffffff, 0.5)

const luz1Help = new THREE.DirectionalLightHelper(luz1,5)
const t = new MTLLoader()

t.load('../models/female.mtl', (jc)=>{

    const z = new OBJLoader()
    z.setMaterials(jc)
    z.load('../models/female.obj', (jeanc)=>{
        jeanc.scale.set(0.4,0.4,0.4)
        escena.add(jeanc,luz1,luz1Help,luz2,luz3,luz4)
    })

})


function ani(){
requestAnimationFrame(ani)
//Posiciones de luz y camara
luz1.position.set(0,0,0)
luz2.position.set(0,0,0)
luz3.position.set(-0,0,0)
camara.position.z=150;
rende.render(bufferScene,camara,bufferTexture)
rende.render(escena, camara)
}
ani()