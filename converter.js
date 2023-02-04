function rgbToHsv(r, g, b) {
    if(r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
        var newR = r/225
        var newG = g/255
        var newB = b/255 

        var cMax = Math.max(newR, newG, newB)
        var cMin = Math.min(newR, newG, newB)
        var delta = cMax - cMin
        var hue
        var saturation
        var value
        if (delta == 0){
            hue = 0
        }
        else if(cMax == newR){
            hue = 60 * (Math.mod(((newG-newB)/delta),6))
        }
        else if(cMax == newG){
            hue = 60 * (((newB - newR)/delta) + 2)
        }        
        else if(cMax == newB){
            hue = 60 * (((newR - newG)/delta) + 4)
        }
        else{
            console.error('Hue error')
        }

        if (cMax == 0){
            saturation = 0
        }
        else if(cMax != 0){
            saturation = delta/cMax
        }
        value = cMax
    }
    else {
        console.error('invalid values');
    }

    const hsvConverted = [hue, saturation, value]

    return hsvConverted;
}

function hsvToRgb(h, s, v) {
    if(h >= 0 && h <= 360 && s >= 0 && s <= 1 && v >= 0 && v <= 1) {
    var v
    var s
    var x
    var m
    var answerArray = new Array()
    var answerArray = []

    c = v * s
    x = c * (1 - Math.abs(Math.mod((h/60), 2) - 1))
    m = v - c

    if(h >= 0 && h < 60){
        answerArray[0] =  c
        answerArray[1] = x
        answerArray[2] = 0
    }
    else if(h >= 60 && h < 120){
        answerArray[0] =  x
        answerArray[1] = c
        answerArray[2] = 0
    }
    else if(h >= 120 && h < 180){
        answerArray[0] =  0
        answerArray[1] = c
        answerArray[2] = x
    }
    else if(h >= 180 && h < 240){
        answerArray[0] =  0
        answerArray[1] = x
        answerArray[2] = c    
    }
    else if(h >= 240 && h < 300){
        answerArray[0] =  x
        answerArray[1] = 0
        answerArray[2] = c
    }
    else if(h >= 300 && h < 360){
        answerArray[0] =  c
        answerArray[1] = 0
        answerArray[2] = x
    }
    else console.error('invalid values');
    }

    const rgbConverted = [answerArray[0], answerArray[1], answerArray[2]]
    
    return rgbConverted;
}

function startProg() {
    var firstConvDesicion = prompt("What conversion would you like to use?\n 1. RGB to HSV\n 2. HSV to RGB\n digite el número")

    if (firstConvDesicion == 1){
        var red = prompt("Ingrese el valor rojo: ")
        var green = prompt("Ingrese el valor verde: ")
        var blue = prompt("Ingrese el valor azul: ")
        rgbToHsv(red, green, blue)
    }
    else if(firstConvDesicion == 2){
        console.log("wow")
    }
    else {
        console.error("INVALID INPUT")
        startProg()
    }

    return null
}

startProg();