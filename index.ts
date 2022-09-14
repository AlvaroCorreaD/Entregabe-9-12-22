class Auto{
    public encendidoAapagado: boolean;
    public marcaAuto: string;
    public modeloAuto: string;
    public tipoVehiculo: string;
    public cantPuertas: number;
    public cilindradaMotor: number;
    public litrosBaul: number;

    public constructor(paramMarca: string, paramModelo: string, paramTipoV: string, paramCantP: number, paramCilindrada: number, paramLitrosB: number){
        this.marcaAuto = paramMarca;
        this.modeloAuto = paramModelo;
        this.tipoVehiculo = paramTipoV;
        this.cantPuertas = paramCantP;
        this.cilindradaMotor = paramCilindrada;
        this.litrosBaul = paramLitrosB;
    }

    public encenderApagar(): void{
        if(this.encendidoAapagado === true){
            this.encendidoAapagado = false;
    }else{
        this.encendidoAapagado = true;
         }
    }

    public getMarca(): string{
        return this.marcaAuto;
    }

    public getModelo(): string{
        return this.modeloAuto;
    }

    public getTipo(): string{
        return this.tipoVehiculo;
    }

    public setNumpuertas(): number{
        return this.cantPuertas;
    }

    public setCilindrada(): number{
        return this.cilindradaMotor;
    }

    public setLitrosBaul(): number{
        return this.litrosBaul;
    }
}

class RegistroAutomotor{
    public estadoActualizar: string;
    public estadoDarDeAlta: boolean;
    public estadoBorrar: boolean;

    public constructor(paramActualizarReg: string, paramCrearAuto: boolean, paramBorrarAuto: boolean){
        this.estadoActualizar = paramActualizarReg;
        this.estadoDarDeAlta = paramCrearAuto;
        this.estadoBorrar = paramBorrarAuto;
    }

    public actualizarRegistro(): string{
        return this.estadoActualizar;
    }

    public darAltaRegistro(): void{
        if(this.estadoDarDeAlta === true){
            this.estadoDarDeAlta = false;
        }else{
            this.estadoDarDeAlta = true;
        }
    }

    public borrarRegistro(): void{
        if(this.estadoBorrar === true){
            this.estadoBorrar = false;
        }else{
            this.estadoBorrar = true;
        }
    }
}

let auto1: Auto = new Auto("VolksWagen", "Taos", "SUV", 4, 4, 498);
let auto2: Auto = new Auto("Chevrolet", "Onix Plus", "Sedan", 4, 3, 469);
let auto3: Auto = new Auto("Toyota", "GR-86", "Depotrivo", 2, 4, 290);

let registro1: RegistroAutomotor = new RegistroAutomotor("Nuevo", true, false);
let registro2: RegistroAutomotor = new RegistroAutomotor("Usado", false, true);
let registro3: RegistroAutomotor = new RegistroAutomotor("Nuevo", true, false);

let vehiculos: Auto[] = [auto1, auto2, auto3];
let registros: RegistroAutomotor[] = [registro1, registro2, registro3]

console.log("Primer Vehiculo: ", vehiculos[0].getMarca() , vehiculos[0].getModelo());
console.log("Listado: ", registros[0].actualizarRegistro());