//% color=300 weight=50 icon="\uf21e" block="Neural Network"
namespace AI {
    //% block
export function MakeNet (Inputs: number, Outputs: number) {
    let OutputArray = []
    let TempArray = []
    for (let index = 0; index < Inputs + 1; index++) {
        TempArray.push(0)
    }
    OutputArray.push([TempArray, TempArray, TempArray])
    for (let index = 0; index < 2; index++) {
        OutputArray.push([[
        0,
        0,
        0,
        0
        ], [
        0,
        0,
        0,
        0
        ], [
        0,
        0,
        0,
        0
        ]])
    }
    OutputArray.push([])
    for (let index = 0; index < Outputs; index++) {
        OutputArray[3].push([
        0,
        0,
        0,
        0
        ])
    }
    return OutputArray
}
    //% block
    export function Accuracy (Net: any[], Inputs: number, Outputs: number, InputOutput: number[][][]) {
    let _var2 = 0
    for (let value22 of InputOutput) {
        for (let index6 = 0; index6 <= Outputs - 1; index6++) {
            _var2 += value22[1][index6] - Think(Net, value22[0], Outputs)[index6]
        }
    }
    return _var2 / InputOutput.length
}
    //% block
    export function RandomNet (Inputs: number, Outputs: number) {
    let OutputArray = []
    OutputArray.push([])
    for (let index = 0; index < 3; index++) {
        let TempArray = []
        for (let index = 0; index < Inputs + 1; index++) {
            TempArray.push(randint(0, 100) / 100)
        }
        OutputArray[0].push(TempArray)
    }
    for (let index = 0; index < 2; index++) {
        OutputArray.push([[
        randint(0, 100) / 100,
        randint(0, 100) / 100,
        randint(0, 100) / 100,
        randint(0, 100) / 100
        ], [
        randint(0, 100) / 100,
        randint(0, 100) / 100,
        randint(0, 100) / 100,
        randint(0, 100) / 100
        ], [
        randint(0, 100) / 100,
        randint(0, 100) / 100,
        randint(0, 100) / 100,
        randint(0, 100) / 100
        ]])
    }
    OutputArray.push([])
    for (let index = 0; index < Outputs; index++) {
        OutputArray[3].push([
        randint(0, 100) / 100,
        randint(0, 100) / 100,
        randint(0, 100) / 100,
        randint(0, 100) / 100
        ])
    }
    return OutputArray
}
    //% block
    export function Mix (FIRST: number[][][], Inputs: number, Outputs: number, SECOND: number[][][]) {
    let OutputArray4 = MakeNet(Inputs, Outputs)
    for (let index = 0; index <= 2; index++) {
        for (let index92 = 0; index92 <= Inputs; index92++) {
            OutputArray4[0][index][index92] = randint(FIRST[0][index][index92] * 100, SECOND[0][index][index92] * 100) / 100
        }
    }
    for (let index = 0; index <= 1; index++) {
        OutputArray4[index + 1] = [[
        randint(FIRST[index + 1][0][0] * 100, SECOND[index + 1][0][0] * 100) / 100,
        randint(FIRST[index + 1][0][1] * 100, SECOND[index + 1][0][1] * 100) / 100,
        randint(FIRST[index + 1][0][2] * 100, SECOND[index + 1][0][2] * 100) / 100,
        randint(FIRST[index + 1][0][3] * 100, SECOND[index + 1][0][3] * 100) / 100
        ], [
        randint(FIRST[index + 1][1][0] * 100, SECOND[index + 1][1][0] * 100) / 100,
        randint(FIRST[index + 1][1][1] * 100, SECOND[index + 1][1][1] * 100) / 100,
        randint(FIRST[index + 1][1][2] * 100, SECOND[index + 1][1][2] * 100) / 100,
        randint(FIRST[index + 1][1][3] * 100, SECOND[index + 1][1][3] * 100) / 100
        ], [
        randint(FIRST[index + 1][2][0] * 100, SECOND[index + 1][2][0] * 100) / 100,
        randint(FIRST[index + 1][2][1] * 100, SECOND[index + 1][2][1] * 100) / 100,
        randint(FIRST[index + 1][2][2] * 100, SECOND[index + 1][2][2] * 100) / 100,
        randint(FIRST[index + 1][2][3] * 100, SECOND[index + 1][2][3] * 100) / 100
        ]]
    }
    for (let index = 0; index <= Outputs - 1; index++) {
        for (let index92 = 0; index92 <= 3; index92++) {
            OutputArray4[3][index][index92] = randint(FIRST[3][index][index92] * 100, SECOND[3][index][index92] * 100) / 100
        }
    }
    return OutputArray4
}
    //% block
    export function Think (Net: number[][][], Inputs: any[], Outputs: number) {
    let TempArray4 = [0, 0, 0]
    for (let index122 = 0; index122 <= 2; index122++) {
        for (let index = 0; index <= Inputs.length - 1; index++) {
            TempArray4[index122] = TempArray4[index122] + Net[0][index122][index + 1] * Inputs[index]
        }
        TempArray4[index122] = Math.constrain(TempArray4[index122] + Net[0][index122][0], 0, 1)
    }
    let ArrayTemp4 = [0, 0, 0]
    let xednI4 = 1
    for (let index = 0; index < 2; index++) {
        for (let index15 = 0; index15 <= 2; index15++) {
            for (let index = 0; index <= 2; index++) {
                ArrayTemp4[index15] = ArrayTemp4[index15] + Net[xednI4][index15][index + 1] * TempArray4[index]
            }
            ArrayTemp4[index15] = Math.constrain(ArrayTemp4[index15] + Net[xednI4][index15][0], 0, 1)
        }
        TempArray4 = ArrayTemp4
        ArrayTemp4 = [0, 0, 0]
        xednI4 += 1
    }
    ArrayTemp4 = []
    for (let index = 0; index < Outputs; index++) {
        ArrayTemp4.push(0)
    }
    for (let index18 = 0; index18 <= Outputs - 1; index18++) {
        for (let value9 = 0; value9 <= 2; value9++) {
            ArrayTemp4[index18] = ArrayTemp4[index18] + Net[xednI4][index18][value9 + 1] * TempArray4[value9]
        }
        ArrayTemp4[index18] = Math.constrain(ArrayTemp4[index18] + Net[xednI4][index18][0], 0, 1)
    }
    for (let value of ArrayTemp4) {
        ArrayTemp4[ArrayTemp4.indexOf(value)] = Math.round(value * 100) / 100
    }
    return ArrayTemp4
}
}